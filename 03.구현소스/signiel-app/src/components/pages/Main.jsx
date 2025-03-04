/// 메인페이지 컴포넌트 : Main.jsx /////

import React from 'react';

import "../../css/pages/main.scss";

const Main = () => {
    return (
        <div>
            <h1 className='tit'>메인 페이지</h1>
            <img src="./images/logo.png" alt="로고" />
        </div>
    );
};

export default Main;