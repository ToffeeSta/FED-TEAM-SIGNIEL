/// 메인페이지 컴포넌트 : Main.jsx /////

import React, { useEffect } from "react";

import "../../css/pages/main.scss";
import Banner from "../modules/Banner";

// 제이쿼리 불러오기 ////
import $ from "jquery";

const Main = () => {
  
  // 리턴 코드구역 //////////////////
  return (
    <>
      {/* 1. 메인배너 영역 */}
      <Banner />
      {/* 2. 인트로 영역 */}
    </>
  );
};

export default Main;
