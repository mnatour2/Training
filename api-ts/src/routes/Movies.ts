import { Router } from "express";
import { Movie } from "@entities/Movie";
import { getRepository } from "typeorm";
import { uploadSingleImage } from "../image-upload";
import { StatusCodes } from "http-status-codes";
import { validateWithRepository } from "src/middlewares/validator";

const movieRepository = getRepository(Movie);

export const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", async (_, res, next) => {
  try {
    res.json(await movieRepository.find());
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await movieRepository.findOneOrFail(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  ...uploadSingleImage("poster"),
  validateWithRepository(movieRepository),
  async (req, res, next) => {
    try {
      let countryReady: string = req.body.country;
      countryReady =
        countryReady.charAt(0).toUpperCase() +
        countryReady.slice(1).toLowerCase();
      const { body } = req;
      const movie = movieRepository.create({
        ...body,
        country: countryReady,
      });

      res.json(await movieRepository.save(movie));
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  ...uploadSingleImage("poster"),
  validateWithRepository(movieRepository),
  async (req, res, next) => {
    try {
      const {
        body,
        params: { id },
      } = req;
      await movieRepository.findOneOrFail(id);
      await movieRepository.update(id, { ...body });

      res.json(await movieRepository.findOne(id));
    } catch (error) {
      next(error);
    }
  }
);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.delete("/:id", async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    await movieRepository.findOneOrFail(id);

    movieRepository.delete(id);

    res.sendStatus(StatusCodes.NO_CONTENT);
  } catch (error) {
    next(error);
  }
});
