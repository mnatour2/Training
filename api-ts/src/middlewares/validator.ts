import { validate } from "class-validator";
import { RequestHandler } from "express";
import { Repository } from "typeorm";

export const validateWithRepository = (
  repository: Repository<any>
): RequestHandler => {
  return async (req, res, next) => {
    const entity = repository.create(req.body);

    const errors = await validate(entity, {
      skipMissingProperties: ["put", "patch"].includes(
        req.method.toLowerCase()
      ),
    });

    if (errors.length) {
      res.status(400).json({ message: "Bad request", errors });
    } else {
      next();
    }
  };
};
