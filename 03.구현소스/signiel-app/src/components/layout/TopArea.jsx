import { Link } from "react-router-dom";
import { menu } from "../../js/data/gnb"; // GNB 데이터 불러오기
import "../../css/common/top_area.scss"; // CSS 불러오기
import { useState } from "react"; // React useState 훅 추가

export default function TopArea() {
  const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴 상태 관리

  const toggleMenu = () => {
    setIsOpen(!isOpen); // 햄버거 메뉴 열기/닫기 토글
  };

  return (
    <>
      {/* 1. 상단영역 */}
      <header id="header">
        <div className="top-area">
          {/* 로고 */}
          <div className="logo">
            <Link to="/">
              <img src="/images/logo/logo.png" alt="Logo" />
            </Link>
          </div>
          {/* 네비게이션 GNB파트 */}
          <div className="header-nav">
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
                            <Link to={v.link} state={{local:v.local}}>{v.txt}</Link>
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
          <div className={`hambtn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="hammenu">
              <div className="ham">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="ham-drop-box">
              <ul className="ham-drop">
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
          </div>
        </div>
      </header>
    </>
  );
}
