import { User } from "@entities/User";
import { Router } from "express";
import { uploadSingleImage } from "../image-upload";
import { validateWithRepository } from "../middlewares/validator";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { sign } from "jsonwebtoken";
import { auth } from "../middlewares/auth";

const repository = getRepository(User);

export const router = Router();

router.post(
  "/register",
  auth("guest"),
  ...uploadSingleImage("profile_picture"),
  validateWithRepository(repository),
  async (req, res, next) => {
    try {
      const user = repository.create(req.body);

      res.json(await repository.save(user));
    } catch (error) {
      next(error);
    }
  }
);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post("/login", auth("guest"), async (req, res, next) => {
  try {
    const { body } = req;
    const [user] = await repository.find({
      where: {
        username: body.username,
      },
      select: ["id", "password"],
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
      const token = sign({ userId: user.id }, "secret", { expiresIn: "1h" });

      res.json({ access_token: token });
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({ error: "Wrong credentials" });
    }
  } catch (error) {
    next(error);
  }
});
