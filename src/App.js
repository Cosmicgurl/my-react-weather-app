import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="current-weather">
      <header>
        <form id="city-search">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="location"
          />
          <input
            type="submit"
            value="Search"
            className="search-button"
          />
        </form>
      </header>

      <div className="heartOfProject">
        <div>
          <h1 id="currentLocation">Paris</h1>
          <div className="information">
            <span id="day">Saturday</span>
            <span id="time"> 15:32</span>, moderate rain <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </div>
        </div>
        <div className="currentTempreture">
          <div className="emoji">☀️</div>
          <div className="amount">14</div>
          <dic className="unit">°C</dic>
        </div>
      </div>

      <footer>
        <p>
          This project was coded by
          <a
            href="#"
            target="_blank"
            className="name"
          >
            Natalie V.
          </a>{" "}
          and is
          <a
            href="#"
            target="_blank"
            className="gitHub"
          >
            {" "}
            on GitHub
          </a>{" "}
          and
          <a
            href="#"
            target="_blank"
            className="netlify"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
