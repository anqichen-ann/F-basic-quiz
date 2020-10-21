
$(function(){
  let pathname = "/users/1"
  getInfo(pathname);
})

export default function getInfo(pathname){
 const url1 = `http://localhost:8080${pathname}`;
  const url2 = `http://localhost:8080${pathname}/educations`;
        $.ajax({
          type: "GET",
          url: url1,
          dataType: "json",
          success: function (data) {
            let user = data;
            $("img").attr("src", user.avatar);
            $(".title").html(
              `MY NAME IS ${user.name} ${user.age}YO AND THIS IS MY RESUME/CV`
            );
            $(".desc").html(user.description);
          },
          error: function (xhr) {
            console.log(xhr);
          },
        });
  
        $.ajax({
          type: "GET",
          url: url2,
          dataType: "json",
          success: function (data) {
            let eduList = data;
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
          },
          error: function (xhr) {
            console.log(xhr);
          },
        });
      }

