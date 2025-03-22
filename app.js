const button=document.getElementById("button");
const Country=document.getElementById("country");
const City=document.getElementById("city");
const Weather=document.getElementById("weather");

let counter=0;

button.onclick = ()=>{
    axios.get('https://www.freetestapi.com/api/v1/weathers') // request
    .then(function(response){
        console.log(response);
        button.textContent="NextWeather";
        Weather.textContent="";
        console.log(response.data[counter].country);
       Country.textContent=response.data[counter].country;
       setTimeout(function(){
        City.textContent=response.data[counter].city;
        Weather.textContent=response.data[counter].weather_description;
       },1500);
       counter++;
    })
    .catch(function(error){
        console.log(error);
    })
    
};

















// https://www.freetestapi.com/apis/weathers