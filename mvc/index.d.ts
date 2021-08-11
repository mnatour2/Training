import { Knex } from "knex";

declare module "express" {
  interface Request {
    db: Knex;
  }
}

declare module "express-session" {
  interface SessionData {
    loginFailed?: boolean;
    loggedin?: boolean;
    userId?: number;
  }
}
