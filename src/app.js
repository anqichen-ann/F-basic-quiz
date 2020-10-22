import "./style/index.scss";
import { getUserInfo, getEduInfo } from "./index";

// TODO GTB-4: - 没有格式化代码，没有fix eslint error
const pathname = "/users/1";

async function renderUserInfo(path) {
  const userInfo = await getUserInfo(path);
  // TODO GTB-3: - 模块的渲染：最好是抽象出ViewModel层来去分别处理每个业务模块的渲染
  const img = document.createElement("img");
  img.src = userInfo.avatar;
  $(".header").prepend(img);
  $(".title").html(
    `MY NAME IS ${userInfo.name} ${userInfo.age}YO AND THIS IS MY RESUME/CV`
  );
  $(".desc").html(userInfo.description);
}

async function renderEduInfo(path) {
  const eduList = await getEduInfo(path);
  eduList.forEach((edu) => {
    // TODO GTB-3: - 循环里面去操作dom
    $(".edu-list").append(`
            <li>
                <p class="year">${edu.year}</p>
                <div class="edu-desc">
                <h4>${edu.title}</h4>
                <p >${edu.description}</p>
                </div>
            </li>`);
  });
}

renderUserInfo(pathname);
renderEduInfo(pathname);

export { renderUserInfo, renderEduInfo };
