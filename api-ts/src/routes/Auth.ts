import { User } from "@entities/User";
import { Router } from "express";
import { uploadSingleImage } from "src/image-upload";
import { validateWithRepository } from "src/middlewares/validator";
import { getRepository } from "typeorm";

const repository = getRepository(User);

export const router = Router();

router.post(
  "/register",
  ...uploadSingleImage("picture"),
  validateWithRepository(repository),
  async (req, res, next) => {
    try {
      const { body, file: picture } = req;
      const user = repository.create({
        ...body,
        profile_picture: picture?.path,
      });

      res.json(await repository.save(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  ...uploadSingleImage("picture"),
  validateWithRepository(repository),
  async (req, res, next) => {
    try {
      const { body } = req;
      const user = repository.findOne({
        ...body,
      });
      console.log(user);
      //   res.json(await repository.save(user));
    } catch (error) {
      next(error);
    }
  }
);

// router.post(
//     "/login",
//     isGuest,
//     async (/** @type {express.Request} */ req, res, next) => {
//       try {
//         const {
//           body: { username, password },
//           db,
//         } = req;

//         const user = await db("users")
//           .select("id", "username", "password")
//           .where("username", username)
//           .first();

//         if (user) {
//           const derivedKey = pbkdf2Sync(password, username, 10000, 32, "sha512");
//           const hashPassword = derivedKey.toString("hex");
//           if (hashPassword === user.password) {
//             req.session.loggedin = true;
//             req.session.userId = user.id;
//             res.redirect("home");
//             return;
//           }
//         }

//         req.session.loginFailed = true;
//         res.redirect("/login");
//       } catch (error) {
//         next(error);
//       }
//     }
//   );
