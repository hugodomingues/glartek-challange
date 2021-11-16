<template>
  <div>
      <div> 
        <select class="form-select" @change="getWeatherApiResponse($event)">
            <option v-for="(option, index) in localeOptions" :key="index" :value="option.value">
                {{ option.label }}
            </option>
        </select>
       

      </div>
      <div> 
        Icon + Tempo
        <div>
            temperatura: {{temperatura}}
        </div>
        
      </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            apiResponse: '',
            localeOptions: [ 
                { value: '', label: "Select One City" },
                { value: 2267094, label: "Leiria" },
                { value: 2267056, label: "Lisboa" },
                { value: 2740636, label: "Coimbra" },
                { value: 2735941, label: "Porto" },
                { value: 2268337, label: "Faro" }
            ],
            temperatura: null,
            
            
        }
    },
    methods: {
        getWeatherApiResponse(event){
            let localeId = event.target.value
            console.log(localeId);
            axios.get("http://localhost:7070/api-call").then(response => {
                this.apiResponse = response.data
                this.getTemperatura()
            });
        },
        getTemperatura(){
            const { main } = this.apiResponse;
            const { temp } = main;
            this.temperatura = temp

        }
    }
};
</script>
