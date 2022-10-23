import fsExtra from "fs-extra";
import path from "path";

type checkObj = {
  // return object of check()
  imgPath: string;
  thumbPath: string;
  valid: boolean;
};
function check( // function that returns the path to target image and the path that resized image will be saved
  name: string,
  width: number,
  height: number,
  formats: string[]
): checkObj {
  const empty1 = "";
  const empty2 = " ";
  const notvalid = false;
  for (let i = 0; i < formats.length; i++) {
    let valid = false;
    const imgPath: string = path.join(
      // path of the image
      __dirname + `./../../images/${name}.${formats[i]}`
    );
    const thumbPath: string = path.join(
      // path of the resized image
      __dirname +
        `./../../thumbs/${name}_w${width}px_h${height}px.${formats[i]}`
    );

    if (fsExtra.existsSync(imgPath)) {
      // checking if the image exists
      console.log(`${name}.${formats[i]} Is Valid Image Name And format`);
      valid = true;
      return { imgPath, thumbPath, valid };
    }
  }
  return { imgPath: empty1, thumbPath: empty2, valid: notvalid };
}
export default check;
