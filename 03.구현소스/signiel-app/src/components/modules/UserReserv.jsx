import React, { useEffect, useState } from "react";
import "../../css/modules/cont_card.scss";
import { userReservData } from "../../js/func/userInfo_fn";

function UserReserv() {
  const [reservations, setReservations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const userIdx = JSON.parse(sessionStorage.getItem("users"))?.id;
    if (userIdx) {
      userReservData(userIdx);
    }

    const storedData = sessionStorage.getItem("userReservData");
    if (storedData) {
      setReservations(JSON.parse(storedData));
    }
  }, []);

  // 예약 내역을 선택된 정렬 순서에 맞게 정렬
  const sortedReservations = [...reservations].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.check_in) - new Date(b.check_in); // 예약일 오름차순
    } else {
      return new Date(b.check_in) - new Date(a.check_in); // 예약일 내림차순
    }
  });

  const visibleReservations = sortedReservations.slice(0, visibleCount);

  const handleCancel = (reservNum) => {
    console.log(reservNum);

    
  };

  return (
    <div className="con-box">
      <div className="con-wrap">
        <h2 className="tit">예약 내역</h2>

        <div className="sort-options">
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">최신순</option>
            <option value="asc">오래된순</option>
          </select>
        </div>
      </div>

      <div className="con-list">
        {visibleReservations.length > 0 ? (
          visibleReservations.map((res) => (
            <div key={res.id} className="con-card">
              <h3>예약번호: {res.reserv_num}</h3>
              <p>
                예약일: {res.check_in} ~ {res.check_out}
              </p>
              <p>지점: {res.h_name}</p>
              <p>객실: {res.room_num}호</p>
              <p>예약인원: {res.guest_count}명</p>
              <div
                className="cancel-btn"
                onClick={() => handleCancel(res.reserv_num)}
              >
                <span>취소</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">예약 내역이 없습니다.</p>
        )}
      </div>
      {visibleCount < reservations.length && (
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

export default UserReserv;
