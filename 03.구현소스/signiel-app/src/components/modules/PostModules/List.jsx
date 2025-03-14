// 게시판 리스트 모듈 - List.jsx

import React, { useContext, Fragment } from "react";
import { sCon } from "../sCon";

function List({
  selData, // 선택된 배열데이터 전달
  setMode, // 모든 변경 상태변수 setter
  selRecord, // 선택데이터 참조변수
  pageNum, // 스트 페이지번호 getter
  setPageNum, // 리스트 페이지번호 setter
  unitSize, // 페이지당 레코드수
  totalCount, // 전체 개수 참조변수
  pgPgSize, // 페이징의 페이징 개수
  pgPgNum, // 페이징의 페이징 번호
}) {
  
  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(sCon);
  // console.log('List에서 loginSts:',myCon.loginSts);

  console.log('선택데이터:',selData);

  // [ 페이징 관련 변수값 셋팅하기 ] ////

  // 1. 페이징 개수 : 전체 레코드수 / 페이지당 개수
  // -> 나머지가 있으면 페이지를 하나더해준다!
  let pagingCount = Math.floor(totalCount.current / unitSize);
  console.log("전체 레코드수 / 페이지당 개수:", pagingCount);
  console.log("나머지연산:", totalCount.current % unitSize);

  // 2. 나머지가 있으면 페이징 개수 1증가!
  // 앞수 % 뒷수 = 0 이면 나누어 떨어짐!
  if (totalCount.current % unitSize > 0) {
    pagingCount++;
  } /// if ///

  /*********************************** 
        페이징코드 리턴 함수
  ***********************************/
  const pagingCode = () => {
    // [ (1) 리턴 코드 담을 배열변수 ]
    // -> 배열값으로 JSX문법의 코드가 들어가므로
    // 배열을 리턴해도 출력되는것은 변환된 코드가 나온다!
    let hcode = [];

    // [ (2) 페이징의 페이징for문의 시작값, 한계값 셋팅하기 ]
    // [1] 시작값 : 페페사이즈 * (페페넘-1)
    let initNum = pgPgSize * (pgPgNum.current - 1);
    // [2] 한계값 : 페페사이즈 * 페페넘
    let limitNum = pgPgSize * pgPgNum.current;
    // 주의:pgPgNum은 참조변수니까 pgPgNum.current로 사용해야함!

    // ((시작값 : 한계값 계산샘플)) : pgPgSize 가 3일 경우
    // for (let i = 0; i < 3; i++){} -> 1,2,3
    // for (let i = 3; i < 6; i++){} -> 4,5,6
    // for (let i = 6; i < 9; i++){} -> 7,8,9
    // for (let i = 9; i < 12; i++){} -> 10,11,12

    // [ (3) 앞번호 앞에 이전 페이징구역 이동버튼 출력하기 ]
    // 페이징의 페이징번호가 1이 아닐때만 출력하기!!!
    // pgPgNum은 참조변수니까 current로 읽기!
    if (pgPgNum.current !== 1)
      hcode.push(
        <a
          key="-1"
          href="#"
          title="Previous Paging Section"
          onClick={() => {
            // (1) 페이징의 페이징번호 감소
            pgPgNum.current--;
            // (2) 이전 페이징의 페이징 첫 페이지번호로
            // 상태변수인 페이지번호 변경하기(리랜더링!)
            setPageNum(initNum - (pgPgSize - 1));
            // 이전 페이징 첫번호는 (시작값-(페페사이즈-1)) 이다!
          }}
        >
          ◀{" "}
        </a>
      );

    // [ (4) for문으로 페이징 코드 생성하기 ] ////
    // 반복코드를 생성할 경우 key속성을 셋팅함이 필수임!
    // 이때 빈태그로는 속성셋팅 안되므로 <Fragment>를 사용!
    for (let i = initNum; i < limitNum; i++) {
      // (( 중요!!! ))
      // 마지막 한계번호보다 크면 for문을 빠져나가야한다!!!
      // 즉, pagingCount 가 마지막 페이지 번호다!
      if (i + 1 > pagingCount) break;

      // 반복코드로 배열에 추가하기 ////
      hcode.push(
        <Fragment key={i}>
          {
            // 현재 페이지와 일치되는번호는
            // a태그가 아닌 b태그로 표시!
            i + 1 === pageNum ? (
              <b>{i + 1}</b>
            ) : (
              <a
                href="#"
                onClick={() => {
                  // 페이지번호 업데이트하기
                  setPageNum(i + 1);
                }}
              >
                {i + 1}
              </a>
            )
          }
          {
            // 마지막 번호 뒤에 바(|)는 출력안되게함!
            // 동시에 페이징 마지막 번호가 아닐때만 출력!
            i < limitNum - 1 && i + 1 !== pagingCount && " | "
          }
        </Fragment>
      );
    } //////////// for ////////////

    // [ (5) 끝번호 뒤에 다음 페이징구역 이동버튼 출력하기 ]
    // 페이징의 페이징번호가 1이 아닐때만 출력하기!!!
    // pgPgNum은 참조변수니까 current로 읽기!
    if (pgPgNum.current !== pagingCount)
      hcode.push(
        <a
          key="-2"
          href="#"
          title="Next Paging Section"
          onClick={() => {
            // (1) 페이징의 페이징번호 증가
            pgPgNum.current++;
            // (2) 다음 페이징의 페이징 첫 페이지번호로
            // 상태변수인 페이지번호 변경하기(리랜더링!)
            setPageNum(limitNum + 1);
            // 다음 페이징 첫번호는 (한계값+1) 이다!
          }}
        >
          {" "}
          ▶
        </a>
      );

    return hcode;
  }; //////////// pagingCode 함수 /////////

  // 리턴 코드구역 ////////////////////
  return (
    <main className="cont">
      <h1 className="tit">Posts</h1>
      <h2 className="tit">게시판</h2>
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
        <select
          name="sort_cta"
          id="sort_cta"
          className="sort_cta"
        >
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
            <th>rank</th>
            <th>Hotel</th>
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
              <td>{v.hotel_id}</td>
            </tr>
          ))}
        </tbody>
        {/* 페이징 하단파트 */}
        <tfoot>
          <tr>
            <td colSpan="5" className="paging">
            {pagingCode()}
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
                myCon.isLoggedIn && (
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
