/// 메인페이지 컴포넌트 : Main.jsx /////

import React from 'react';

import "../../css/pages/main.scss";
import Banner from '../modules/Banner';

const Main = () => {
    return (
        <>
            {/* 1. 메인배너 */}
            <Banner />
        </>
    );
};

export default Main;