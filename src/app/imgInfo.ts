import sharp from "sharp";

async function getImgInfo(imageFullPath: string): Promise<void> {
  try {
    const metadata = await sharp(imageFullPath).metadata();
    console.log(metadata);
  } catch (error) {
    console.log(error);
  }
}

export default getImgInfo;
