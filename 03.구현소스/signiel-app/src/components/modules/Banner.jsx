// SIGNIEL 배너 컴포넌트 - Banner.jsx

import React from 'react';

// 배너용 CSS 불러오기
import '../../css/modules/banner.scss';

// 배너 데이터 불러오기
import { banData } from '../../js/data/banner';

function Banner(props) {
    return (
        <div className="banner">
        {/* 슬라이드 리스트 */}
        <ul className="slider">
          {
            // 배열데이터 개수 만큼 슬라이드 생성하기
            selData.map((v, i) => (
              <li key={i}>
                <img src={v.src} alt={v.tit1} />
                <section className="bantit">
                  <h2>{v.tit1}</h2>
                  <p>{v.tit2}</p>
                  {
                    // 버튼 데이터가 없으면 버튼출력안함
                    v.btn !== "" && <button>{v.btn}</button>
                  }
                </section>
              </li>
            ))
          }
        </ul>
        </div>
    );
}

export default Banner;