import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// 모듈 CSS 불러오기
import "../../css/pages/member.scss";

function Login({ setIsLoggedIn }) {
  const goPage = useNavigate();

  // [ 상태관리변수 ] /////////////
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userEmailError, setUserEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const msgEmail = ["필수로 입력해주세요", "이메일이 존재하지 않습니다"];
  const msgpassword = ["필수로 입력해주세요", "비밀번호가 일치하지 않습니다"];

  const [emailMsg, setEmailMsg] = useState(msgEmail[0]);
  const [passwordMsg, setPasswordMsg] = useState(msgpassword[0]);

  const changeUserEmail = (e) => {
    let val = e.target.value;
    if (val !== "") setUserEmailError(false);
    else {
      setEmailMsg(msgEmail[0]);
      setUserEmailError(true);
    }
    setUserEmail(val);
  };

  const changepassword = (e) => {
    let val = e.target.value;
    if (val !== "") setPasswordError(false);
    else {
      setPasswordMsg(msgpassword[0]);
      setPasswordError(true);
    }
    setPassword(val);
  };

  const totalValid = () => {
    if (!userEmail) setUserEmailError(true);
    if (!password) setPasswordError(true);
    if (userEmail && password && !userEmailError && !passwordError) return true;
    else return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (totalValid()) {

      let userData = localStorage.getItem("users");
      userData = JSON.parse(userData);

      let result = userData.find((v) => v.email === userEmail);

      if (!result) {
        setEmailMsg(msgEmail[1]);
        setUserEmailError(true);
      } else {
        setUserEmailError(false);
        if (password === result.password) {
          sessionStorage.setItem("users", JSON.stringify(result));

          // 로그인 성공 후 상태 변경
          setIsLoggedIn(true); // 부모 컴포넌트의 로그인 상태를 true로 변경

          document.querySelector(".txt-box").innerText =
            "로그인에 성공하였습니다!";

          setTimeout(() => {
            goPage("/");
          }, 1000);
        } else {
          setPasswordMsg(msgpassword[1]);
          setPasswordError(true);
        }
      }
    } else {
      alert("로그인에 실패하였습니다!");
    }
  };

  useEffect(() => {
    document.querySelector("#user-id").focus();
  }, []);

  return (
    <div className="outbx">
      <section className="membx" style={{ minHeight: "300px" }}>
        <h2 className="txt-box">로그인</h2>
        <form method="post" action="process.php">
          <ul>
            <li>
              <label>이메일 </label>
              <input
                id="user-id"
                type="text"
                maxLength="20"
                placeholder="이메일을 입력해주세요"
                value={userEmail}
                onChange={changeUserEmail}
              />
              {userEmailError && (
                <div className="msg">
                  <small style={{ color: "red", fontSize: "10px" }}>
                    {emailMsg}
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
              />
              {passwordError && (
                <div className="msg">
                  <small style={{ color: "red", fontSize: "10px" }}>
                    {passwordMsg}
                  </small>
                </div>
              )}
            </li>
            <li>
              <h2>테스트 계정 id,pw : test</h2>
            </li>
            <li className="center">
              아직 회원이 아니신가요?
              <Link to="/signup">회원가입</Link>
            </li>
            <li className="center" style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>
                로그인
              </button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Login;
