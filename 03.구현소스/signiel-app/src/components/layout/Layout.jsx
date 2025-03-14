/// 레이아웃 컴포넌트 : Layout.jsx /////

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

import { sCon } from "../modules/sCon";

export default function Layout({isLoggedIn,setIsLoggedIn}){

    /// 리턴 코드구역 ////////
    return (
        <sCon.Provider value={{isLoggedIn}}>
            <TopArea isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <MainArea />
            <FooterArea />
        </sCon.Provider>
    );

} //////////// Layout 컴포넌트 ///////////