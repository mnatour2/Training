import { Router } from "express";
import { User } from "@entities/User";
import { getRepository } from "typeorm";
import { uploadSingleImage } from "../image-upload";
import { StatusCodes } from "http-status-codes";
import { validateWithRepository } from "src/middlewares/validator";

const userRepository = getRepository(User);

export const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/", async (_, res, next) => {
  try {
    res.json(await userRepository.find());
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await userRepository.findOneOrFail(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  ...uploadSingleImage("picture"),
  validateWithRepository(userRepository),
  async (req, res, next) => {
    try {
      const { body, file: picture } = req;
      const user = userRepository.create({
        ...body,
        profile_picture: picture?.path,
      });

      res.json(await userRepository.save(user));
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  ...uploadSingleImage("picture"),
  validateWithRepository(userRepository),
  async (req, res, next) => {
    try {
      const {
        body,
        file: picture,
        params: { id },
      } = req;
      await userRepository.findOneOrFail(id);

      if (picture) {
        await userRepository.update(id, {
          ...body,
          profile_picture: picture?.path,
        });
      } else {
        await userRepository.update(id, {
          ...body,
        });
      }

      res.json(await userRepository.findOne(id));
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

    await userRepository.findOneOrFail(id);

    userRepository.delete(id);

    res.sendStatus(StatusCodes.NO_CONTENT);
  } catch (error) {
    next(error);
  }
});
