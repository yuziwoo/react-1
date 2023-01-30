import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState("제목입니다.")
  return (
    <div className="App">
      <h1 onClick={() => {
        setTitle("제목이 변경되었습니다.")
      }}>{title}</h1>
    </div>
  );
}

export default App;
