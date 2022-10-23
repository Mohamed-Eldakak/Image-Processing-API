import express, { Request, Response } from "express";
import getImgInfo from "./imgInfo";
import fsExtra from "fs-extra";
import resize from "./resize";
import check from "./check";

type checkObj = {
  imgPath: string;
  thumbPath: string;
  valid: boolean;
};

const appRouter = express.Router();

appRouter.get("/", async (req: Request, res: Response): Promise<void> => {
  const name = String(req.query.name);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  if (isNaN(width) || isNaN(height) || width < 1 || height < 1) {
    console.log(`Invalid Image dimensions`);
    res.status(404).send(`<h1>Please Enter Valid Image Dimensions</h1>`);
    return;
  }
  const formats: string[] = ["jpg", "jpeg", "png"]; // Allowed formats
  const checked: checkObj = check(name, width, height, formats);
  if (checked.valid) {
    console.log(
      `Image Width And Hight Is Valid: W = ${width}px, H = ${height}px`
    );

    getImgInfo(checked.imgPath); // Checking Image Meta Data

    if (fsExtra.existsSync(checked.thumbPath)) {
      // Checking If Requested Image is cached
      try {
        console.log("Retrieved Existing Resized Image");
        return res.status(200).sendFile(checked.thumbPath);
      } catch (error) {
        console.error(error);
        res.status(500);
        return;
      }
    } else {
      // Image doesn't exist in thumbs
      try {
        const resizedImage = await resize(
          checked.imgPath,
          width,
          height,
          checked.thumbPath
        );
        return res.status(200).sendFile(resizedImage);
      } catch (error) {
        console.error(error);
        res.status(500);
        return;
      }
    }
  } else {
    //Image Name And Format Error
    console.log(`Invalid Image Name Or Format Not Supported`);
    res.status(404).send(`<h1>Please Enter a Valid Image Name And Format</h1>`);
    return;
  }
});
export default appRouter;
