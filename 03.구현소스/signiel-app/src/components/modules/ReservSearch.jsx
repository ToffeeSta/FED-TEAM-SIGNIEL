import React, { useState } from "react";
import { rooms } from "../../js/data/rooms";
import { hotels } from "../../js/data/hotels";
import { reservations } from "../../js/data/reservations";
import "../../css/modules/reserv_search.scss";

function ReservSearch({ onSearchChange }) {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  const handleSearch = () => {
    if (!selectedHotel || !checkIn || !checkOut) {
      alert("모두 입력해주세요.");
      return;
    }

    const hotelRooms = rooms.filter(
      (room) => room.hotel_id === Number(selectedHotel)
    );

    const bookedRooms = reservations
      .filter((res) => {
        return (
          hotelRooms.some((room) => room.id === res.room_id) &&
          !(
            new Date(res.check_out) <= new Date(checkIn) ||
            new Date(res.check_in) >= new Date(checkOut)
          )
        );
      })
      .map((res) => res.room_id);

    const availableRooms = hotelRooms.filter(
      (room) => !bookedRooms.includes(room.id) && guestCount <= room.max_guests
    );

    // 몇박인지 계산
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const stayDuration = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    // 검색 결과를 부모 컴포넌트(Reservation)으로 전달
    onSearchChange({
      checkIn,
      checkOut,
      stayDuration,
      hotel: selectedHotel,
      guests: guestCount,
      availableRooms,
    });
  };

  return (
    <div className="card">
      <h2>호텔 예약 검색</h2>
      <div className="inner-con">
        <div className="select-wrap">
          <label>호텔</label>
          <select
            value={selectedHotel}
            onChange={(e) => setSelectedHotel(e.target.value)}
          >
            <option value="">호텔을 선택하세요</option>
            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>
        <div className="select-wrap">
          <label>체크인</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            max={
              checkOut
                ? new Date(new Date(checkOut).getTime() - 86400000)
                    .toISOString()
                    .split("T")[0]
                : undefined
            }
          />
        </div>
        <div className="select-wrap">
          <label>체크아웃</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={
              checkIn
                ? new Date(new Date(checkIn).getTime() + 86400000)
                    .toISOString()
                    .split("T")[0]
                : undefined
            }
          />
        </div>
        <div className="select-wrap">
          <label>인원</label>
          <input
            type="number"
            min="1"
            max="7"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
          />
        </div>
        <div className="search-btn" onClick={handleSearch}>
          <span>검색</span>
        </div>
      </div>
    </div>
  );
}

export default ReservSearch;
