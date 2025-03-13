/// 레이아웃 컴포넌트 : Layout.jsx /////

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

import { dCon } from "../modules/dCon";

export default function Layout({isLoggedIn,setIsLoggedIn}){

    /// 리턴 코드구역 ////////
    return (
        <dCon.Provider value={{isLoggedIn}}>
            <TopArea isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <MainArea />
            <FooterArea />
        </dCon.Provider>
    );

} //////////// Layout 컴포넌트 ///////////