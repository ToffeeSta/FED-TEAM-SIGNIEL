// const initDatauser = () => {
//   // 만약 로컬스토리지 "users"가 없으면 users 데이터를 저장
//   if (localStorage.getItem("users") === null) {
//     localStorage.setItem("users", JSON.stringify(users));
//     // console.log("로컬스토리지 초기 데이터 저장 확인");
//   }
// };


export const users = [
    {
      "id": 1,
      "name": "TestUser",
      "email": "Test@gmail.com",
      "password": "test1234"
    },
    {
      "id": 2,
      "name": "이영희",
      "email": "younghee@example.com",
      "password": "pass5678"
    },
    {
      "id": 3,
      "name": "박민수",
      "email": "minsoo@example.com",
      "password": "pass91011"
    },
    {
      "id": 4,
      "name": "정다은",
      "email": "daeun@example.com",
      "password": "pass1213"
    },
    {
      "id": 5,
      "name": "최지훈",
      "email": "jihoon@example.com",
      "password": "pass1415"
    },
    {
      "id": 6,
      "name": "한서윤",
      "email": "seoyoon@example.com",
      "password": "pass1617"
    },
    {
      "id": 7,
      "name": "오준혁",
      "email": "junhyuk@example.com",
      "password": "pass1819"
    }
  ];



  // export { initDatauser };