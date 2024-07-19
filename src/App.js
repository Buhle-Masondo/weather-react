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
            rel="noopener noreferrer"
          >
            {" "}
            Buhle Masondo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Buhle-Masondo/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://wondrous-sable-779ad4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
