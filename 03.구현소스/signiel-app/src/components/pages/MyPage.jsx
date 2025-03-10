import React from "react";

import "../../css/pages/mypage.scss";

import UserReserv from "../modules/UserReserv";
import UserPost from "../modules/UserPost";

function User(props) {
  // 세션 스토리지에서 users의 name과 email 읽어오기
  const userName = JSON.parse(sessionStorage.getItem("users"))?.name;
  const userEmail = JSON.parse(sessionStorage.getItem("users"))?.email;
  const memNum = JSON.parse(sessionStorage.getItem("users"))
    ?.id.toString()
    .padStart(6, "0");

  return (
    <>
    <section className="my-page">
      <div className="user-Info">
        <h2 className="tit">내 정보</h2>
        {/* 1. 사용자 정보 */}
        <ul>
          <div className="con-wrap">
            <li>
              <h3>이름</h3>
              <p>{userName}</p>
            </li>
            <li>
              <h3>이메일</h3>
              <p>{userEmail}</p>
            </li>
          </div>
          <li>
            <h3>회원번호</h3>
            <p>{memNum}</p>
          </li>
        </ul>
      </div>

      <div className="bottom-con">
        {/* 2. 스와이퍼 컴포넌트 */}
        <UserReserv />
        {/* 2. 스와이퍼 컴포넌트 */}
        <UserPost />
      </div>
    </section>
    </>
  );
}

export default User;
