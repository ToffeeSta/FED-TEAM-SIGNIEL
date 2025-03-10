import { reservations } from "../data/reservations";
import { posts } from "../data/posts";
import { hotels } from "../data/hotels";
import { rooms } from "../data/rooms";
import { users } from "../data/users";

// [ 로컬스토리지 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬 클리어!");
};

const initAllData = () => {
  // 만약 로컬스토리지 "users"가 없으면 users 데이터를 저장
  if (localStorage.getItem("reservations") === null) {
    localStorage.setItem("reservations", JSON.stringify(reservations));
    // console.log("로컬스토리지 초기 데이터 저장 확인");
  }
  if (localStorage.getItem("posts") === null) {
    localStorage.setItem("posts", JSON.stringify(posts));
    // console.log("로컬스토리지 초기 데이터 저장 확인");
  }
  if (localStorage.getItem("hotels") === null) {
    localStorage.setItem("hotels", JSON.stringify(hotels));
    // console.log("로컬스토리지 초기 데이터 저장 확인");
  }
  if (localStorage.getItem("rooms") === null) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
    // console.log("로컬스토리지 초기 데이터 저장 확인");
  }
  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(users));
    // console.log("로컬스토리지 초기 데이터 저장 확인");
  }
};

export {clearData, initAllData};