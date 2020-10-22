import {getUserInfo, getEduInfo} from '../index'
import {renderUserInfo, renderEduInfo} from '../app'
jest.mock("axios");

describe("index", () => {
  test("should get users data with mock axios get", async () => {
    await expect(getUserInfo("")).resolves.toEqual({ name: "ann" })
  });

  test("should get edu data with mock axios get", async () => {
    await expect(getEduInfo("")).resolves.toEqual({ name: "ann" })
  });
});

describe("render userInfo and eduInfo", () => {
  getUserInfo = jest.fn();
  getEduInfo = jest.fn();
  renderUserInfo('');
  renderEduInfo('');
  test("should call getUserInfo",  () => {
    expect(getUserInfo).toHaveBeenCalled()
  });

  test("should call getEduInfo",  () => {
    expect(getEduInfo).toHaveBeenCalled()
  });
  
});
