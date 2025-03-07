import React from "react";

// 모듈 CSS 불러오기 /////
import '../../css/pages/join.scss';

function SignUp(props) {

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
          />
          <span className="msg"></span>
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
          />
          <b className="eye">👁</b>
          <span className="msg"></span>
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
          />
          <span className="msg"></span>
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
          />
          <span className="msg"></span>
        </li>
        {/* <!-- 성별 --> */}
        <li>
          <span className="itit">성별</span>
          <label htmlFor="gen1">남성</label>
          <input type="radio" name="gen" id="gen1" />
          <label htmlFor="gen2">여성</label>
          <input type="radio" name="gen" id="gen2" defaultChecked />
        </li>
        <li>
          <label htmlFor="email1" className="itit">
            *
          </label>
          <input
            type="text"
            id="email1"
            name="email1"
            placeholder="이메일앞주소"
          />
          <span className="gol">@</span>
          <select name="seleml" id="seleml">
            <option value="init">선택해주세요</option>
            <option value="naver.com">naver.com</option>
            <option value="daum.net">daum.net</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="gmail.com">gmail.com</option>
            <option value="free">직접입력</option>
          </select>
          <label htmlFor="email2"></label>
          <input
            type="text"
            name="email2"
            id="email2"
            placeholder="이메일뒷주소"
          />
          <span className="msg"></span>
        </li>
        <li></li>
        <li>
          <span className="noneid">아이디가 없으신가요? </span>
          <input type="submit" value="가입하기" id="btnj" />
        </li>
      </ul>
    </div>
  );
}

export default SignUp;
