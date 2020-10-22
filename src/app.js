import "./style/index.scss";
import {getUserInfo, getEduInfo} from './index';


let pathname = "/users/1";

async function renderUserInfo(path){
    let userInfo = await getUserInfo(path);
    let img = document.createElement("img");
    img.src = userInfo.avatar;
    $(".header").prepend(img);
    $(".title").html(
        `MY NAME IS ${userInfo.name} ${userInfo.age}YO AND THIS IS MY RESUME/CV`
    );
    $(".desc").html(userInfo.description);
}

async function renderEduInfo(path){
    let eduList = await getEduInfo(path);
    eduList.forEach((edu) => {
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

  export {renderUserInfo, renderEduInfo};
