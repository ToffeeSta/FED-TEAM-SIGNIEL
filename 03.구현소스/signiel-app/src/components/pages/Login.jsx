import React from 'react'

// 모듈 CSS 불러오기 /////
import '../../css/pages/main.scss';

function SignUp(props) {
  return (
<div className="login">
  <h1>롯데 시그니엘</h1>
  <div className="lr">
    <div className="l_l">
      <input type="name" id="name" placeholder="아이디를 입력해" />
      <input type="password" id="password" placeholder="비번을 입력해" />
    </div>
    <div className="btn">로그인</div>
  </div>
  <div className="loginunder">
    <span>회원가입</span>
    <span>바로가기</span>
  </div>
  </div>

  )
}

export default SignUp