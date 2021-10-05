import express, { Application } from "express";
import cors from "cors";

import blogRoutes from "../routes/blog";
import userRoutes from "../routes/user";
import homeRoutes from "../routes/home";
import db from "../db/connection";
class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    home: "/api/home",
    blogs: "/api/blogs",
    users: "/api/users",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.dbConnection();

    // middlewares
    this.middlewares();
    // routes
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("database onnline");
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPath.blogs, blogRoutes);
    // this.app.use(this.apiPath.users, userRoutes);
    this.app.use(this.apiPath.home,homeRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port ", this.port);
    });
  }
}

export default Server;
