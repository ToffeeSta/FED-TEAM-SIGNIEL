/// 메인페이지 컴포넌트 : Main.jsx /////

import React, { useEffect } from "react";

import "../../css/pages/main.scss";
import Banner from "../modules/Banner";

// 제이쿼리 불러오기 ////
import $ from 'jquery';

const Main = () => {

    // DOM이 완성되었을때 실행구역 ///////
  useEffect(() => {
    /////////////////////////////////////
    // 스크롤 등장액션 만들기 /////////////
    /////////////////////////////////////
    // 등장액션 초기화 : 투명하고 약간 아래쪽에 배치
    setEle();
    // 등장액션은 원래위치로 복귀하며 투명도회복 애니

    // 등장액션 체크함수 이벤트 설정하기
    window.addEventListener("scroll", chkPos);
  }, []); //////// useEffect ////////

  // 등장액션 위치체크 및 적용함수 ///////
  const chkPos = () => {
    // 등장액션 대상은 모두 순회함!
    $(".sc-ani").each((idx, ele) => {
      // 화면기준 위치값 알아오기
      let cpos = retClient(idx);
      // 위치값이 화면의 1/3위치보다 위로 올라오면 등장!
      if (cpos < ($(window).height() / 3) * 2) {
        $(ele).css({
          opacity: 1,
          transform: "translateX(0)",
        }); //// css ////
      } ////////// if ////////
    }); //////// each ///////////
  }; //////// chkPos 함수 ////////////

  // 위치값 리턴함수 //////////
  const retClient = (idx) => {
    // console.log(idx);
    return document.querySelectorAll(".sc-ani")[idx]
    .getBoundingClientRect().top;
  }; //////////// retClient함수 /////

  // 등장액션 일괄 셋팅 ////////
  const setEle = () => {
    // 클래스명은 .sc-ani 로 준 모든 요소를 초기화함
    $(".sc-ani1").css({
      opacity: 0,
      transform: "translateX(20%)",
      transition: "1s ease-in-out",
    }); ////// css /////
    // 클래스명은 .sc-ani2 로 준 모든 요소를 초기화함
    $(".sc-ani2").css({
      opacity: 0,
      transform: "translateX(-20%)",
      transition: "1s ease-in-out",
    }); ////// css /////
  }; //////// setEle 함수 ////////////
  // 리턴 코드구역 //////////////////
  return (
    <>
      {/* 1. 메인배너 */}
      <Banner />
      {Array.from({ length: 10 }).map((v, i) => (
        <div
          key={v}
          style={{
            background:
              "url(./images/banner/banner1.jpg) no-repeat center/cover",
            height: "100vh",
          }}
          className="sc-ani sc-ani1"
        ></div>
      ))}
      {Array.from({ length: 10 }).map((v, i) => (
        <div
          key={v}
          style={{
            background:
              "url(./images/banner/banner1.jpg) no-repeat center/cover",
            height: "100vh",
          }}
          className="sc-ani sc-ani2"
        ></div>
      ))}
    </>
  );
};

export default Main;
