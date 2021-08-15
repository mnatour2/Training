import { Router } from "express";
import { router as userRouter } from "./Users";
import { router as movieRouter } from "./Movies";
import { router as actorRouter } from "./Actors";
import { router as authRouter } from "./Auth";

// Export the base-router
const baseRouter = Router();
baseRouter.use("/users", userRouter);
baseRouter.use("/movies", movieRouter);
baseRouter.use("/actors", actorRouter);
baseRouter.use("/auth", authRouter);
export default baseRouter;
