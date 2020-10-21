import {getUserInfo, getEduInfo} from '../index'
jest.mock("axios");

describe("getInfo", () => {
  test("should get users data with mock axios get", async () => {
    await expect(getUserInfo("")).resolves.toEqual({ name: "ann" })
  });
});

describe("getEduInfo", () => {
  test("should get edu data with mock axios get", async () => {
    await expect(getEduInfo("")).resolves.toEqual({ name: "ann" })
  });
});
