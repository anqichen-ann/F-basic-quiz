import axios from "axios";

 function getUserInfo(pathname){
 const url1 = `http://localhost:8080${pathname}`;
    return    axios.get(url1).then(
          (response) => response.data);
}

  function getEduInfo(pathname){
  const url2 = `http://localhost:8080${pathname}/educations`;
    return  axios.get(url2).then(
        (response) => response.data);}

export {getUserInfo, getEduInfo};