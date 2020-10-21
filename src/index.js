import axios from "axios";


$(function(){
  let pathname = "/users/1"
  getUserInfo(pathname);
  getEduInfo(pathname);
})

 function getUserInfo(pathname){
 const url1 = `http://localhost:8080${pathname}`;

        axios.get(url1).then(
          (response) => {
            let user = response.data;
            $("img").attr("src", user.avatar);
            $(".title").html(
              `MY NAME IS ${user.name} ${user.age}YO AND THIS IS MY RESUME/CV`
            );
            $(".desc").html(user.description);
          });
}

  function getEduInfo(pathname){
  const url2 = `http://localhost:8080${pathname}/educations`;

        axios.get(url2).then(
        (response) => {
          let eduList = response.data;
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
        });

      }

export {getUserInfo, getEduInfo};