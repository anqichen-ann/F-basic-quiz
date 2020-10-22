import { getUserInfo, getEduInfo } from "../index";
import { renderUserInfo, renderEduInfo } from "../app";

jest.mock("axios");

// TODO GTB-2: - 测试不全
// TODO GTB-2: - 测试没有拆分文件
describe("index", () => {
  test("should get users data with mock axios get", async () => {
    await expect(getUserInfo("")).resolves.toEqual({ name: "ann" });
  });

  test("should get edu data with mock axios get", async () => {
    await expect(getEduInfo("")).resolves.toEqual({ name: "ann" });
  });
});

describe("render userInfo and eduInfo", () => {
  // TODO GTB-2: - 测试不规范
  getUserInfo = jest.fn();
  getEduInfo = jest.fn();
  renderUserInfo("");
  renderEduInfo("");
  test("should call getUserInfo", () => {
    expect(getUserInfo).toHaveBeenCalled();
  });

  test("should call getEduInfo", () => {
    expect(getEduInfo).toHaveBeenCalled();
  });
});
