import React from 'react'
import { useLocation } from 'react-router-dom'

import { branchData } from '../../js/data/branch';

// 모듈 CSS 불러오기 /////
import '../../css/pages/signiel.scss';

function Branch(props) {

    const { state } = useLocation();
    const { local } = state;

    const selData = branchData[local];
    console.log(local, selData);

    return (
        <>
            <div>
                <h1>Branch {selData.name}</h1>
            </div>

            <main>

                <div className="main_01 main_0">
                    <div>
                        <img className="maing_img" src="./img/main.png" alt="메인" />

                        <p><strong>LOTTE</strong> HOTELS & RESORTS</p>
                        <span className="care">
                            <h1>HOTEL LOTTE</h1>
                            <h2>호텔롯데는 최상의 Care를<br />
                                제공하여 고객의 가치 있는 여정에 함께합니다.
                            </h2>
                        </span>
                    </div>
                </div>
                <div className="main_02 main_0">
                    <img src="./img/main_02.png" alt="메인02" />
                    <div>

                        <h1>Mission<br />
                            Make every moment<br />
                            of life delightful</h1>
                        <p>인류의 매 순간을 아름답고 찬란하게<br />
                            만들어 주는 것이 곳<br />
                            우리의 사명입니다</p>

                    </div>
                </div>
                <div className="main_03 main_0">
                    <img src="./img/chair.png" alt="의자" />

                    <div>
                        <h1><strong>LOTTE</strong>HOTELS&RESORTS</h1>
                        <p>편안하고 안락한 <strong>휴식형 객실,</strong>다양한
                            레스토랑과 화려한 <strong>연회시설,<br /></strong> 비즈니스와 레저를
                            모두 만족시킬 수 있는 <strong>편의시설,<br /></strong> 이 모두를 갖춘 멀티공간 <strong>롯데호텔</strong>이,
                            품격 높은 삶을 즐길 줄 아는 <br />당신의 여유와 자긍심을 위해<strong>최상의 서비스</strong>로 충족시켜 드리겠습니다 </p>
                    </div>

                </div>
                <div className="main_04 main_0">
                    <span>
                        <h1>Vision<br />
                            Engrave iconic experience<br />
                            in the guest's heart
                        </h1>
                        <p>우리만의 차별화된 경험을 선사하여<br />
                            고객의 마음속에 오래 남을<br />
                            브랜드가 되고자 합니다</p>
                    </span>
                    <img src="./img/main_04.png" alt="메인4" />
                </div>
                <div className="main_05 main_0">
                    <h1>Room Packages & Offers</h1>
                    <ul>
                        <li>
                            <img src="./img/main_05_01.png" alt="메인5_1" />
                            <h2>LOCAL BLISS<br />
                                TRIP</h2>
                            <p>국내여행에서의 특별한 추억을<br />롯데호텔과 함께 만들어보세요</p>
                        </li>
                        <li>
                            <img src="./img/main_05_02.png" alt="메인5_2" />
                            <h2>BED & BR /EAKFAST<br />PACKAGE</h2>
                            <p>고객님의 여유로운 호텔스테이를 위해<br />조식포함 상품을 준비하였습니다</p>
                        </li>
                        <li>
                            <img src="./img/main_05_03.png" alt="메인5_3" />
                            <h2>LOTTE HOTEL<br />REWARDS ONLY</h2>
                            <p>전 세계 롯데호텔앤리조트의 객실을<br />리워즈 회원 전용 가격으로 만나보세요</p>
                        </li>
                    </ul>
                </div>
                <div className="main_06 main_0">
                    <div className="rel">
                        {/* <!-- 스와이퍼 --> */}
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
                </div>

            </main>
        </>
    )
}

export default Branch