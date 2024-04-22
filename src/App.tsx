import "./App.css";
import { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("test");
      },
    });
  };

  return (
    <>
      <h1>RR Extension</h1>
      <div className="card">
        <button onClick={onclick}>Start</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
