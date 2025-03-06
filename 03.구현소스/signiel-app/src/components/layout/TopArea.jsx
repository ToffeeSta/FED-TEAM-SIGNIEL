import { Link } from "react-router-dom";
import { useState } from "react"; // 상태 관리 추가
import { menu } from "../../js/data/gnb"; // GNB 데이터 불러오기
import "../../css/common/top_area.scss"; // CSS 불러오기

export default function TopArea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열기/닫기 상태 관리
  const [isHamburgerActive, setIsHamburgerActive] = useState(false); // 햄버거 버튼 상태 관리

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 메뉴 상태를 토글
    setIsHamburgerActive(!isHamburgerActive); // 햄버거 버튼 상태를 토글하여 모양 변경
  };

  return (
    <>
      {/* 1. 상단영역 */}
      <header id="header">
        <div className="top-area">
          {/* 로고 */}
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </div>
          {/* 네비게이션 GNB파트 */}
          <div className={`header-nav ${isMenuOpen ? "active" : ""}`}>
            {/* 중앙 GNB 버튼 (앞 4개) */}
            <ul>
              {menu.slice(0, 4).map((v, i) => (
                <li key={i}>
                  {v.sub ? (
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {v.txt}
                    </a>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )}
                  {v.sub && (
                    <div className="smenu">
                      <ol>
                        {v.sub.map((v, i) => (
                          <li key={i}>
                            <Link to={v.link}>{v.txt}</Link>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 우측 GNB 버튼 (뒤 2개) */}
          <div className="log-wrap">
            <ul>
              {menu.slice(4).map((v, i) => (
                <li key={i}>
                  {v.sub ? (
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {v.txt}
                    </a>
                  ) : (
                    <Link to={v.link}>{v.txt}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* 모바일용 햄버거 버튼 */}
          <div className="ham-wrap">
            <button
              className={`hambtn ${isHamburgerActive ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="ham">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            {/* 햄버거 메뉴 드롭다운 */}
            <nav className={`ham-drop-box ${isMenuOpen ? "active" : ""}`}>
              <ul className="ham-menu">
                {menu.map((v, i) => (
                  <li key={i}>
                    {v.sub ? (
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {v.txt}
                      </a>
                    ) : (
                      <Link to={v.link}>{v.txt}</Link>
                    )}
                    {v.sub && (
                      <div className="smenu">
                        <ol>
                          {v.sub.map((v, i) => (
                            <li key={i}>
                              <Link to={v.link}>{v.txt}</Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
