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
    guests: 1,
    availableRooms: [],
  });

  return (
    <div className="outbx">
      {/* 예약 정보 입력 */}
      <ReservSearch
        onSearchChange={(data) =>
          setReservation((prevState) => ({
            ...prevState,
            ...data,
          }))
        }
      />

      <h3>예약 가능 객실</h3>
      {/* 검색 결과 표시 */}
      <ReservRoom
        availableRooms={reservation.availableRooms}
        stayDuration={reservation.stayDuration || 0}
      />
    </div>
  );
}

export default Reservation;
