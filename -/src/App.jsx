import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  function Time() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(Time, 1000);
  return (
    <>
      <div className=" justify-items-center justify-center mt-2 flex">
        <input id="switch" type="checkbox" />
        <div className="app">
          <div className="body">
            <div className="phone">
              <div className="menu">
                <div className="time">{currentTime}</div>
                <div className="icons"></div>
              </div>
              <div className="content">
                <div className="circle">
                  <div className="crescent" />
                </div>
                <label htmlFor="switch">
                  <div className="toggle" />
                  <div className="names">
                    <p className="light">Light</p>
                    <p className="dark">Dark</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
