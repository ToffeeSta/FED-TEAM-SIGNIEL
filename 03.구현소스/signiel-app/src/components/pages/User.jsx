import React from 'react'

// 모듈 CSS 불러오기 /////
import '../../css/pages/user.scss';

function User(props) {
  return (
    <main>

        <div className="user">
            <div className="user_l">
                <h2>User information</h2>
                <p>회원정보</p>
                <div className="username">
                    <img src="./img/ab1.jpg" alt="" />
                    <h1>User Name</h1>
                    <figure>010 - 0000 - 0000</figure>
                    <figcaption>정보변경</figcaption>
                </div>
            </div>

            <div className="user_r">
                <h1>예약정보</h1>
                <div>
                    <div className="reser">
                        <p><img src="" alt="" />1A2B3C4C</p>
                        <p><img src="./img/calendar.png" alt="달력" />달력</p>
                        <p><img src="./img/watch.png" alt="시간" />시간</p>
                        <p><img src="./img/people.png" alt="인원" />인원</p>
                        <p><img src="./img/place.png" alt="장소" />장소</p>
                    </div>
                    <div className="reser">
                        <p><img src="" alt="" />1A2B3C4C</p>
                        <p><img src="./img/calendar.png" alt="달력" />달력</p>
                        <p><img src="./img/watch.png" alt="시간" />시간</p>
                        <p><img src="./img/people.png" alt="인원" />인원</p>
                        <p><img src="./img/place.png" alt="장소" />장소</p>
                    </div>
                </div>
                <h1>내가 올린 게시물</h1>
                <div>
                    <ul>
                        <li>No.</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <ul>
                        <li>제목</li>
                        <li><a href="#">디자이너로 사행시 하겠습니다</a></li>
                        <li><a href="#">디자이너로 사행시 하겠습니다</a></li>
                        <li><a href="#">디자이너로 사행시 하겠습니다</a></li>
                    </ul>
                    <ul>
                        <li>글쓴이</li>
                        <li>Lindsey Calzoni</li>
                        <li>Lindsey Calzoni</li>
                        <li>Lindsey Calzoni</li>
                    </ul>
                    <ul>
                        <li>날짜</li>
                        <li>2025-02-15</li>
                        <li>2025-02-15</li>
                        <li>2025-02-15</li>
                    </ul>

                </div>
            </div>
        </div>

    </main>
  );
};

export default User;