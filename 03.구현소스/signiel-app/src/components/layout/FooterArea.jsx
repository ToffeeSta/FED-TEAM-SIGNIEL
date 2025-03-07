/// 하단영역 컴포넌트 : FooterArea.jsx /////

// 하단영역 CSS 불러오기 ////
import "../../css/common/footer_area.scss";

export default function FooterArea() {
  /// 리턴 코드구역 ////////
  return (
    <>
      <footer id="footer">
        <div className="bottom-area">
          <div className="left-con">
            <div className="bottom-logo">
              <img src="/images/logo/footer-logo.png" alt="" />
            </div>
            <div className="info">
              <p>
                ㈜호텔롯데 04533, 서울특별시 중구 을지로 30 / +82-2-771-1000
                <br />
                대표이사 정호석 / 사업자등록번호 104-81-25980
                <br />/ 통신판매신고번호 중구02802호
              </p>
            </div>
          </div>
          <div className="right-con">
            <div className="sns-wrap">
              <ul>
                <li>
                  <a href="/">
                    <img
                      src="/images/logo/instagram_logo.png"
                      alt="인스타 로고"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="/images/logo/facebook_logo.png"
                      alt="페이스북 로고"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/images/logo/x_logo.png" alt="X 로고" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-nav">
              <ul>
                <li>
                  <a href="">btn1</a>
                </li>
                <li>
                  <a href="">btn2</a>
                </li>
                <li>
                  <a href="">btn3</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} //////////// FooterArea 컴포넌트 ///////////
