//Display all the country flag in the console.
let request = new XMLHttpRequest();
let restCountries;

request.open("GET", "https://restcountries.com/v2/all");

request.onload = () => {
  let restCountries = JSON.parse(request.response);
  for (let i = 0; i <= restCountries.length; i++) {
    console.log(`Name      :${restCountries[i].name} 
Region    :${restCountries[i].region}
SubRegion :${restCountries[i].subregion}
Population:${restCountries[i].population}`);
  }
};

request.onerror = () => {
  console.log(request.status);
};

request.send();