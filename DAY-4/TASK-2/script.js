//Displaying all the country Flags in the console using REST COuntries API

let req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v2/all");

req.onload = () => {
  let restCountries = JSON.parse(req.response);
  for (let i = 0; i <= restCountries.length; i++) {
    console.log(restCountries[i].flag);
  }
};

req.onerror = (er) => {
  console.log(er);
  console.log(req.status);
  console.log(req.statusText);
};

req.send();