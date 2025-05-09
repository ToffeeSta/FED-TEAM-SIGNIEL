import React, { useContext } from "react";
import { sCon } from "../sCon";
// import { users } from "../../../js/data/users";

// 제이쿼리 불러오기 ////
import $ from "jquery";

// 폰트 어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

function Write({
  setMode,
  totalCount,
  setPageNum,
  pgPgNum,
}) {
  // setMode - 모든 변경 상태변수 setter
  // totalCount - 전체 개수 참조변수 (글쓰기시 카운트 1증가!)

  // 폰트어썸 별모양
  const element = (
    <div>
      <FontAwesomeIcon
        icon={faStar}
        style={{ color: "#FFD43B" }}
      />
    </div>
  );

  // 전역 컨텍스트 API 사용하기!!
  const myCon = useContext(sCon);
  //   console.log("Write에서 isLoggedIn:", myCon.isLoggedIn);

  const loginUser = JSON.parse(
    sessionStorage.getItem("users")
  );

  // ★★★★★★★ 반드시 로컬스 사용자정보를 가져와야 함!!!!!
  // 기존의 제이슨 파일을 읽어오면 반드시 새로운 가입자가 없어서 
  // 에러가 예정됨!!! ★★★★★★★★★★★★★★★★★★★★
  const users = JSON.parse(localStorage.getItem("users"));

  const selUser = users.find((u) => u.id === loginUser.id);

  const selUserName = selUser.name;

  console.log(selUserName,selUser,loginUser);

  // 글쓰기 저장 서브밋 함수 //////
  const submitFn = () => {
    // 제목입력항목
    let title = $(".subject").val().trim();
    // 내용입력항목
    let content = $(".content").val().trim();
    // trim()으로 앞뒤공백 제거후 검사!

    // (1) 공통 유효성검사
    // - 제목, 내용 모두 비었으면 리턴!
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    } /// if /////

    // (2) 서브밋 처리하기 //////
    else {
      // 1) 글번호 만들기 ////////////
      // 1-1) 로컬스토리지 게시판 데이터 불러오기
      let localData = localStorage.getItem("posts");

      // 1-2) JSON.parse()로 배열객체로 변환
      localData = JSON.parse(localData);
      // console.log(localData);

      // 1-3) 배열 데이터 idx값 읽어오기
      let totalIdx = localData.map((v) => v.id);
      //   console.log("idx만 배열:", totalIdx);

      // 1-4) idx값 중 최대값 구하기 :
      // 스프레드 연산자로 ...totalIdx -> 배열값만 max에 넣기
      let maxIdx = Math.max(...totalIdx);
      //   console.log("idx중 최대값:", maxIdx);

      // 2) 오늘날짜 만들기 ///////////
      let today = new Date();
      //   console.log(today);
      // toJSON()은 제이슨 날짜형식변환(yyyy-MM-dd)
      // -> 앞의 10자리만 사용 : substr(시작순번,개수)
      today = today.toJSON().substr(0, 10);
      //   console.log(today);

      // [ idx 고유번호 만드는 방법 ] ///
      // idx는 최대값 idx에 1을 더함
      // 만약 문자형숫자일 경우를 대비하여
      // Number() 숫자형변환함!

      // 벨류값 저장
      let cvthotel_id= document.querySelector(".sel-hotel").value;

      // 3) 입력할 객체 데이터 만들기
      let data = {
        id: Number(maxIdx) + 1,
        title: title,
        content: content,
        created_at: today,
        // 저장된 벨류값 숫자형으로 변환
        hotel_id: Number(cvthotel_id),
        post_type:
          document.querySelector(".sel-type").value,
        rating: document.querySelector("#sel-star").value,
        user_id: selUser.id,
        user_name: selUserName,
      };
      console.log("입력데이터:", data);

      // 4) 입력 객체를 기존 로컬스 변환 객체에 추가하기
      localData.push(data);

      // 5) 입력객체를 문자형변환하여 로컬스에 넣기
      localStorage.setItem(
        "posts",
        JSON.stringify(localData)
      );

      // 6) 전체 개수 참조변수 1증가하기
      totalCount.current++;

      // 7) 페이지 번호 초기화
      setPageNum(1);

      // 8) 페이징 구역 번호 초기화
      pgPgNum.current = 1;

      // 9) 리스트 이동을 위해 모드 변경하기
      setMode("L");
    } /// else /////
  }; ////////// submitFn 함수 //////////////

  // 리턴 코드구역 ///////////////////
  return (
    <main className="cont">
      <h2 className="tit">게시물 작성</h2>
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
                  // 로그인한 사람이름
                  defaultValue={selUserName}
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
              <div className="selbox-hotel">
                <select
                  name="sel-hotel"
                  id="sel-hotel"
                  className="sel-hotel"
                >
                  <option value="1">시그니엘 서울</option>
                  <option value="2">시그니엘 부산</option>
                  <option value="3">롯데호텔 제주</option>
                </select>
              </div>
            </td>
          </tr>
          {/* 별점 등록 기능 */}
          <tr
            className="star-section"
            onLoad={(e) => {
              let tgEl =
                document.querySelector(".sel-type");
              if (tgEl.value === "Q&A")
                e.tgEl.style.display = "table-row";
              else e.tgEl.style.display = "none";
            }}
          >
            <td>
              <select
                name="sel-star"
                id="sel-star"
                className="sel-star"
              >
                <option selected="#" value="0">
                  별점을 선택해주세요
                </option>
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
                placeholder="제목을 입력해주세요"
              />
            </td>
          </tr>
          <tr>
            {/* <td>Content</td> */}
            <td>
              <textarea
                className="content"
                placeholder="게시물을 작성해주세요"
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
              <button onClick={submitFn}>등록하기</button>
              <button
                onClick={() => {
                  // 리스트 모드('L')로 변경하기
                  setMode("L");
                }}
              >
                돌아가기
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Write;
