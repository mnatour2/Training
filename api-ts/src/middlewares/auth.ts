import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";

export const auth =
  (checkAuthState: "authed" | "guest" = "authed"): RequestHandler =>
  (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1].trim();

    if (isAuthenticated(token)) {
      if (checkAuthState === "authed") {
        next();
      } else {
        res.status(StatusCodes.FORBIDDEN).json({ error: "Forbidden." });
      }
    } else {
      if (checkAuthState === "guest") {
        next();
      } else {
        res.status(StatusCodes.UNAUTHORIZED).json({ error: "Unauthorized." });
      }
    }
  };

function isAuthenticated(token?: string) {
  if (token) {
    try {
      verify(token, "secret");
      return true;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
