import { hotels } from "../data/hotels";

const userReservData = (v) => {
  let count = 1;

  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

  const filteredReservations = reservations.filter(
    (reservation) => reservation.user_id === v
  );

  const formattedReservations = filteredReservations.map((reservation) => {
    const [hotelId, roomNumber] = reservation.room_id.split("-");

    return {
      id: count++,
      h_name: hotels.find((h) => h.id === Number(hotelId))?.name || "알 수 없음",
      room_num: roomNumber,
      check_in: reservation.check_in,
      check_out: reservation.check_out,
      guest_count: reservation.guest_count,
      reserv_num: reservation.id,
    };
  });

  sessionStorage.setItem("userReservData", JSON.stringify(formattedReservations));
};

const userPostData = (v) => {
  let count = 1;

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  const filteredPosts = posts.filter((post) => post.user_id === v);

  const formattedPosts = filteredPosts.map((post) => {
    return {
      id: count++,
      h_name: hotels.find((h) => h.id === Number(post.hotel_id))?.name || "알 수 없음",
      post_type: post.post_type,
      rating: post.rating,
      title: post.title,
      content: post.content,
      created_at: post.created_at,
    };
  });

  sessionStorage.setItem("userPostData", JSON.stringify(formattedPosts));
};

export { userReservData, userPostData };
