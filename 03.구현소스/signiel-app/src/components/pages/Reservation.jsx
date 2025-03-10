import React, { useState } from "react";
import ReservSearch from "../modules/ReservSearch";
import RoomInfo from "../modules/RoomInfo";
import "../../css/pages/reservation.scss";

function Reservation() {
  const [reservation, setReservation] = useState({
    checkIn: null,
    checkOut: null,
    hotel: "",
    guests: 1,
    availableRooms: [],
  });

  return (
    <div className="outbx">
      {/* 예약 정보 입력 */}
      <ReservSearch onSearchChange={(data) => setReservation(data)} />

      <h3>예약 가능 객실</h3>
      {/* 검색 결과 표시 */}
      <RoomInfo
        availableRooms={reservation.availableRooms}
        stayDuration={reservation.stayDuration}
      />
    </div>
  );
}

export default Reservation;
