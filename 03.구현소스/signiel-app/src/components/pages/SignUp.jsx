// DC.com - 회원가입 페이지 컴포넌트 - Member.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 로컬스토리지 생성 JS ////
import { initData } from "../../js/func/mem_fn";

// 제이쿼리 불러오기 ////
import $ from "jquery";

// 모듈 CSS 불러오기 /////
import "../../css/pages/join.scss";

function SignUp(props) {
  // 라우터이동 객체 생성하기 ///
  const goPage = useNavigate();
  // 사용시: goPage(라우터주소,state변수)

  // [ 상태관리변수 ] /////////////
  // [1] 입력요소 상태변수
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState(false);
  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    // 1. 최소 5글자 이상 입력할것
    "User ID must contain a minimum of 5 characters",
    // 2. 이미 사용중인 아이디임
    "This ID is already in use!",
    // 3. 훌륭한 아이디!
    "That's a great ID!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
    // 비밀번호확인
    confPwd: "Password verification does not match",
    // 필수입력
    req: "This is a required entry",
    // 이메일
    email: "Please enter a valid email format",
  }; ///// msgEtc ///////
  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  // -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);
  // [ 유효성 검사 함수 ] ///////
  // 1. 아이디 유효성 검사 ////////////
  const changeUserId = (e) => {
    let val = e.target.value;
  
    // 이메일 유효성 검사 정규식
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  
    // 1. 이메일 형식 유효성 검사
    if (valid.test(val)) {
      console.log("아이디 유효성 검사 통과!");
  
      // 2. 로컬스토리지에서 mem-data 읽기
      let memData = localStorage.getItem("mem-data");
  
      // memData가 null이면 초기화
      if (!memData) {
        memData = [];
        localStorage.setItem("mem-data", JSON.stringify(memData)); // 로컬스토리지에 빈 배열 저장
      } else {
        memData = JSON.parse(memData); // 데이터 파싱
      }
  
      // 3. 중복된 아이디가 있는지 확인
      let isT = memData.some((v) => v.email === val);
      console.log("중복 아이디 있나요?", isT);
  
      if (isT) {
        // 중복된 아이디가 있으면 오류 메시지
        setIdMsg(msgId[1]);
        setUserIdError(true);
      } else {
        // 중복된 아이디가 없으면 성공 메시지
        setIdMsg(msgId[2]);
        setUserIdError(false);
      }
    } else {
      // 이메일 형식이 아니면 오류 메시지
      console.log("이메일 형식 오류");
      setIdMsg(msgId[0]);
      setUserIdError(true);
    }
  
    setUserId(val);
  };

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setPwdError(false);
    else setPwdError(true);

    // 4. 기존입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////

  // 3. 비밀번호확인 유효성 검사 ///////////
  const changeChkPwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 비밀번호 입력내용과 일치여부 확인
    if (pwd === val) setChkPwdError(false);
    else setChkPwdError(true);

    // 2. 기존입력값 반영하기
    setChkPwd(val);
  }; ///////// changeChkPwd 함수 //////////

  // 4. 사용자이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크
    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(val);
  }; ///////// changeUserName 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [ 서브밋 기능함수 ] ////////////////
  const onSubmit = (e) => {
    // 1. 기본서브밋 막기
    e.preventDefault();

    console.log("최종검사:", totalValid());
    // 2. 유효성검사 전체 통과시
    if (totalValid()) {
      console.log("모두통과! 저장!");

      // [회원정보를 로컬스토리지에 저장하기]

      // 1. 로컬스 체크함수호출(없으면 생성!)
      initData();

      // 2. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 3. 로컬스 객체변환
      memData = JSON.parse(memData);
      // 최대수를 위한 배열값 뽑기 (idx항목)
      let temp = memData.map((v) => v.idx);
      // 다음 번호는 항상 최대수+1이다!
      console.log("다음번호:", Math.max(...temp) + 1);

      // 4. 새로운 데이터 구성하기
      let newData = {
        id: Math.max(...temp) + 1,
        email: userId,
        password: pwd,
        name: userName,
      };

      // 5. 데이터 추가하기 : 배열에 데이터 추가 push()
      memData.push(newData);

      // 6. 로컬스에 반영하기 : 문자화해서 넣어야함!
      localStorage.setItem("mem-data", JSON.stringify(memData));

      // 7. 회원가입 환영메시지 + 로그인 페이지 이동
      // 버튼 텍스트에 환영메시지
      document.querySelector(".sbtn").innerText = "Thank you for joining us!";
      // 1초후 페이지 이동 : 라우터 Navigate로 이동함
      setTimeout(() => {
        goPage("/login");
        // 주의: 경로앞에 슬래쉬(/) 안쓰면
        // 현재 Memeber 경로 하위 경로를 불러옴
      }, 1000);
    } ///////// if /////////
    // 3. 불통과시 /////
    else {
      console.log($(".msg").eq(0).text());
      alert("Change your input!");
      // showModal();
    } //// else ///////////
  }; /////////// onSubmit 함수 //////////

  // 리턴 코드구역 //////////////
  return (
    <div className="join">
      <h1>회원가입</h1>
      <span></span>
      <p>*필수항목</p>
      <ul>
        {/* <!-- 아이디 --> */}
        <li>
          <label htmlFor="mid" className="itit">
            *
          </label>
          <input
            type="text"
            name="mid"
            id="mid"
            maxLength="20"
            placeholder=" 아이디"
            value={userId}
            onChange={changeUserId}
            onBlur={changeUserId}
          />
          {
            // 에러일 경우 메시지 출력
            // 조건문 && 출력요소
            userIdError && (
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
            )
          }
          {
            // 통과시 메시지 출력
            // 조건문 && 출력요소
            // 조건추가 : userId가 입력전일때 안보임처리
            // userId가 입력전엔 false로 리턴됨!
            !userIdError && userId && (
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
            )
          }
        </li>
        {/* <!-- 비밀번호 --> */}
        <li className="eyeli">
          <label htmlFor="mpw" className="itit">
            *
          </label>
          <input
            type="password"
            name="mpw"
            id="mpw"
            maxLength="15"
            placeholder=" 비밀번호"
            value={pwd}
            onChange={changePwd}
            onBlur={changePwd}
          />
          {
            // 에러일 경우 메시지 출력
            // 조건문 && 출력요소
            pwdError && (
              <div className="msg">
                <small
                  style={{
                    color: "red",
                    fontSize: "10px",
                  }}
                >
                  {msgEtc.pwd}
                </small>
              </div>
            )
          }
        </li>
        {/* <!-- 비밀번호확인 --> */}
        <li>
          <label htmlFor="mpw2" className="itit">
            *
          </label>
          <input
            type="password"
            name="mpw2"
            id="mpw2"
            maxLength="20"
            placeholder=" 비밀번호 확인"
            value={chkPwd}
            onChange={changeChkPwd}
            onBlur={changeChkPwd}
          />
          {
            // 에러일 경우 메시지 출력
            // 조건문 && 출력요소
            chkPwdError && (
              <div className="msg">
                <small
                  style={{
                    color: "red",
                    fontSize: "10px",
                  }}
                >
                  {msgEtc.confPwd}
                </small>
              </div>
            )
          }
        </li>
        {/* <!-- 이름 --> */}
        <li>
          <label htmlFor="mnm" className="itit">
            *
          </label>
          <input
            type="text"
            name="mnm"
            id="mnm"
            maxLength="20"
            placeholder=" 이름"
            value={userName}
            onChange={changeUserName}
            onBlur={changeUserName}
          />
          {
            // 에러일 경우 메시지 출력
            // 조건문 && 출력요소
            userNameError && (
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
            )
          }
        </li>
        <li style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>
                Submit
              </button>
            </li>
            <li>
              Are you already a Member?
              <Link to="/login">Log In</Link>
            </li>
      </ul>
    </div>
  );
}

export default SignUp;
