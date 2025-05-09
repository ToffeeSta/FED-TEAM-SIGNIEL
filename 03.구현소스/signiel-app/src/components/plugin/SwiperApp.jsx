import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./css/swiper.scss";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다!
// (여기서는 페이지네이션, 네비게이션,자동넘김)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SwiperApp({local}) {


  // 리턴 코드구역 /////////
  return (
    <>
      <Swiper
        // 한번에 보여줄 슬라이드수
        slidesPerView={1}
        // 슬라이드 사이 간격(단위없는 px수)
        spaceBetween={0}
        // 양쪽이동 네이게이션 사용여부(모듈import필수!)
        navigation={true}
        // 블릿표시 페이지네이션 사용여부(모듈import필수!)
        pagination={{
          clickable: true, //블릿클릭이동옵션
        }}
        // 자동넘김 기능 모듈 셋팅
        autoplay={{
          delay: 2500, // 대기시간 2.5초
          disableOnInteraction: false, // 인터렉션 없앰속성 false
          // -> 인터렉션을 살려놔야 터치후 다시 자동넘김 작동함!
        }}
        // ★스와이퍼 추가사용 모듈 등록 속성(사용시 등록필수!)
        modules={[Navigation, Pagination, Autoplay]}
        // 무한이동슬라이드 설정
        loop={true}
        className="mySwiper"
      >
        {
          // 배열이미지 이름만큼 반복하여 슬라이드 생성!
          Array.from({length:3}).map((v, i) => (
            <SwiperSlide key={i}>
              <div className="branch-banner">
                <div className="banner-img">
                  <img src={process.env.PUBLIC_URL+"/images/branch/"+local+"/banner/main"+(i+1)+".jpg"} />
                </div>
                <div className="banner-text">
                  <span>
                    HOTEL LOTTE
                    <br />
                    호텔롯데는 최상의 Care를
                    <br />
                    제공하여 고객의 가치 있는 여정에 함께합니다.
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
