// 게시판 리스트 모듈 - List.jsx

import React, { useContext } from "react";
import { dCon } from "../dCon";

function List({ selData, setMode, selRecord, pageNum, setPageNum, unitSize, totalCount }) {
  // selData - 선택된 배열데이터 전달
  // setMode - 모든 변경 상태변수 setter
  // selRecord - 선택데이터 참조변수
  // pageNum 리스트 페이지번호 getter
  // setPageNum 리스트 페이지번호 setter
  // unitSize - 페이지당 레코드수
  // totalCount - 전체 개수 참조변수

  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(dCon);
  // console.log('List에서 loginSts:',myCon.loginSts);

  // 리턴 코드구역 ////////////////////
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <div className="selbx">
        <select name="cta" id="cta" className="cta">
          <option value="tit">Title</option>
          <option value="cont">Contents</option>
          <option value="unm">Writer</option>
        </select>
        <select name="sel" id="sel" className="sel">
          <option value="0">Descending</option>
          <option value="1">Ascending</option>
        </select>
        <input id="stxt" type="text" maxLength="50" />
        <button className="sbtn">Search</button>
        <select name="sort_cta" id="sort_cta" className="sort_cta">
          <option value="idx">Recent</option>
          <option value="tit">Title</option>
        </select>
      </div>
      <table className="dtbl" id="board">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>
          {selData.map((v, i) => (
            <tr key={i}>
              <td>
                {
                  // 페이징 시작번호 더하기
                  // -> 자동순번 + (단위수 * (페이지번호-1))
                  i + 1 + unitSize * (pageNum - 1)
                }
              </td>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    // 기본이동막기
                    e.preventDefault();
                    // 글보기모드('R')로 변경하기
                    setMode("R");
                    // 해당 데이터 참조변수에 저장하기
                    selRecord.current = v;
                  }}
                >
                  {v.title}
                </a>
              </td>
              <td>{v.user_name}</td>
              <td>{v.created_at}</td>
              <td>{v.rating}</td>
            </tr>
          ))}
        </tbody>
        {/* 페이징 하단파트 */}
        <tfoot>
          <tr>
            <td colSpan="5" className="paging">
              <a href="#" onClick={() => setPageNum(1)}>
                1
              </a>{" "}
              |
              <a href="#" onClick={() => setPageNum(2)}>
                2
              </a>{" "}
              |
              <a href="#" onClick={() => setPageNum(3)}>
                3
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
      <br />
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              {
                // 로그인상태일때만 쓰기버튼 보이기
                myCon.loginSts && (
                  <button
                    onClick={() => {
                      // 글쓰기 모드로 변경하기
                      setMode("W");
                    }}
                  >
                    Write
                  </button>
                )
              }
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default List;
