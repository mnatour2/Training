import { Router } from "express";
import { Actor } from "@entities/Actor";
import { getRepository } from "typeorm";
import { upload } from "../image-upload";
import { StatusCodes } from "http-status-codes";

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

router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    const { body, file: image } = req;
    const actor = actorRepository.create({
      ...body,
      image: image?.path,
    });

    res.json(await actorRepository.save(actor));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", upload.single("image"), async (req, res, next) => {
  try {
    const {
      body,
      file: image,
      params: { id },
    } = req;
    await actorRepository.findOneOrFail(id);

    if (image) {
      await actorRepository.update(id, {
        ...body,
        image: image?.path,
      });
    } else {
      await actorRepository.update(id, {
        ...body,
      });
    }

    res.json(await actorRepository.findOne(id));
  } catch (error) {
    next(error);
  }
});

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
