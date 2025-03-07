// 회원가입을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 회원가입 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 아이디 : uid
    3. 비밀번호 : pwd
    4. 사용자이름 : unm
    5. 이메일 : eml
************************************/

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
  // 만약 로컬스 "mem-data"가 null이면 만들어준다!
  if (localStorage.getItem("mem-data") === null) {
    localStorage.setItem(
      "mem-data",
      `[
    {
      id: 1,
      name: "TestUser",
      email: "Test@gmail.com",
      password: "test1234"
    },
    {
      id: 2,
      name: "이영희",
      email: "younghee@example.com",
      password: "pass5678"
    },
    {
      id: 3,
      name: "박민수",
      email: "minsoo@example.com",
      password: "pass91011"
    },
    {
      id: 4,
      name: "정다은",
      email: "daeun@example.com",
      password: "pass1213"
    },
    {
      id: 5,
      name: "최지훈",
      email: "jihoon@example.com",
      password: "pass1415"
    },
    {
      id: 6,
      name: "한서윤",
      email: "seoyoon@example.com",
      password: "pass1617"
    },
    {
      id: 7,
      name: "오준혁",
      email: "junhyuk@example.com",
      password: "pass1819"
    }
  ]`
    );
  }
}; ///////////// initData /////////////////

export { clearData, initData };
