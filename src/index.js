import axios from "axios";

// TODO GTB-4: - 文件命名不规范，index这个名字和当前文件功能模块不相关
function getUserInfo(pathname) {
  // TODO GTB-4: - 变量命名不可读
  // TODO GTB-4: - URL没有提取常量
  const url1 = `http://localhost:8080${pathname}`;
  return axios.get(url1).then((response) => response.data);
}

function getEduInfo(pathname) {
  const url2 = `http://localhost:8080${pathname}/educations`;
  return axios.get(url2).then((response) => response.data);
}

export { getUserInfo, getEduInfo };
