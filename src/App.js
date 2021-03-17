import { useState, useEffect } from "react";
import { ProgressBar } from "./ProgressBar";
import "./styles.css";

let interval = undefined;
export default function App() {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 80);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  return (
    <div className="container">
      <div className="container__wrapper">
        <div className="container__box loading">
          <p className="loading__title">Loading...</p>
          <div className="loading__progress">
            <ProgressBar progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
}
