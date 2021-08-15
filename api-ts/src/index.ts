import "reflect-metadata";
import { createConnection } from "typeorm";
import "./pre-start"; // Must be the first import
import logger from "@shared/Logger";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "api-ts",
  entities: [__dirname + "/entities/*.ts"],
  synchronize: true,
  logging: false,
})
  .then(async (connection) => {
    const port = Number(process.env.PORT || 3000);
    const { default: app } = await import("@server");
    app.listen(port, () => {
      logger.info("Express server started on port: " + port);
    });
  })
  .catch((error) => console.log(error));
