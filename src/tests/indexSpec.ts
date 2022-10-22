import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Testing Api Home Routes", () => {
  it("Pass Test For invalid Request", async () => {
    const endpointResponse = await request.get("/api");
    expect(endpointResponse.statusCode).toBe(404);
  });
});
