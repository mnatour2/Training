import { Router } from "express";
import { User } from "@entities/User";
import { getRepository } from "typeorm";
import { uploadSingleImage } from "../image-upload";
import { StatusCodes } from "http-status-codes";
import { validateWithRepository } from "src/middlewares/validator";
import { auth } from "src/middlewares/auth";

const userRepository = getRepository(User);

export const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", auth(), async (_, res, next) => {
  try {
    res.json(await userRepository.find());
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:id", auth(), async (req, res, next) => {
  try {
    res.json(await userRepository.findOneOrFail(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  auth(),
  ...uploadSingleImage("profile_picture"),
  validateWithRepository(userRepository),
  async (req, res, next) => {
    try {
      const user = userRepository.create(req.body);

      res.json(await userRepository.save(user));
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  auth(),
  ...uploadSingleImage("profile_picture"),
  validateWithRepository(userRepository),
  async (req, res, next) => {
    try {
      const {
        body,
        params: { id },
      } = req;
      await userRepository.findOneOrFail(id);
      await userRepository.update(id, { ...body });

      res.json(await userRepository.findOne(id));
    } catch (error) {
      next(error);
    }
  }
);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.delete("/:id", auth(), async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    await userRepository.findOneOrFail(id);

    userRepository.delete(id);

    res.sendStatus(StatusCodes.NO_CONTENT);
  } catch (error) {
    next(error);
  }
});
