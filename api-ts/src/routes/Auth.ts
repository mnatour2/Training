import { User } from "@entities/User";
import { Router } from "express";
import { getRepository } from "typeorm";

const repository = getRepository(User);

export const router = Router();
