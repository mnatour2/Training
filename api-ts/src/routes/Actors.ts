import { Router } from "express";
import { Actor } from "@entities/Actor";
import { getRepository } from "typeorm";
import { uploadSingleImage } from "../image-upload";
import { StatusCodes } from "http-status-codes";
import { validateWithRepository } from "src/middlewares/validator";

const actorRepository = getRepository(Actor);

export const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", async (_, res, next) => {
  try {
    res.json(await actorRepository.find());
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await actorRepository.findOneOrFail(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  ...uploadSingleImage("image"),
  validateWithRepository(actorRepository),
  async (req, res, next) => {
    try {
      const actor = actorRepository.create(req.body);

      res.json(await actorRepository.save(actor));
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  ...uploadSingleImage("image"),
  validateWithRepository(actorRepository),

  async (req, res, next) => {
    try {
      const {
        body,
        params: { id },
      } = req;
      await actorRepository.findOneOrFail(id);
      await actorRepository.update(id, { ...body });
      res.json(await actorRepository.findOne(id));
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

    await actorRepository.findOneOrFail(id);

    actorRepository.delete(id);

    res.sendStatus(StatusCodes.NO_CONTENT);
  } catch (error) {
    next(error);
  }
});
