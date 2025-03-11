import React, {useState, useRef} from "react";

// 게시판 CSS 불러오기 /////
import '../../css/pages/post.scss';

// 어.... 데이터...?
// import { posts } from '../../js/data/posts';

// 로컬스토리지 JS
import { initPostData } from "../../js/func/post_fn";
import List from "../modules/PostModules/List";
import Read from "../modules/PostModules/Read";


function Post() {
  // [ 후크 상태관리 변수구역 ] ///////////////
  // [1] 기능모드
  const [mode, setMode] = useState("L");
  // (1) 리스트 모드(L) : List Mode
  // (2) 글보기 모드(R) : Read Mode
  // (3) 글쓰기 모드(W) : Write Mode
  // (4) 수정 모드(M) : Modify Mode (삭제포함)

  // [ 리액트 참조변수 셋팅구역 ] //////
  // [1] 게시글 선택 데이터 : 글 내용보기시
  const selRecord = useRef(null);
  // -> 읽기/쓰기시 변수.current 로 사용함!
  console.log("선택데이터 참조변수값:", selRecord);

  // 로컬스토리지 게시판 데이터 정보확인 함수호출!
  initPostData();

  // 로컬스 데이터 변수할당하기!
  const baseData = JSON.parse(localStorage.getItem("post-data"));

  // 데이터 정렬 : 기준-> 최신날짜로 내림차순
  baseData.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));

  // 일부 데이터만 선택하기
  // -> 정렬후 상위 10개만 선택
  // -> 페이징을 하면 일정단위수만큼 보이기
  const selData = [];
  for (let i = 0; i < 10; i++) {
    selData.push(baseData[i]);
  }

  // 리턴 코드구역 /////////////////
  return (
    <>
      {
        // [1] 리스트 모드 출력하기 : mode -> "L" ////
        mode === "L" && (
          <List
            selData={selData} // 선택 리스트 배열데이터
            setMode={setMode} // 모드 상태변수 setter
            selRecord={selRecord} // 선택데이터 참조변수
          />
        )
      }

      {
        // [2] 보기모드 출력하기 : mode -> "R" ///
        mode === "R" && (
          <Read
            setMode={setMode} // 모드 상태변수 setter
            selRecord={selRecord} // 선택데이터 참조변수
          />
        )
      }
    </>
  );
};

export default Post;
