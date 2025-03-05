import React from "react";

// 모듈 CSS 불러오기 /////
import '../../css/pages/post.scss';

function Post(props) {
  return (
    <div>
      <main>
        <div className="post">
          <h1>POST</h1>
          <p>게시판</p>
          <div>
            <span>예약하기</span>
            <span>예약취소</span>
            <span></span>
          </div>
          <table border="0">
            <th>No.</th>
            <th>제목</th>
            <th>d</th>
            <th>d</th>
            <tr>
              <td>1행 1열</td>
              <td>1행 2열</td>
              <td>1행 3열</td>
              <td>1행 3열</td>
            </tr>
            <tr>
              <td>2행 1열</td>
              <td>2행 2열</td>
              <td>2행 3열</td>
              <td>2행 3열</td>
            </tr>
            <tr>
              <td>3행 1열</td>
              <td>3행 2열</td>
              <td>3행 3열</td>
              <td>3행 3열</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Post;
