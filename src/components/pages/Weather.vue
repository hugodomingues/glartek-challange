<template>
  <div>
    <div>
      <select
        class="form-select"
        @change="getWeatherApiResponse($event)"
        style="width: 18rem"
      >
        <option
          v-for="(option, index) in localeOptions"
          :key="index"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <div>
      <div v-if="city">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Current Temperature In {{ city }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ temperatura }}ºC
              <img :src="iconSrc" alt="" />
            </h6>
            <p class="card-text">Maximum Temperature: {{ maxTemp }}ºC</p>
            <p class="card-text">Minimum Temperature: {{ minTemp }}ºC</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiResponse: "",
      localeOptions: [
        { value: "", label: "Select One City" },
        { value: 2267094, label: "Leiria" },
        { value: 2267056, label: "Lisboa" },
        { value: 2740636, label: "Coimbra" },
        { value: 2735941, label: "Porto" },
        { value: 2268337, label: "Faro" },
      ],
      temperatura: null,
      maxTemp: null,
      minTemp: null,
      city: null,
      iconSrc: null,
    };
  },
  methods: {
    getWeatherApiResponse(event) {
      let localeId = event.target.value;
      const getData = axios
        .get(`http://localhost:7070/api-call?id=${localeId}`)
        .then((response) => {
          this.apiResponse = response.data;
          this.getTemperatura();
        })
        .catch(() => {
          alert("It was not possible to collect information");
        });

      //update the info every 30 minutes after we choose a place
      setInterval(() => {
        getData;
      }, 1800000);
    },
    getTemperatura() {
      const { main, name, weather } = this.apiResponse;
      const { temp, temp_max, temp_min } = main;
      const { icon } = weather[0];

      this.temperatura = this.convertToCelsius(temp);
      this.minTemp = this.convertToCelsius(temp_min);
      this.maxTemp = this.convertToCelsius(temp_max);
      this.city = name;
      this.iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
    convertToCelsius(kelvinTemp) {
      return Number.parseFloat(kelvinTemp - 273.15).toFixed(2);
    },
  },
};
</script>
