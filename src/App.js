import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="current-weather">
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
            class="search-button"
          />
        </form>
      </header>

      <div class="heartOfProject">
        <div>
          <h1 id="currentLocation">Paris</h1>
          <div class="information">
            <span id="day">Saturday</span>
            <span id="time"> 15:32</span>, moderate rain <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </div>
        </div>
        <div class="currentTempreture">
          <div class="emoji">☀️</div>
          <div class="amount">14</div>
          <dic class="unit">°C</dic>
        </div>
      </div>

      <footer>
        <p>
          This project was coded by
          <a
            href="#"
            target="_blank"
            class="name"
          >
            Natalie V.
          </a>{" "}
          and is
          <a
            href="#"
            target="_blank"
            class="gitHub"
          >
            {" "}
            on GitHub
          </a>{" "}
          and
          <a
            href="#"
            target="_blank"
            class="netlify"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
