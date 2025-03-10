import React from "react";
import "../../css/modules/room_info.scss";

function RoomInfo({ availableRooms,stayDuration }) {
  return (
    <div>
      <ul >
        {availableRooms.length > 0 ? (
          availableRooms.map((room) => (
            <li className="roominfo-card" key={room.id}>
              <p>{room.room_type}룸({room.base_guests}인실)</p>
              <p>{room.room_num}호실</p>
              <p>추가가능인원 {room.max_guests - room.base_guests}인</p>
              <p>{room.price_per_night.toLocaleString()}원/박</p>
              <p>{stayDuration}박 : {(room.price_per_night * stayDuration).toLocaleString()}원</p>
              <div className="reserv-btn"><span>예약하기</span></div>
            </li>
          ))
        ) : (
          <p className="no-room">예약 가능한 객실이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default RoomInfo;

/* 
  id: "1-104-2025-03-25",
  user_id: 7,
  room_id: "1-104",
  check_in: "2025-03-25",
  check_out: "2025-03-28",
  guest_count: 4
 */