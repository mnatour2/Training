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
      const { body, file: poster } = req;
      const movie = movieRepository.create({
        ...body,
        poster: poster?.path,
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
        file: poster,
        params: { id },
      } = req;
      await movieRepository.findOneOrFail(id);

      if (poster) {
        await movieRepository.update(id, {
          ...body,
          poster: poster?.path,
        });
      } else {
        await movieRepository.update(id, {
          ...body,
        });
      }

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
