// 게시판 읽기 모듈 - Read.jsx

import React, { useContext } from "react";
import { sCon } from "../sCon";

function Read({ setMode, selRecord }) {
  // setMode - 모든 변경 상태변수 setter
  // selRecord - 선택데이터 참조변수

  // 선택된 참조변수 데이터 넣기
  const selData = selRecord.current;
  console.log(selData);

  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(sCon);
  console.log('Read에서 loginSts:',myCon.loginSts);

  // 리턴 코드구역 ///////////////////
  return (
    <main className="cont">
      <h1 className="tit">Posts</h1>
      <h2 className="tit">게시판</h2>
      <table className="dtblview readone">
        <tbody>
          <tr>
            {/* <td>Name</td> */}
            <td className="name-type-box">
              <div className="selbox-name">
                <input
                  type="text"
                  className="name"
                  readOnly={true}
                  defaultValue={selData.user_name}
                />
              </div>
              <div className="selbox-write">
                <input
                  type="text"
                  id="sel-type"
                  className="sel-type"
                  readOnly={true}
                  defaultValue={selData.post_type}
                />
              </div>
            </td>
          </tr>
          <tr>
            {/* <td>Title</td> */}
            <td>
              <input
                type="text"
                className="subject"
                size="60"
                readOnly={true}
                defaultValue={selData.title}
              />
            </td>
          </tr>
          <tr>
            {/* <td>Content</td> */}
            <td>
              <textarea
                className="content"
                cols="60"
                rows="10"
                readOnly={true}
                defaultValue={selData.content}
              ></textarea>
            </td>
          </tr>
          <tr>
            {/* <td>Attachment</td> */}
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td className="write-page-button">
              <button
                onClick={() => {
                  // 리스트 모드('L')로 변경하기
                  setMode("L");
                }}
              >
                리스트
              </button>
              {
                // 로그인한 사용자가 글쓴이와 같은 아이디일 경우
                // 수정버튼 보이기
                myCon.isLoggedIn && 
                  JSON.parse(sessionStorage.getItem('users')).id ===
                    selData.user_id && (
                    <button
                      onClick={() => {
                        // 수정모드로 변경하기
                        setMode("M");
                      }}
                    >
                      수정하기
                      {console.log(selData.user_id)}
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
export default Read;
