// Import Express And resizingRoute Module
import express from "express";
import appRouter from "./../app/app";
const app = express()
// Using Express Router
const routes = express.Router();
routes.get('/', (req, res) => {
    res.send('Welcome to the Image-Processing-API');
});
routes.use("/imageResize", appRouter);

export default routes;
