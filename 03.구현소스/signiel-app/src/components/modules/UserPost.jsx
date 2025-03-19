import React, { useEffect, useState } from "react";
import "../../css/modules/cont_card.scss";
import { userPostData } from "../../js/func/userInfo_fn";

function UserPost() {
  const [posts, setPosts] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSort, setSelectedSort] = useState("desc"); // 정렬 기준 추가
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const userIdx = JSON.parse(sessionStorage.getItem("users"))?.id;
    if (userIdx) {
      userPostData(userIdx);
    }

    const storedData = sessionStorage.getItem("userPostData");
    if (storedData) {
      setPosts(JSON.parse(storedData));
    }
  }, []);

  const filteredPosts =
    selectedType === "all"
      ? posts
      : posts.filter((post) => post.post_type === selectedType);

  // 게시물 정렬: 날짜 기준으로 내림차순/오름차순
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (selectedSort === "asc") {
      return new Date(a.created_at) - new Date(b.created_at); // 오름차순
    } else {
      return new Date(b.created_at) - new Date(a.created_at); // 내림차순
    }
  });

  const visiblePosts = sortedPosts.slice(0, visibleCount);

  return (
    <div className="con-box">
      <div className="con-wrap">
        <h2 className="tit">작성한 게시물</h2>

        <div className="sort-options">
          {/* 정렬 셀렉트 박스 */}
          
            <select
              className="sortOrder"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="desc">최신순</option>
              <option value="asc">오래된순</option>
            </select>
          

          {/* 필터링 셀렉트 박스 */}
          <select
            className="filter-select "
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="review">Review</option>
            <option value="Q&A">Q&A</option>
          </select>
        </div>
      </div>

      <div className="con-list">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => (
            <div key={post.id} className="con-card">
              <div className="con-wrap">
                <p>{post.post_type}</p>
                {post.post_type !== "Q&A" && <p>⭐ {post.rating}점</p>}
              </div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="con-wrap">
                <p>{post.h_name}</p>
                <p>{post.created_at}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">작성한 게시물이 없습니다.</p>
        )}
      </div>

      {/* 10개씩 more-btn */}
      {visibleCount < filteredPosts.length && (
        <div
          className="more-btn"
          onClick={() => setVisibleCount((prev) => prev + 10)}
        >
          <span>more</span>
        </div>
      )}
    </div>
  );
}

export default UserPost;
