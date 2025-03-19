// 게시판 읽기 모듈 - Read.jsx

import React, { useContext } from "react";
import { sCon } from "../sCon";

function Read({
  setMode,
  selRecord,
  totalCount,
  setPageNum,
  pgPgNum,
}) {
  // setMode - 모든 변경 상태변수 setter
  // selRecord - 선택데이터 참조변수

  // 선택된 참조변수 데이터 넣기
  const selData = selRecord.current;
  console.log(selData);

  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(sCon);
  console.log("Read에서 loginSts:", myCon.loginSts);

  // [ 삭제하는 함수 ] /////
  const deleteFn = () => {
    // 삭제여부 확인 /////
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      // "확인" 클릭시 true처리되어 여기 들어옴!
      // console.log('지운다~!');

      // 1) 로컬스 읽어와서 객체화하기 ////////////
      // 1-1) 로컬스토리지 게시판 데이터 불러오기
      let localData = localStorage.getItem("posts");

      // 1-2) JSON.parse()로 배열객체로 변환
      localData = JSON.parse(localData);

      // 2) 수정할 현재 데이터 idx값(키값)
      let currIdx = selData.id;
      // console.log("삭제할idx:", currIdx);

      // 3) 로컬스 객체화 데이터 배열을 some()으로 순회하여
      // 해당 idx만 삭제 처리한다
      // find()와 달리 some()은 결과값을 boolean값으로 리턴함
      // 어째든 find()나 some()은 return true하면 순회를 멈춘다
      localData.some((v, i) => {
        if (v.id === currIdx) {
          // 삭제 처리 : i는 해당 배열순번
          localData.splice(i, 1);

          // 리턴 true할 경우 종료
          return true;
        } /// if ///
      }); ////// some ///////

      // 4) 입력객체를 문자형변환하여 로컬스에 넣기
      localStorage.setItem(
        "posts",
        JSON.stringify(localData)
      );

      // 5) 전체 개수 1감소하기 ////
      totalCount.current--;

      // 6) 페이지 번호 초기화
      setPageNum(1);

      // 7) 페이징 구역 번호 초기화
      pgPgNum.current = 1;

      // 8) 리스트 이동을 위해 모드 변경하기
      setMode("L");
    } /// if :리confirm창 true처리 ///
  }; ///////// deleteFn 함수 ////////////////

  // 리턴 코드구역 ///////////////////
  return (
    <main className="cont">
      <h2 className="tit">게시판 읽기</h2>
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
                  JSON.parse(
                    sessionStorage.getItem("users")
                  ).id === selData.user_id && (
                    <button
                      onClick={() => {
                        // 수정모드로 변경하기
                        setMode("M");
                      }}
                    >
                      수정하기
                    </button>
                  )
              }
              {myCon.isLoggedIn &&
                JSON.parse(sessionStorage.getItem("users"))
                  .id === selData.user_id && (
                  <button onClick={deleteFn}>
                    삭제하기
                  </button>
                )}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
export default Read;
