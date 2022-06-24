<!-- HTML -->

<template>
  <div id="app" :class="[
  { 'weather-rain': weather.weather[0].main == 'Rain' },
  { 'weather-snow': weather.weather[0].main == 'Snow' },
  { 'weather-clear': weather.weather[0].main == 'Clear' || weather.weather[0].main == 'Mist' },
  { 'weather-clouds': weather.weather[0].main == 'Clouds' || weather.weather[0].main == 'Haze' }]">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search city..." v-model="query" @keypress="fetchWeather" />
      </div>
      <div class="box" v-if="typeof weather.main != 'undefined'">
        <div class="card">
          <div class="weather-wrap">
            <div class="location-box">
              <div class="location">
                {{ weather.name }}, {{ weather.sys.country }}
              </div>
              <div class="date">{{ dateBuilder() }}</div>
            </div>
            <div class="weather-box">
              <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
              <div class="weather-feelsLike">
                Feels like
                <strong>
                  {{ Math.round(weather.main.feels_like) }}°C
                </strong>
              </div>
              <div class="weather">{{ weather.weather[0].main }}</div>
            </div>
          </div>
          <div class="weather-info">
            <div class="weather-item" title="Wind(風)">
              <img :src="require('./assets/images/wind.png')" width="40" />
              <span class="value"> {{ (weather.wind.speed) }}KM/h</span>
            </div>
            <div class="weather-item" title="Humidity(湿度)">
              <img :src="require('./assets/images/humidity.png')" width="40" />
              <span class="value"> {{ weather.main.humidity }}%</span>
            </div>
            <div class="weather-item" title="Cloud(雲)">
              <img :src="require('./assets/images/cloud.png')" width="40" />
              <span class="value"> {{ weather.clouds.all }}%</span>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="weather-wrap">
            <div class="location-box">
              <div class="location">
                {{ DefaultWeather.name }}, {{ DefaultWeather.sys.country }}
              </div>
              <div class="date">{{ dateBuilder() }}</div>
            </div>
            <div class="weather-box">
              <div class="temp">{{ Math.round(DefaultWeather.main.temp) }}°C</div>
              <div class="weather-feelsLike">
                Feels like
                <strong>
                  {{ Math.round(DefaultWeather.main.feels_like) }}°C
                </strong>
              </div>
              <div class="weather">{{ DefaultWeather.weather[0].main }}</div>
            </div>
          </div>
          <div class="weather-info">
            <div class="weather-item" title="Wind(風)">
              <img :src="require('./assets/images/wind.png')" width="40" />
              <span class="value"> {{ (DefaultWeather.wind.speed) }}KM/h</span>
            </div>
            <div class="weather-item" title="Humidity(湿度)">
              <img :src="require('./assets/images/humidity.png')" width="40" />
              <span class="value"> {{ DefaultWeather.main.humidity }}%</span>
            </div>
            <div class="weather-item" title="Cloud(雲)">
              <img :src="require('./assets/images/cloud.png')" width="40" />
              <span class="value"> {{ DefaultWeather.clouds.all }}%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-text">
        Developed by <span>Mursalin Islam</span>        
        <a href="https://github.com/mursalinir/vue-weather" target="_blank" class="link">
          Github Repository
        </a>
      </div>
    </main>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  name: "App",
  components: {

  },
  data() {
    //fetching API from openweathermap.org
    return {
      api_key: "85c1d88ec81c35f0c480a491e3562bc3",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      default: "Miyazaki",
      default2: "Dhaka",
      weather: {},
      DefaultWeather: {},
    };
  },
  methods: {
    async fetchWeather(e) {
      if (e.key == "Enter") {
        
        const res1 = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
        const data1 = await res1.json()
        this.weather = data1

        const res2 = await fetch(`${this.url_base}weather?q=${this.default}&units=metric&APPID=${this.api_key}`)
        const data2 = await res2.json()
        this.DefaultWeather = data2;

      }
    },

    //creating dates for the weather
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    },
  },
  async created() {
    const res1 = await fetch(`${this.url_base}weather?q=${this.default2}&units=metric&APPID=${this.api_key}`)
    const data1 = await res1.json()
    this.weather = data1

    const res2 = await fetch(`${this.url_base}weather?q=${this.default}&units=metric&APPID=${this.api_key}`)
    const data2 = await res2.json()
    this.DefaultWeather = data2;
  }

};
</script>

<!-- STYLING -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

:root {
  --cardWidth: 360px;
  --cardBgColor: #f3f3f1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}

#app {
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.weather-rain {
  background-image: url("./assets/images/rainy-bg.webp");
}

#app.weather-snow {
  background-image: url("./assets/images/snow-bg.jpg");
}

#app.weather-clouds {
  background-image: url("./assets/images/cloud-bg.gif");
}

#app.weather-clear {
  background-image: url("./assets/images/clear-bg.gif");
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.10),
      rgba(0, 0, 0, 0.30));
}

.search-box {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
}

.search-box .search-bar {
  display: block;
  width: 60%;
  padding: 15px;
  color: #090000;
  font-size: 25px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 253, 253, 0.50);
  border-radius: 20px 20px 20px 20px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px 20px 20px 20px;
  align-items: center;
  justify-content: center;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  
}

.card {
  max-width: var(--cardWidth);
  width: 100%;
  padding: 40px;
  margin: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  background-color: var(--cardBgColor);

  @media (max-height: 800px) {
    padding: 40x;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 30px;
  }
}

.location-box .location {
  color: rgb(33, 0, 0);
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: rgb(33, 0, 0);
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  font-style: italic;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  display: inline-block;
  padding: 10px 25px;
  color: rgb(0, 0, 0);
  font-size: 95px;
  font-weight: 900;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  margin: 30px 0px;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.weather-feelsLike {
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 700;
}

.weather-box .weather {
  color: rgb(0, 0, 0);
  font-size: 30px;
  font-weight: 900;
  margin: 30px 0px;

}

.weather-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #090000;
  padding-top: 20px;

}

.weather-info .weather-item {
  display: flex;
  align-items: center;
  color: #090000;
}

.weather-info .value {
  /*margin-left: 10px;*/
  font-weight: 600;
}

.footer-text {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: #fff;
}

.footer-text .link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  text-shadow: 0 2px 3px fade(black, 20);
}

.footer-text .span {
  font-size: 18px;
  margin-left: 5px;
}
</style>