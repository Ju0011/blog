/*eslint-disable*/
// warning 띄우지 않음

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);

  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목]; // deep Copy
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);

    //글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 vlog</div>
      </div>

      {/* <div className="list">
        <h3>{ posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div> */}

      <button onClick={제목바꾸기}>버튼</button>

      <div className="list">
        <h3> {글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[1]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>

    </div>
  );
}

export default App;
