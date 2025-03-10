// 로그인 시, 세션 스토리지에 해당 유저 데이터 저장하기 JS /////

import { reservations } from "../data/reservations";
import { posts } from "../data/posts";
import { hotels } from "../data/hotels";

////// 콘솔에 세션 스토리지에 저장된 users 데이터 가져오기 ////////

/************************************ 
 [ 유저별 예약정보 기본 데이터 구조 ]
 1. index : id
 2. 지점명 : h_name
 3. 호실번호 : room_num
 4. 체크인 : check_in
 5. 체크아웃 : check_out
 6. 예약인원 : guest_count
 7. 예약번호 : reserv_num
 ************************************/
const userReservData = (v) => {
  let count = 1;
  // 받은 값(유저ID)로 예약 테이블에서 필터링
  const filteredReservations = reservations.filter(
    (reservation) => reservation.user_id === v
  );

  // 필터링된 데이터를 새로운 배열로 변환
  const formattedReservations = filteredReservations.map((reservation) => {
    const [hotelId, roomNumber] = reservation.room_id.split("-"); // 호텔 ID, 룸 번호 분리

    return {
      id: count++,
      h_name: hotels.find((h) => h.id === Number(hotelId)).name,
      room_num: roomNumber,
      check_in: reservation.check_in,
      check_out: reservation.check_out,
      guest_count: reservation.guest_count,
      reserv_num: reservation.id,
    };
  });

  // 최종 데이터 저장 (배열 형태로 저장)
  sessionStorage.setItem(
    "userReservData",
    JSON.stringify(formattedReservations)
  );
};

/************************************ 
    [ 유저별 게시글 기본 데이터 구조 ]
    1. index : id
    2. 지점명 : h_name
    3. 게시글타입 : post_type
    4. 평점 : rating
    5. 제목 : title
    6. 내용 : content
    7. 작성일 : created_at
************************************/
const userPostData = (v) => {
  let count = 1;
  const filteredPosts = posts.filter((post) => post.user_id === v);

  const formeattedPosts = filteredPosts.map((post) => {
    return {
      id: count++,
      h_name: hotels.find((h) => h.id === Number(post.hotel_id)).name,
      post_type: post.post_type,
      rating: post.rating,
      title: post.title,
      content: post.content,
      created_at: post.created_at,
    };
  });

  sessionStorage.setItem("userPostData", JSON.stringify(formeattedPosts));
};

export { userReservData, userPostData };
