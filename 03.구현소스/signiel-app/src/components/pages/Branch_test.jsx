import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { branchData } from "../../js/data/branch";

// 모듈 CSS 불러오기 /////
import "../../css/pages/branch.scss";
import SwiperApp from "../plugin/SwiperApp";

// https://swiperjs.com/demos
// Pagination progress
// Autoplay progress
// Rewind


{/* 
<script async src="https://maps.googleapis.com/maps/api/js?key?AIzaSyCTZWygfYuMNSJHOB-p16G3P8OxI3SRUcU&callback=console.debug&libraries=maps.marker&v=beta">
</script>

<style>
#map {
    height: 100vh;
    width: 100%;
}
</style>

<gmp-map center="37.51283, 127.1026" zoom="14" map-id="DEMO_ID">
  <gmp-advanced-marker position="37.51283, 127.1026" title="My location"></gmp-advanced-marker>
</gmp-map> 
*/}


/* API 키값 AIzaSyCTZWygfYuMNSJHOB-p16G3P8OxI3SRUcU */
/* 부산 35.16011, 129.1699 */
/* 제주 33.49061, 126.4864 */

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
    <script async src="https://maps.googleapis.com/maps/api/js?key?AIzaSyCTZWygfYuMNSJHOB-p16G3P8OxI3SRUcU&callback=console.debug&libraries=maps.marker&v=beta">
    </script>
      <div className="branch-container">
        <SwiperApp local={local} />
        {/* max-width 적용 */}
        <div className="branch-wrap">
          {/* 1 */}
          <div className="con-wrap">
            <div className="img-box">
              <img
                src={"../../../images/branch/" + local + "/main_01.png"}
                alt="메인01"
                title="메인01"
              />
            </div>
            <div className="text-box">
              <div>
                <h2>
                  {selData.tit.split("^")[0]}
                  {selData.tit.split("^")[1]}
                </h2>
                <span className="contents-title">
                  <p>{selData.cont.split("^")[0]}</p>
                  <p>{selData.cont.split("^")[1]}</p>
                  <p>{selData.cont.split("^")[2]}</p>
                </span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="con-wrap">
            <div className="img-box">
              <img
                src={"../../../images/branch/" + local + "/main_02.png"}
                alt="메인02"
                title="메인02"
              />
            </div>
            <div className="text-box">
              <div>
                <h2>
                  {selData.tit02.split("^")[0]}
                  <br />
                  {selData.tit02.split("^")[1]}
                </h2>
                <span className="contents-title">
                  <p>{selData.cont02.split("^")[0]}</p>
                  <p>{selData.cont02.split("^")[1]}</p>
                  <p>{selData.cont02.split("^")[2]}</p>
                </span>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="con-wrap">
            <div className="img-box">
              <img
                src={"../../../images/branch/" + local + "/main_03.png"}
                alt="메인03"
                title="메인03"
              />
            </div>
            <div className="text-box">
              <div>
                <h2>
                  {selData.tit03.split("^")[0]}
                  <br />
                  {selData.tit03.split("^")[1]}
                </h2>
                <span className="contents-title">
                  <p>{selData.cont03.split("^")[0]}</p>
                  <p>{selData.cont03.split("^")[1]}</p>
                  <p>{selData.cont03.split("^")[2]}</p>
                </span>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="con-wrap">
            <h2>Room Packages & Offers</h2>

            <div className="slide-box">
              {/* 1 */}
              <div>
                <div className="slide-img">
                  <img
                    src={"../../../images/branch/" + local + "/main_05_01.png"}
                    alt=""
                  />
                </div>
                <h2>{selData.tit04}</h2>
                <span className="contents-title">
                  <p>{selData.cont04.split("^")[0]}</p>
                  <p>{selData.cont04.split("^")[1]}</p>
                </span>
              </div>
              {/* 2 */}
              <div>
                <div className="slide-img">
                  <img
                    src={"../../../images/branch/" + local + "/main_05_02.png"}
                    alt=""
                  />
                </div>
                <h2>{selData.tit05}</h2>
                <span className="contents-title">
                  <p>{selData.cont05.split("^")[0]}</p>
                  <p>{selData.cont05.split("^")[1]}</p>
                </span>
              </div>
              {/* 3 */}
              <div>
                <div className="slide-img">
                  <img
                    src={"../../../images/branch/" + local + "/main_05_03.png"}
                    alt=""
                  />
                </div>
                <h2>{selData.tit06}</h2>
                <span className="contents-title">
                  <p>{selData.cont06.split("^")[0]}</p>
                  <p>{selData.cont06.split("^")[1]}</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="con-wrap info">
          <ul>
            {local !== "seoul" && (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    // 기본이동막기
                    e.preventDefault();
                    goPage("/branch", { state: { local: "seoul" } });
                  }}
                >
                  <img
                    src="../../../images/branch/seoul/main.jpg"
                    alt="호텔서울"
                    title="호텔서울"
                  />
                  <p>호텔서울</p>
                  <p>
                    명동, 을지로, 청계천 등 서울의 중심 관광지들로의 접근성이
                    뛰어나 서울 관광을 위한 최적의 위치를 자랑합니다.
                  </p>
                </a>
              </li>
            )}
            {local !== "busan" && (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    // 기본이동막기
                    e.preventDefault();
                    goPage("/branch", { state: { local: "busan" } });
                  }}
                >
                  <img
                    src="../../../images/branch/busan/hotel_busan.jpg"
                    alt="호텔부산"
                    title="호텔부산"
                  />
                  <p>호텔부산</p>
                  <p>
                    시그니엘 부산은 해운대의 랜드마크 '엘시티(LCT)'타워에 위치한
                    260실 규모의 럭셔리 호텔입니다.
                  </p>
                </a>
              </li>
            )}
            {local !== "jeju" && (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    // 기본이동막기
                    e.preventDefault();
                    goPage("/branch", { state: { local: "jeju" } });
                  }}
                >
                  <img
                    src="../../../images/branch/jeju/hotel_jeju.jpg"
                    alt="호텔제주"
                    title="호텔제주"
                  />
                  <p>호텔제주</p>
                  <p>
                    환상의 섬 제주도 중문관광단지에 위치한 롯데호텔 제주는
                    500개의 객실을 갖춘 한국 최고의 리조트 호텔입니다.
                    
                  </p>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Branch;
