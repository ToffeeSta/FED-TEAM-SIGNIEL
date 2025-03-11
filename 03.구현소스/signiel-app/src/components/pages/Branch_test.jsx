import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { branchData } from "../../js/data/branch";

// 모듈 CSS 불러오기 /////
import "../../css/pages/branch.scss";

function Branch(props) {
  const { state } = useLocation();
  const { local } = state;

  const selData = branchData[local];
  console.log(local, selData);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // 네비게이트 이동함수 생성하기
  const goPage = useNavigate();
  // -> goPage(라우터주소,전달객체)
  // -> 예) goPage('/branch',{state:{local:'seoul'}})

  // 리턴 코드구역 ///////////////
  return (
    <>
      <div className="branch-container">
        <div className="branch-banner">
          <div className="banner-img">
            <img src="../../../images/branch/seoul/main.jpg" alt="배너이미지" />
          </div>
          <div className="banner-text">
            <p>좌측상단</p>
            <span>우측하단</span>
          </div>
        </div>
        {/* max-width 적용 */}
        <div className="branch-wrap">
           {/* 1 */}
          <div className="con-wrap">
            <div className="img-box">
              <img src="" alt="" />
            </div>
            <div className="text-box">
              <h2>제목</h2>
              <span className="contents-title">내용</span>
            </div>
          </div>
          {/* 2 */}
          <div className="con-wrap">
          <div className="img-box">
              <img src="" alt="" />
            </div>
            <div className="text-box">
              <h2>제목</h2>
              <span className="contents-title">내용</span>
            </div>
          </div>
          {/* 3 */}
          <div className="con-wrap">
          <div className="img-box">
              <img src="" alt="" />
            </div>
            <div className="text-box">
              <h2>제목</h2>
              <span className="contents-title">내용</span>
            </div>
          </div>
          {/* 4 */}
          <div className="con-wrap">
            <h2>제목</h2>
            <div className="slide-box">
              {/* 1 */}
              <div>
              <div className="slide-img">
                <img src="" alt="" />
              </div>
              <h2>제목</h2>
              <span className="contents-title"></span>
            </div>
            {/* 2 */}
            <div>
              <div className="slide-img">
                <img src="" alt="" />
              </div>
              <h2>제목</h2>
              <span className="contents-title"></span>
            </div>
            {/* 3 */}
            <div>
              <div className="slide-img">
                <img src="" alt="" />
              </div>
              <h2>제목</h2>
              <span className="contents-title"></span>
            </div>
            </div>
          </div>
          {/* 5 */}
          <div className="con-wrap">
          <div className="branch-info">
              <div className="slide-img">
                <img src="" alt="" />
              </div>
              <h2>제목</h2>
            </div>
            <div className="branch-info">
              <div className="slide-img">
                <img src="" alt="" />
              </div>
              <h2>제목</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branch;
