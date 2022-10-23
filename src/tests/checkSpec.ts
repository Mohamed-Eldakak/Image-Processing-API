import check from "../app/check";
type checkObj = {
  // return object of check()
  imgPath: string;
  thumbPath: string;
  valid: boolean;
};
const validName = "fjord";
const validWidth = 200;
const validHeight = 200;
const validFormats: string[] = ["jpg", "jpeg"];
const invalidName = "tree";

describe("checking the validity of the user input", () => {
  it("pass the test if the input is valid", async () => {
    const result: checkObj = check(
      validName,
      validWidth,
      validHeight,
      validFormats
    );
    expect(result.valid).toBeTruthy();
  });

  it("pass the test if the input is invalid", async () => {
    const result: checkObj = check(
      invalidName,
      validWidth,
      validHeight,
      validFormats
    );
    expect(result.valid).toBeFalsy();
  });
});
