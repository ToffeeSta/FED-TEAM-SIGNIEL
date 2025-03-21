import { reservations } from "../data/reservations";
import { posts } from "../data/posts";
import { hotels } from "../data/hotels";
import { rooms } from "../data/rooms";
import { users } from "../data/users";

import { initPostData } from "../../js/func/post_fn";

// [ 로컬스토리지 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬 클리어!");
};

const initAllData = () => {
  if (localStorage.getItem("reservations") === null) {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }
  if (localStorage.getItem("posts") === null) {
    // localStorage.setItem("posts", JSON.stringify(posts));
    initPostData();
  }
  if (localStorage.getItem("hotels") === null) {
    localStorage.setItem("hotels", JSON.stringify(hotels));
  }
  if (localStorage.getItem("rooms") === null) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }
  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export { clearData, initAllData };
