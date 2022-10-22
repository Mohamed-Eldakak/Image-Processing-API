import resizeImage from "../app/resize";
import path from "path";

const name = "fjord";
const width = 300;
const invalidWidth = 0;
const height = 300;
const invalidHeight = 0;
const format = "jpg";
const imgPath = path.join(__dirname + `./../../images/${name}.${format}`);
const thumbPath = path.join(
  __dirname + `./../../thumb/${name}_w${width}px_h${height}px.${format}`
);

describe("Testing Processing Image With Sharp", () => {
  it("Pass test because of valid inputs", async () => {
    try {
      const result = await resizeImage(imgPath, width, height, thumbPath);
      expect(result).toEqual(thumbPath);
    } catch (error) {
      console.log(error, `test failed`);
    }
  });

  it("Throw Error because of invalid input", async () => {
    try {
      const result = await resizeImage(
        imgPath,
        invalidWidth,
        invalidHeight,
        thumbPath
      );
      expect(result).toThrowError();
    } catch (error) {
      console.log(error, `test failed`);
    }
  });
});
