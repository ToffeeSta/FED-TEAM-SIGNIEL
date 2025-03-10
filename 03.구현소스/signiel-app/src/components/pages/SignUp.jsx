import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// 모듈 CSS 불러오기 /////
import "../../css/pages/member.scss";

// 제이쿼리 불러오기 ////
import $ from "jquery";

// 로컬스토리지 생성 JS import //
import { initData } from "../../js/func/signUp_fn";

function SignUp() {
  const goPage = useNavigate();

  const [userEmail, setuserEmail] = useState("");
  const [password, setpassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [userEmailError, setuserEmailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [chkPasswordError, setChkPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);

  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    "최소 5글자 이상 입력해주세요",
    "이미 사용중인 아이디입니다.",
    "사용가능한 아이디입니다!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    password: "특수문자, 문자, 숫자를 포함하여 5자 이상 입력해주세요",
    confpassword: "비밀번호가 일치하지 않습니다",
    req: "필수로 입력해주세요",
  }; ///// msgEtc ///////

  const [idMsg, setIdMsg] = useState(msgId[0]);

  // [ 유효성 검사 함수 ] ///////
  const changeuserEmail = (e) => {
    let val = e.target.value;

    // 1. 이메일 유효성 검사식
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (valid.test(val)) {
      initData();
      let userData = localStorage.getItem("users");

      userData = JSON.parse(userData);

      let isT = userData.some((v) => v.email === val);

      if (isT) {
        setIdMsg(msgId[1]);
        setuserEmailError(true);
      } ///// if /////
      else {
        setuserEmailError(false);
      } ///// else //////
    } /// if /////////////////////////
    else {
      setIdMsg(msgId[0]);
      setuserEmailError(true);
    } /// else ///

    setuserEmail(val);
  }; ////////// changeuserEmail 함수 ////////////

  // 2. 비밀번호 유효성 검사 ///////////
  const changepassword = (e) => {
    let val = e.target.value;

    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (valid.test(val)) setpasswordError(false);
    else setpasswordError(true);

    setpassword(val);
  }; ///////// changepassword 함수 //////////

  // 3. 비밀번호확인 유효성 검사 ///////////
  const changeChkPassword = (e) => {
    let val = e.target.value;

    if (password === val) setChkPasswordError(false);
    else setChkPasswordError(true);

    setChkPassword(val);
  }; ///////// changeChkPassword 함수 //////////

  // 4. 사용자이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    let val = e.target.value;

    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    setUserName(val);
  }; ///////// changeUserName 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    if (!userEmail) setuserEmailError(true);
    if (!password) setpasswordError(true);
    if (!chkPassword) setChkPasswordError(true);
    if (!userName) setUserNameError(true);

    if (
      userEmail &&
      password &&
      chkPassword &&
      userName &&
      !userEmailError &&
      !passwordError &&
      !chkPasswordError &&
      !userNameError
    )
      return true;
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [ 서브밋 기능함수 ] ////////////////
  const onSubmit = (e) => {
    // 1. 기본서브밋 막기
    e.preventDefault();

    // 2. 유효성검사 전체 통과시
    if (totalValid()) {
      initData();

      let userData = localStorage.getItem("users");

      userData = JSON.parse(userData);

      let temp = userData.map((v) => v.id);

      let newData = {
        id: Math.max(...temp) + 1,
        email: userEmail,
        password: password,
        name: userName,
      };

      userData.push(newData);

      localStorage.setItem("users", JSON.stringify(userData));

      document.querySelector(".txt-box").innerText =
        "회원가입에 성공하였습니다!";

      setTimeout(() => {
        goPage("/login");
      }, 1000);
    } ///////// if /////////
    else {
      alert("회원가입에 실패하였습니다!");
    } //// else ///////////
  }; /////////// onSubmit 함수 //////////

  // 리턴 코드구역 ///////////////
  return (
    <div className="outbx">
      <section className="membx">
        <h2 className="txt-box">회원가입</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
              <label>이메일 </label>
              <input
                type="text"
                maxLength="20"
                placeholder="이메일을 입력해주세요"
                value={userEmail}
                onChange={changeuserEmail}
                onBlur={changeuserEmail}
              />
              {userEmailError && (
                <div className="msg">
                  <small
                    style={{
                      color: "red",
                      fontSize: "10px",
                    }}
                  >
                    {idMsg}
                  </small>
                </div>
              )}
              {!userEmailError && userEmail && (
                <div className="msg">
                  <small
                    style={{
                      color: "green",
                      fontSize: "10px",
                    }}
                  >
                    {msgId[2]}
                  </small>
                </div>
              )}
            </li>
            <li>
              <label>비밀번호 </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={changepassword}
                onBlur={changepassword}
              />
              {passwordError && (
                <div className="msg">
                  <small
                    style={{
                      color: "red",
                      fontSize: "10px",
                    }}
                  >
                    {msgEtc.password}
                  </small>
                </div>
              )}
            </li>
            <li>
              <label>비밀번호 확인 </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호를 다시 입력해주세요"
                value={chkPassword}
                onChange={changeChkPassword}
                onBlur={changeChkPassword}
              />
              {chkPasswordError && (
                <div className="msg">
                  <small
                    style={{
                      color: "red",
                      fontSize: "10px",
                    }}
                  >
                    {msgEtc.confpassword}
                  </small>
                </div>
              )}
            </li>
            <li>
              <label>이름 </label>
              <input
                type="text"
                maxLength="20"
                placeholder="이름을 입력해주세요"
                value={userName}
                onChange={changeUserName}
                onBlur={changeUserName}
              />
              {userNameError && (
                <div className="msg">
                  <small
                    style={{
                      color: "red",
                      fontSize: "10px",
                    }}
                  >
                    {msgEtc.req}
                  </small>
                </div>
              )}
            </li>

            <li className="center">
              이미 계정이 있나요?
              <Link to="/login">로그인</Link>
            </li>
            <li className="center" style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>
                가입하기
              </button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}
export default SignUp;
