import { Link, useNavigate } from "react-router-dom";
import { menu } from "../../js/data/gnb"; // GNB 데이터 불러오기
import "../../css/common/top_area.scss"; // CSS 불러오기
import { useState, useEffect } from "react";

export default function TopArea({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴 상태 관리
  const navigate = useNavigate();

  // 페이지 로드 시 로그인 상태 확인
  useEffect(() => {
    const userData = sessionStorage.getItem("users");
    setIsLoggedIn(!!userData); // 값이 있으면 true, 없으면 false
  }, [setIsLoggedIn]); // setIsLoggedIn을 의존성 배열에 추가

  const toggleMenu = () => {
    setIsOpen(!isOpen); // 햄버거 메뉴 열기/닫기 토글
  };

  const handleLogout = () => {
    sessionStorage.clear(); // 로그아웃 시 세션스토리지 초기화
    setIsLoggedIn(false); // 상태 업데이트
    navigate("/"); // 로그아웃 후 메인 페이지로 이동
  };

  return (
    <>
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
            {isLoggedIn ? (
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
                          {v.sub.map((subItem, j) => (
                            <li key={j}>
                              <Link
                                to={subItem.link}
                                state={{ local: subItem.local }}
                              >
                                {subItem.txt}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {menu.slice(0, 3).map((v, i) => (
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
                          {v.sub.map((subItem, j) => (
                            <li key={j}>
                              <Link
                                to={subItem.link}
                                state={{ local: subItem.local }}
                              >
                                {subItem.txt}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 로그인 여부에 따라 버튼 변경 */}
          <div className="log-wrap">
            {isLoggedIn ? (
              <ul>
                <li>
                  <span>{JSON.parse(sessionStorage.getItem("users")).name}</span>
                </li>
                <li>
                  <a href="#" onClick={handleLogout} className="logout-btn">
                    로그아웃
                  </a>
                </li>
              </ul>
            ) : (
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
            )}
          </div>

          {/* 모바일용 햄버거 버튼 */}
          <div
            className={`hambtn ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="hammenu">
              <div className="ham">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="ham-drop-box">
              {isLoggedIn ? (
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
                            {v.sub.map((subItem, j) => (
                              <li key={j}>
                                <Link
                                  to={subItem.link}
                                  state={{ local: subItem.local }}
                                >
                                  {subItem.txt}
                                </Link>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="ham-drop">
                  {menu.slice(0, 3).map((v, i) => (
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
                            {v.sub.map((subItem, j) => (
                              <li key={j}>
                                <Link
                                  to={subItem.link}
                                  state={{ local: subItem.local }}
                                >
                                  {subItem.txt}
                                </Link>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
