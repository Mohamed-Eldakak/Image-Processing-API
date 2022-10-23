// Import Express And resizingRoute Module
import express, { Request, Response } from "express";
import appRouter from "./../app/app";
// Using Express Router
const routes = express.Router();
routes.get("/", (req: Request, res: Response): void => {
  res.status(200).send("Welcome to the Image-Processing-API");
});
routes.use("/imageResize", appRouter);

export default routes;
