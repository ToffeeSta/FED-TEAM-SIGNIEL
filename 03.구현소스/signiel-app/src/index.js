import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/// 전체 PJ 공통 CSS 최상위 JS에서 불러오기 ///
import "./css/index.scss";

// 컴포넌트 불러오기 ////
import Layout from './components/layout/Layout';
import Main from './components/pages/Main';
// import Branch from './components/pages/Branch';
import Branch from './components/pages/Branch_test';
import Reservation from './components/pages/Reservation';
import Post from './components/pages/Post';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import MyPage from './components/pages/MyPage';


//// 메인 컴포넌트 ///////////////////////////////
export default function MainComponent(){
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
    // 리턴 코드구역 ////////////
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
            <Route index element={<Main />} />
            {<Route path="branch" element={<Branch />} />}
            <Route path="reservation" element={<Reservation />} />
            <Route path="Post" element={<Post />} />
            <Route path="MyPage" element={<MyPage />} />
            <Route path="Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="SignUp" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );

} /////////// MainComponent ////////////////////

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(
    document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);