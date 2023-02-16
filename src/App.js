import './css/reset.css';
import './css/App.css';
import './css/main.css';

import Detail from "./page/detail.js";
import Main from "./page/main.js";

import { useState } from 'react';
import data from "./js/data.js";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<h1>NOT FOUND입니다.</h1>} />
      </Routes>
    </div>
  );
}



function Header(props) {
  return (
    <header>
      <ul className="header-wrap">
        <li><Link to="/"><p>메인페이지</p></Link></li>
        <li><Link to="/detail"><p>상품 상세페이지</p></Link></li>
      </ul>
    </header>
  )
}

export default App;
