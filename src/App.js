import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Buhle-Masondo"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Buhle Masondo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Buhle-Masondo/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
