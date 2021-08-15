import { User } from "@entities/User";
import { Router } from "express";
import { getRepository } from "typeorm";
import { upload } from "../image-upload";

const repository = getRepository(User);

export const router = Router();
