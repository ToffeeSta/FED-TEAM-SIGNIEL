// 게시판 수정 모듈 - Modify.jsx

import React from "react";

// 제이쿼리 불러오기 ////
import $ from "jquery";

function Modify({ setMode, selRecord, totalCount, setPageNum, pgPgNum }) {
  // setMode - 모든 변경 상태변수 setter
  // selRecord - 선택데이터 참조변수
  // totalCount - 전체 개수 참조변수 (글삭제시 카운트 1감소!)

  // 선택된 참조변수 데이터 넣기
  const selData = selRecord.current;
  // console.log(selData);

  // 글쓰기 저장 서브밋 함수 //////
  const submitFn = () => {
    // 제목입력항목
    let title = $(".subject").val().trim();
    // 내용입력항목
    let content = $(".content").val().trim();
    // 게시물 타입 항목
    let post_type = $(".sel-type").val().trim();

    // (1) 공통 유효성검사
    // - 제목, 내용 모두 비었으면 리턴!
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    } /// if /////

    // (2) 서브밋 처리하기 //////
    else {
      // 1) 로컬스 읽어와서 객체화하기 ////////////
      // 1-1) 로컬스토리지 게시판 데이터 불러오기
      let localData = localStorage.getItem("posts");

      // 1-2) JSON.parse()로 배열객체로 변환
      localData = JSON.parse(localData);

      // 2) 수정할 현재 데이터 idx값(키값)
      let currId = selData.id;
      // console.log("수정할id:", currId, localData);

      // 3) 로컬스 객체화 데이터 배열을 find로 순회하여
      // 해당 idx만 찾아서 제목과 내용 변경하기
      localData.find((v) => {
        if (v.id === currId) {
          // console.log('고칠것!',v.id);
          // 제목, 내용변경
          v.title = title;
          v.content = content;
          v.post_type = post_type;
          // 별점수정하기
          v.rating = $('#sel-star').val();
          // 해당 데이터를 만나면 빠져나감!
          return true;
        } /// if ///
      }); /// find ///

      // 4) 입력객체를 문자형변환하여 로컬스에 넣기
      localStorage.setItem("posts", JSON.stringify(localData));

      // 5) 리스트 이동을 위해 모드 변경하기
      setMode("L");
    } /// else /////
  }; ////////// submitFn 함수 //////////////

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
      localStorage.setItem("posts", JSON.stringify(localData));

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

  // 리턴 코드구역 /////////////////////
  return (
    <main className="cont">
      <h2 className="tit">게시판 수정</h2>
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
                  disabled
                />
              </div>
              <div className="selbox-write">
                <select
                  name="sel-type"
                  id="sel-type"
                  className="sel-type"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    let tgEl = $(".star-section");
                    if (e.target.value === "Q&A")
                      tgEl.hide();
                    else tgEl.show();
                  }}
                >
                  <option value="review">Review</option>
                  <option value="Q&A">Q&amp;A</option>
                </select>
              </div>
            </td>
          </tr>{/* 별점 등록 기능 */}
          <tr
            className="star-section"
            onLoad={(e) => {
              let tgEl = document.querySelector(".sel-type");
              if (tgEl.value === "Q&A") e.tgEl.style.display = "table-row";
              else e.tgEl.style.display = "none";
            }}
          >
            <td>
              <select name="sel-star" id="sel-star" className="sel-star"
              defaultValue={selData.rating}>
                <option>0.5</option>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
              </select>
            </td>
          </tr>
          <tr>
            {/* <td>Title</td> */}
            <td>
              <input
                type="text"
                className="subject"
                size="60"
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
              <button onClick={submitFn}>수정하기</button>
              <button onClick={deleteFn}>삭제하기</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Modify;