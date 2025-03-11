import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { branchData } from "../../js/data/branch";

// 모듈 CSS 불러오기 /////
import "../../css/pages/signiel.scss";

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

      <div className="main_01">
        <div>
          <img
            className="maing_img"
            src={"../../../images/branch/" + local + "/main.jpg"}
            alt="메인"
          />

          <p>
            <strong>LOTTE</strong> HOTELS & RESORTS
          </p>
          <span className="care">
            <h1>HOTEL LOTTE</h1>
            <h2>
              호텔롯데는 최상의 Care를
              <br />
              제공하여 고객의 가치 있는 여정에 함께합니다.
            </h2>
          </span>
        </div>
      </div>
      <div className="main_02 main_0">
        <img src={"../../../images/branch/" + local + "/main_02.png"} />
        <div>
          <h1>
            {selData.tit.split("^")[0]}
            <br />
            {selData.tit.split("^")[1]}
          </h1>
          <p>{selData.cont}</p>
        </div>
      </div>
      <div className="main_03 main_0">
        <img
          src={"../../../images/branch/" + local + "/main_03.png"}
          alt="의자"
        />

        <div>
          <h1>{selData.tit02}</h1>
          <p>{selData.cont02}</p>
        </div>
      </div>
      <div className="main_04 main_0">
        <span>
          <h1>{selData.tit03}</h1>
          <p>{selData.cont03}</p>
        </span>
        <img
          src={"../../../images/branch/" + local + "/main_04.png"}
          alt="메인4"
        />
      </div>

      {
        // 서울만 나오는 파트
        local === "seoul" && (
          <div className="main_05 main_0">
            <h1>Room Packages & Offers</h1>
            <ul>
              <li>
                <img
                  src="../../../images/branch/seoul/main_05_01.png"
                  alt="메인5_1"
                />
                <h2>
                  LOCAL BLISS
                  <br />
                  TRIP
                </h2>
                <p>
                  국내여행에서의 특별한 추억을
                  <br />
                  롯데호텔과 함께 만들어보세요
                </p>
              </li>
              <li>
                <img
                  src="../../../images/branch/seoul/main_05_02.png"
                  alt="메인5_2"
                />
                <h2>
                  BED & BR /EAKFAST
                  <br />
                  PACKAGE
                </h2>
                <p>
                  고객님의 여유로운 호텔스테이를 위해
                  <br />
                  조식포함 상품을 준비하였습니다
                </p>
              </li>
              <li>
                <img
                  src="../../../images/branch/seoul/main_05_03.png"
                  alt="메인5_3"
                />
                <h2>
                  LOTTE HOTEL
                  <br />
                  REWARDS ONLY
                </h2>
                <p>
                  전 세계 롯데호텔앤리조트의 객실을
                  <br />
                  리워즈 회원 전용 가격으로 만나보세요
                </p>
              </li>
            </ul>
          </div>
        )
      }

      {/* <div className="main_06 main_0">
                    <div className="rel">
                        <img className="swiper" src="./img/slide_01.png" alt="스와이퍼" />
                        <div>
                            <h1>시그니엘 서울</h1>
                            <p>
                                국내 최고층 건물인 롯데월드타워 76층~101층에
                                위치한 시그니엘 서울은 한국의 아름다움을
                                현대적인 감각으로 풀어낸 객실(235실)에서서울의 파노라믹한 스카이라인과 환상적인 야경을
                                조망할 수 있으며 일몰과 일출을 한 자리에서
                                감상할 수 있는 국내 유일의 호텔입니다
                            </p>
                        </div>
                        <img className="left" src="./img/left.png" alt="왼쪽" />
                        <img className="right" src="./img/right.png" alt="오른쪽" />
                    </div>
                </div> */}

      <div>
        <div className="main_07">
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
