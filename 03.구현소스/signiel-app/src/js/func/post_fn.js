// 게시판 로컬스토리지 JS

/************************************ 
    [ 게시판 기본 데이터 구조 ]
    1. id: 데이터 분류 아이디
    2. user_id: 유저 아이디
    3. hotel_id: 호텔 분류 아이디
    4. post_type: 게시물 카테고리 타입
    5. rating: 별점 등급
    6. title: 게시물 제목
    7. content: 게시물 내용
    8. created_at: 작성 날짜
************************************/

// 기초 데이터 제이슨 불러오기
import {posts} from "../data/posts.js";

// [ 로컬쓰 클리어 ] /////////
const clearPostData = () => {
  localStorage.removeItem("posts");
  console.log("게시판 로컬쓰 클리어");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initPostData = () => {
  // 만약 로컬스 "mem-data"가 null이면 만들어준다!
  if (localStorage.getItem("posts") === null) {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }
}; ///////////// initData /////////////////

export { clearPostData, initPostData };
