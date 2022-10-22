import sharp from "sharp";

async function resize(
  imgPath: string,
  width: number,
  height: number,
  resizedImgPath: string
): Promise<string> {
  try {
    await sharp(imgPath)
      .resize({ width: width, height: height })
      .toFile(resizedImgPath); // Save Resized Image To thumbs Folder
    return resizedImgPath;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default resize;
