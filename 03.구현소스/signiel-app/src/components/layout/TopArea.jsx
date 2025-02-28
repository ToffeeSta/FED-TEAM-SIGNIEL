/// 상단영역 컴포넌트 : TopArea.jsx /////

import React from "react";
import { Link } from "react-router-dom";

function TopArea(props) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="goeun">열여랏!</Link>
        </li>
      </ul>
    </>
  );
}

export default TopArea;
