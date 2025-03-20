import React, { useState, useEffect } from "react";
import "../../css/modules/reserv_search.scss";
import DatePicker from "react-datepicker"; // react-datepicker 추가
import "react-datepicker/dist/react-datepicker.css"; // 스타일 시트 추가
import { ko } from "date-fns/locale"; // 한국어 로케일 추가
import { format } from "date-fns"; // date-fns에서 format 함수 가져오기

function ReservSearch({ onSearchChange }) {
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [reservations, setReservations] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guestCount, setGuestCount] = useState(1);  // 예약 인원 상태

  useEffect(() => {
    setHotels(JSON.parse(localStorage.getItem("hotels")) || []);
    setRooms(JSON.parse(localStorage.getItem("rooms")) || []);
    setReservations(JSON.parse(localStorage.getItem("reservations")) || []);
  }, []);

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

    const stayDuration = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );

    // 부모 컴포넌트에 상태 전달 (예약 인원 포함)
    onSearchChange({
      checkIn: format(checkIn, "yyyy-MM-dd"),  // checkIn 값을 yyyy-MM-dd 형식으로 변환
      checkOut: format(checkOut, "yyyy-MM-dd"), // checkOut 값을 yyyy-MM-dd 형식으로 변환
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
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            minDate={new Date()}
            maxDate={checkOut ? new Date(checkOut).setDate(new Date(checkOut).getDate() - 1) : undefined}
            placeholderText="날짜를 선택하세요"
            dateFormat="yyyy-MM-dd"
            locale={ko}
          />
        </div>

        <div className="select-wrap">
          <label>체크아웃</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            minDate={checkIn ? new Date(checkIn).setDate(new Date(checkIn).getDate() + 1) : new Date()}
            placeholderText="날짜를 선택하세요"
            dateFormat="yyyy-MM-dd"
            locale={ko}
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
