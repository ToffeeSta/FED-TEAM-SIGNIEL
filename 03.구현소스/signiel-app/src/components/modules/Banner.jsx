// SIGNIEL 배너 컴포넌트 - Banner.jsx

import React from "react";

// 배너용 CSS 불러오기
import "../../css/modules/banner.scss";

// 배너 데이터 불러오기
import { banData } from "../../js/data/banner";

function Banner() {
  // 배너 데이터 랜덤하게 가져오기
  // const selData = banData["main1"];
  const selData =
    banData["main" + Math.ceil(Math.random() * 4)];

  return (
    <div className="banner">
      <img src={selData.isrc} alt="배너" />
      <aside>
        <h2>{selData.mTit}</h2>
        <h6>
          {selData.sTit.split("^")[0]} <br />
          {selData.sTit.split("^")[1]}
        </h6>
      </aside>
    </div>
  );
}

export default Banner;
