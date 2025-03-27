// 게시판 리스트 모듈 - List.jsx

import React, { useContext, Fragment } from "react";
import { sCon } from "../sCon";

// 제이쿼리 불러오기 ///
import $ from "jquery";

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
  type,
  setType,
  searchFn, // 검색함수
  keyword, // 검색어 상태변수 getter
  setKeyword, // 검색어 상태변수 setter
  order, // 정렬 상태변수
  setOrder, // 정렬 상태변수 setter
  sortCta, // 정렬기준 상태변수 getter
  setSortCta, // 정렬기준 상태변수 setter
  initVariables, // 변수초기화함수
}) {
  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(sCon);
  // console.log("List에서 isLoggedIn:", myCon.isLoggedIn);

  console.log('선택데이터:',selData);

  // [ 페이징 관련 변수값 셋팅하기 ] ////

  // 1. 페이징 개수 : 전체 레코드수 / 페이지당 개수
  let pagingCount = Math.floor(
    totalCount.current / unitSize
  );
  // console.log("전체 레코드수 / 페이지당 개수:", pagingCount);
  // console.log("나머지연산:", totalCount.current % unitSize);

  // 2. 나머지가 있으면 페이징 개수 1증가
  if (totalCount.current % unitSize > 0) {
    pagingCount++;
  } /// if ///

  // 3. 페이징의 페이징 한계값 계산하기
  // 계산법: 전체 페이징 수 / 페이징의 페이징 개수
  // pagingCount / pgPgSize
  let pgPgLimit = Math.floor(pagingCount / pgPgSize);

  // 만약 나머지가 있으면 페이징 한계수에 1을 더함
  if (pagingCount % pgPgSize > 0) {
    pgPgLimit++;
  } /// if ///

  // console.log("페이징의 페이징 한계수:", pgPgLimit);

  /*********************************** 
        페이징코드 리턴 함수
  ***********************************/
  const pagingCode = () => {
    
  if(selData.length === 0) return '';

    // [ (1) 리턴 코드 담을 배열변수 ]
    let hcode = [];

    // [ (2) 페이징의 페이징for문의 시작값, 한계값 셋팅하기 ]
    // [1] 시작값 : 페페사이즈 * (페페넘-1)
    let initNum = pgPgSize * (pgPgNum.current - 1);
    // [2] 한계값 : 페페사이즈 * 페페넘
    let limitNum = pgPgSize * pgPgNum.current;
    // 주의:pgPgNum은 참조변수니까 pgPgNum.current로 사용해야함!

    // [ (3) 앞번호 앞에 이전 페이징구역 이동버튼 출력하기 ]
    // 페이징의 페이징번호가 1이 아닐때만 출력하기
    // pgPgNum은 참조변수니까 current로 읽기
    if (pgPgNum.current !== 1)
      hcode.push(
        <Fragment key="-1">
          {/* 처음 페이징으로 이동하기 */}
          <a
            href="#"
            title="First Paging Section"
            onClick={() => {
              // (1) 페이징의 페이징번호 첫페이징번호로 변경
              pgPgNum.current = 1;
              // (2) 페이지 번호도 첫 페이지번호로 변경
              setPageNum(1);
            }}
          >
            «{" "}
          </a>
          {/* 이전 페이징으로 이동하기 */}
          <a
            href="#"
            title="Previous Paging Section"
            onClick={() => {
              // (1) 페이징의 페이징번호 감소
              pgPgNum.current--;
              // (2) 이전 페이징의 페이징 첫 페이지번호로
              // 상태변수인 페이지번호 변경하기(리랜더링!)
              setPageNum(initNum - (pgPgSize - 1));
              // 이전 페이징 첫번호는 (시작값-(페페사이즈-1))
            }}
          >
            ◀{" "}
          </a>
        </Fragment>
      );

    // [ (4) for문으로 페이징 코드 생성하기 ] ////
    // 반복코드를 생성할 경우 key속성을 셋팅함이 필수
    // 이때 빈태그로는 속성셋팅 안되므로 <Fragment>를 사용
    for (let i = initNum; i < limitNum; i++) {
      // (( 중요!!! ))
      // 마지막 한계번호보다 크면 for문을 빠져나가야한다
      // pagingCount 가 마지막 페이지 번호
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
            // 마지막 번호 뒤에 바(|)는 출력X
            // 동시에 페이징 마지막 번호가 아닐때만 출력
            i < limitNum - 1 &&
              i + 1 !== pagingCount &&
              "  |  "
          }
        </Fragment>
      );
    } //////////// for ////////////

    // [ (5) 끝번호 뒤에 다음 페이징구역 이동버튼 출력하기 ]
    // 출력조건 : 페이징의 페이징 한계수가 아닌 페이징의 페이징번호
    if (pgPgNum.current !== pgPgLimit)
      hcode.push(
        <Fragment key="-2">
          {/* 다음 페이징 이동하기 */}
          <a
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
          {/* 맨끝 페이징 이동하기 */}
          <a
            href="#"
            title="Last Paging Section"
            onClick={() => {
              // (1) 페이징의 페이징번호 맨끝번호로 변경!
              pgPgNum.current = pgPgLimit;
              // (2) 다음 페이징의 페이징 첫 페이지번호로
              // 상태변수인 페이지번호 변경하기(리랜더링!)
              setPageNum((pgPgLimit - 1) * pgPgSize + 1);
              // 마지막 페이징 첫번호는
              // 페이징의 마지막 페이징 전페이지(pgPgLimit-1)
              // 여기에 페이징 크기 곱하고
              // 더하기 1하면 다음 페이징의 첫번째 페이지번호임!
            }}
          >
            {" "}
            »
          </a>
        </Fragment>
      );

    return hcode;
  }; //////////// pagingCode 함수 /////////

  // 리턴 코드구역 ////////////////////
  return (
    <main className="cont">
      {/* <h1 className="tit">Posts</h1> */}
      <h2 className="tit">게시판</h2>
      {/* 검색필터 */}
      <div className="selbx list">
        <select
          name="cta"
          id="cta"
          className="cta"
          defaultValue={keyword.cta}
        >
          <option value="title">Title</option>
          <option value="content">Contents</option>
          <option value="user_name">Writer</option>
        </select>

        <br className="br-set" />

        {/* 게시물 정렬 */}
        <select
          name="sort_cta"
          id="sort_cta"
          className="sort_cta"
          value={order}
          onChange={(e) => {
            // 정렬값 반대로 변경하기
            setOrder(order * -1);
            // 변경시 변경한 선택값 반영하기
            e.target.value = order;
            // 첫 페이지로 이동
            setPageNum(1);
            // 페이징의 페이징구역 초기화
            pgPgNum.current = 1;
          }}
        >
          <option value="1">내림차순</option>
          <option value="-1">오름차순</option>
        </select>

        {/* 검색창 */}
        <input
          id="stxt"
          className="stxt"
          type="text"
          // maxLength="80"
          defaultValue={keyword.kw}
          onKeyUp={(e) => {
            // 엔터를 친 경우 ///
            if (e.key === "Enter") {
              // console.log("여기!");
              e.target.nextElementSibling.click();
              // 다음 형제요소인 버튼 클릭이벤트 발생!

              // 페이지, 페이징 모두 초기화
              setPageNum(1);
              pgPgNum.currnt = 1;
            }
          }}
        />

        {/* <br className="br-set" /> */}

        {/* 검색버튼 */}
        <button className="sbtn" onClick={searchFn}>
          Search
        </button>

        {/* 초기화버튼 */}
        <button
          className="sbtn-reset"
          onClick={() => {
            // 1.검색어 비우기
            $("#stxt").val("");
            // 2.검색선택 초기화
            $("#cta").val("title");
            // 3.초기화 함수호출
            initVariables();
          }}
        >
          Reset
        </button>
        <select
          name="sel_type"
          id="sel_type"
          className="sel_type"
          defaultValue={type}
          onChange={(e) => {
            setType(e.target.value);
            // 기본 데이터 초기화
            setPageNum(1);
            pgPgNum.current = 1;
          }}
        >
          <option value="review">호텔리뷰</option>
          <option value="Q&A">Q &amp; A</option>
        </select>
      </div>
      <table className="dtbl" id="board">
        <thead className="dt-thead">
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            {type === "review" && <th>rank</th>}
            <th>Hotel</th>
          </tr>
        </thead>
        <thead className="mob-thead">
                  <tr>
                    {type === "review" && <th colSpan={6}>호텔리뷰</th>}
                    {type === "Q&A" && <th colSpan={6}>Q&A</th>}
                  </tr>
                </thead>
        <tbody>
          {totalCount.current > 0 ? (
            selData.map((v, i) => (
              <Fragment key={i}>
                {/* DT 모드용 */}
                <tr className="dt-view">
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
                        // console.log(e.target);
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
                  {type === "review" && (
                    <td className="rating">
                      {[...Array(5)].map((_, i) => {
                        if (i < Math.floor(v.rating)) {
                          return (
                            <img
                              key={i}
                              src={
                                process.env.PUBLIC_URL +
                                "/images/common/rating.png"
                              }
                              alt="별"
                            />
                          );
                        } else if (
                          i === Math.floor(v.rating) &&
                          v.rating % 1 >= 0.5
                        ) {
                          return (
                            <img
                              key={i}
                              src={
                                process.env.PUBLIC_URL +
                                "/images/common/rating_half.png"
                              }
                              alt="반쪽 별"
                            />
                          );
                        } else {
                          return (
                            <img
                              key={i}
                              src={
                                process.env.PUBLIC_URL +
                                "/images/common/rating_empty.png"
                              }
                              alt="빈 별"
                            />
                          );
                        }
                      })}
                    </td>
                  )}
                  <td>{v.hotel_name}</td>
                </tr>

                {/* 모바일 모드용 */}
                <tr className="mob-view">
                  <td
                    colSpan="6"
                    style={{ backgroundColor: "white" }}
                  >
                    <a
                      style={{ textAlign: "left" }}
                      href="#"
                      onClick={(e) => {
                        // console.log(e.target);
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
                </tr>
                {/* 모바일 하단 */}
                <tr className="mob-view mob-bottom">
                  <td
                    className="mob-bottom-info"
                    colSpan="6"
                  >
                    <span>{v.user_name}</span>
                    <span>{v.created_at}</span>

                    <span>
                      {type === "review" && (
                        <span
                          className="rating"
                          style={{ display: "inline" }}
                        >
                          {[...Array(5)].map((_, i) => {
                            if (i < Math.floor(v.rating)) {
                              return (
                                <img
                                  key={i}
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/common/rating.png"
                                  }
                                  alt="별"
                                />
                              );
                            } else if (
                              i === Math.floor(v.rating) &&
                              v.rating % 1 >= 0.5
                            ) {
                              return (
                                <img
                                  key={i}
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/common/rating_half.png"
                                  }
                                  alt="반쪽 별"
                                />
                              );
                            } else {
                              return (
                                <img
                                  key={i}
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/common/rating_empty.png"
                                  }
                                  alt="빈 별"
                                />
                              );
                            }
                          })}
                        </span>
                      )}
                    </span>
                    <span>{v.hotel_name}</span>
                  </td>
                </tr>
              </Fragment>
            ))
          ) : (
            // 데이터가 0일 경우 출력 ////////////
            <tr>
              <td colSpan="6">No search results</td>
            </tr>
          )}
        </tbody>
        {/* 페이징 하단파트 */}
        <tfoot>
          <tr>
            <td colSpan="6" className="paging">
              {pagingCode()}
            </td>
          </tr>
        </tfoot>
      </table>
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
                    게시물 작성
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
