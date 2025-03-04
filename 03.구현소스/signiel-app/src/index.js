import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './components/pages/Main';
import Branch from './components/pages/Branch';
import Reservation from './components/pages/Reservation';
import Post from './components/pages/Post';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import User from './components/pages/User';


//// 메인 컴포넌트 ///////////////////////////////
export default function MainComponent(){

    // 리턴 코드구역 ////////////
    return (
        <BrowserRouter>
            <Routes>
                {/* 최상위 Route는 쌍으로 태그를 만든다!
                슬래쉬는 루트를 말하고 레이아웃 컴포넌트 불러옴 */}
                <Route path="/" element={<Layout />}>
                {/* 하위중 첫페이지는 index라고 속성씀! */}
                    <Route index element={<Main  />}  />
                    <Route path="branch" element={<Branch/>}/>
                    <Route path="reservation" element={<Reservation/>}/>
                    <Route path="Post" element={<Post/>}/>
                    <Route path="User" element={<User/>}/>
                    <Route path="Login" element={<Login/>}/>
                    <Route path="SignUp" element={<SignUp/>}/>

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