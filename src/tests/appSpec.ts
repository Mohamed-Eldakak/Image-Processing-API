import path from "path";
import fsExtra from "fs-extra";

const validName = "fjord";
const validFormat = "jpg";
const invalidThumbPath = path.join(
  __dirname + `./../../thumbs/${validName}.${validFormat}`
);
const validThumbPath = path.join(
  __dirname + `./../../thumbs/${validName}_w300px_h300px.${validFormat}`
);

describe("checking the existence of the resized image", () => {
  it("pass the test if the image is not in the given path", async () => {
    const result = fsExtra.existsSync(invalidThumbPath);
    expect(result).toBeFalsy();
  });

  it("pass the test if the image is in the given path", async () => {
    const result = fsExtra.existsSync(validThumbPath);
    expect(result).toBeTruthy();
  });
});
