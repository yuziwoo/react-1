import './css/reset.css';
import './css/App.css';
import './css/App.module.css';

import Detail from "./page/detail.js";
import Main from "./page/main.js";

import data from "./js/data.js";
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";


function App() {
  let [shoes, setShoes] = useState(data);
  let [tab, setTab] = useState(0);
  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수입니다.

  let [tabClass, setTabClass] = useState("tabContent-off");

  useEffect(() => {
    let a = setTimeout(() => {setTabClass("tabContent-on")}, 100);
    
    return () => {
      clearTimeout(a);
      setTabClass("tabContent-off");
    }
  }, [tab])

  return (
    <div className="App">
      <Header navigate={navigate}/>
      <div>
      <Routes>
        <Route path="/" element={
          <div>
            <Main shoes={shoes} setShoes={setShoes} navigate={navigate}/>
            <button onClick={() => {
              // axios.get("https://codingapple1.github.io/shop/data2.json")
              // .then((res) => {
              //   if (shoes.length < 6) {
              //     let newShoes = shoes.concat(res.data);
              //     setShoes(newShoes);
              //     console.log(res.data);
              //   }
              //   console.log(res);
              // })
              // .catch((e) => {
              //   console.log(e)
              // })
              fetch("https://codingapple1.github.io/shop/data2.json")
              .then((res) => {
                return res.json();
              })
              .catch((e) => {console.log(e)})
              .then((res) => {
                if (shoes.length<6) {
                  let copy = shoes.concat(res);
                setShoes(copy);
                }
              })
              .catch((e) => {console.log(e)})
            }}>상품 더 불러오기</button>
          </div>
        } />
        <Route path="*" element={<h1>NOT FOUND입니다.</h1>} />

        <Route path="/detail/:id" element={
          <>
          <Detail shoes={shoes} setShoes={setShoes}/>
          <section className="tabMenu">
            <TabButton tab={tab} setTab={setTab}></TabButton>
            <section className={`tabContent ${tabClass}`}>안녕 나는 {tab}번 메뉴의 설명이야</section>
          </section>
          </>
        } />
      </Routes>
      </div>
    </div>
  );
}



function Header(props) {
  return (
    <header>
      <ul className="header-wrap">
      <li><p onClick={() => { props.navigate(-1) }}>👈🏻뒤로</p></li>
        <li><Link to="/"><p>메인페이지</p></Link></li>
      </ul>
    </header>
  )
}

function TabButton(props) {
  let arr = [0, 1, 2];
  return (
      <div className={`tab${props.tab} tabwrap`}>
        {
          arr.map((v, i) => {
            return <div key={i} onClick={() => {props.setTab(i)}}><p>메뉴{i+1}</p></div>
          })
        }
      </div>
  )
}

export default App;
