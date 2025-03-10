/// 레이아웃 컴포넌트 : Layout.jsx /////

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

export default function Layout({isLoggedIn,setIsLoggedIn}){

    /// 리턴 코드구역 ////////
    return (
        <>
            <TopArea isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <MainArea />
            <FooterArea />
        </>
    );

} //////////// Layout 컴포넌트 ///////////