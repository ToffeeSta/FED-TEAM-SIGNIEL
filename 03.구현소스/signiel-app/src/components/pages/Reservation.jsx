import React, { useState } from "react";
import ReservSearch from "../modules/ReservSearch";
import ReservRoom from "../modules/ReservRoom";
import "../../css/pages/reservation.scss";

function Reservation() {
  const [reservation, setReservation] = useState({
    checkIn: "",
    checkOut: "",
    stayDuration: 0,
    hotel: "",
    guests: 1,  // 예약 인원 추가
    availableRooms: [],
  });

  const handleSearchChange = (data) => {
    setReservation((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  return (
    <div className="outbx">
      {/* 예약 정보 입력 */}
      <ReservSearch onSearchChange={handleSearchChange} />

      <h3>예약 가능 객실</h3>
      {/* 검색 결과 표시 */}
      <ReservRoom
        availableRooms={reservation.availableRooms}
        stayDuration={reservation.stayDuration}
        checkIn={reservation.checkIn}
        checkOut={reservation.checkOut}
        guestCount={reservation.guests}
      />
    </div>
  );
}

export default Reservation;
