import "reflect-metadata";
import { createConnection } from "typeorm";
import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";
import { User } from "@entities/User";

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
    app.listen(port, () => {
      logger.info("Express server started on port: " + port);
    });
  })
  .catch((error) => console.log(error));

/*
//insert into database using async
let user = new User();
user.username = "natour_m";
user.password = "natour123";
user.email = "natour@vatrin.com";
user.mobile = "0598220091";
user.profile_picture = "mypic";
await connection.manager.save(user);
console.log("User has been saved");

//getting data using entity manager
let savedUsers = await connection.manager.find(User);
console.log("All photos from the db: ", savedUsers);
*/

/*
    const user = new User();
    user.username = "natour_m";
    user.password = "natour123";
    user.email = "natour@vatrin.com";
    user.mobile = "0598220091";
    user.profile_picture = "mypic";
    const userRepository = connection.getRepository(User);
    await userRepository.save(user);
    console.log("User has been saved");

    let savedUsers = await userRepository.find();
    console.log("All Users from the db: ", savedUsers);
    */
