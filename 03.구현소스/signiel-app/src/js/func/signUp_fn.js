// 회원가입을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 회원가입 기본 데이터 구조 ]
    1. PK : id
    2. 사용자이름 : name
    3. 이메일(아이디로 사용) : email
    4. 비밀번호 : password
************************************/

import { users } from "../data/users"; // users.js에서 users 배열 가져오기

// [ 로컬스토리지 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬 클리어!");
};

// [ 로컬스토리지 초기 체크 및 세팅 ] ////////////
const initData = () => {
  // 만약 로컬스토리지 "users"가 없으면 users 데이터를 저장
  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(users));
    // console.log("로컬스토리지 초기 데이터 저장 확인");
  }
};

export { clearData, initData };
