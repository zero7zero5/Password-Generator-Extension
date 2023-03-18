import "./App.css";
import React, { useState, useEffect } from "react";
const App = () => {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);
  };
  useEffect(() => {
    setCopy(false);
    let str = "";
    let result = "";
    if (option1) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (option2) str += "abcdefghijklmnopqrstuvwxyz";
    if (option3) str += "0123456789";
    if (option4) str += '!@#$%^&*()_+-={}[]|:;"<>,.?/~`\'"';
    if (
      option1 === false &&
      option2 === false &&
      option3 === false &&
      option4 === false
    )
      setOption2(true);
    for (let i = 0; i < length; i++) {
      result += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(result);
  }, [length, option1, option2, option3, option4, refresh]);
  return (
    <div className="container">
      <h1 className="title">Random Password Genarator</h1>
      <div className="input">
        <p className="password">{password}</p>
      </div>
      <div className="slider-container">
        <p className="label">Length</p>
        <p className="label">{length}</p>
        <input
          className="slider"
          type="range"
          min={5}
          max={128}
          onChange={(event) => setLength(event.currentTarget.value)}
        />
      </div>
      <div className="checkbox-container">
        <div className="checkbox">
          <label className="label">A-Z</label>
          <input
            value={option1}
            onChange={() => setOption1(!option1)}
            className="check"
            type="checkbox"
            checked={option1}
          />
        </div>

        <div className="checkbox">
          <label className="label">a-z</label>
          <input
            value={option2}
            onChange={() => setOption2(!option2)}
            className="check"
            type="checkbox"
            checked={option2}
          />
        </div>

        <div className="checkbox">
          <label className="label">0-9</label>
          <input
            value={option3}
            onChange={() => setOption3(!option3)}
            className="check"
            type="checkbox"
            checked={option3}
          />
        </div>

        <div className="checkbox">
          <label className="label">Special Characters</label>
          <input
            value={option4}
            onChange={() => setOption4(!option4)}
            className="check"
            type="checkbox"
            checked={option4}
          />
        </div>
      </div>

      <button onClick={() => setRefresh(!refresh)} className="button">
        Refresh
      </button>
      <button onClick={handleCopy} className="button">
        Copy
      </button>
      {copy && <p style={{ textAlign: "center" }}>Text Copied :)</p>}
    </div>
  );
};

export default App;
