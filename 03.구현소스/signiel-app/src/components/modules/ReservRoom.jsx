import React from "react";
import "../../css/modules/reserv_room.scss";

function ReservRoom({
  availableRooms,
  stayDuration,
  checkIn,
  checkOut,
  guestCount,
}) {
  const handleReservation = (room) => {
    const user = JSON.parse(sessionStorage.getItem("users"));
    const user_id = user ? user.id : null;

    if (!user_id) {
      alert("사용자가 로그인되지 않았습니다.");
      return;
    }

    // 예약 확인 창 띄우기
    const confirmReservation = window.confirm("예약하시겠습니까?");

    if (!confirmReservation) {
      return;
    }

    // 로컬에 이미 예약된 방인지 체크
    const existingReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    const isRoomReserved = existingReservations.some(
      (reservation) =>
        reservation.user_id === user_id &&
        reservation.room_id === room.id &&
        reservation.check_in === checkIn
    );

    if (isRoomReserved) {
      alert("이미 예약된 방입니다.");
      return;
    }

    // 예약 정보 객체 생성
    const reservation = {
      id: `${room.id}-${checkIn}`,
      user_id: user_id,
      room_id: room.id,
      check_in: checkIn,
      check_out: checkOut,
      guest_count: guestCount,
    };

    existingReservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(existingReservations));

    alert("예약하셨습니다.");
  };

  return (
    <div>
      <ul>
        {availableRooms.length > 0 ? (
          availableRooms.map((room) => (
            <li className="roominfo-card" key={room.id}>
              <div className="inner-con">
                <p>
                  {room.room_type}룸({room.base_guests}인실)
                </p>
                <p>{room.room_num}호실</p>
                <p>추가가능인원 {room.max_guests - room.base_guests}인</p>
                <p>{room.price_per_night.toLocaleString()}원/박</p>
                <p>
                  {stayDuration}박 :{" "}
                  {(room.price_per_night * stayDuration).toLocaleString()}원
                </p>
                <div
                  className="reserv-btn"
                  onClick={() => handleReservation(room)}
                >
                  <span>예약하기</span>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="no-room">예약 가능한 객실이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default ReservRoom;
