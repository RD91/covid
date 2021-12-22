fetch("https://corona.lmao.ninja/v2/countries/india")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("in").innerHTML = data.country;
    document.getElementById("in-ac").innerHTML = data.active;
    document.getElementById("in-d").innerHTML = data.deaths;
    document.getElementById("in-rc").innerHTML = data.recovered;
    console.log(data);
    })
  .catch(error =>{
    console.log(error);
  })
fetch("https://corona.lmao.ninja/v2/countries/usa")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("us").innerHTML = data.country;
    document.getElementById("us-ac").innerHTML = data.active;
    document.getElementById("us-d").innerHTML = data.deaths;
    document.getElementById("us-rc").innerHTML = data.recovered;
    console.log(data);
    })
  .catch(error =>{
    console.log(error);
  })
fetch("https://corona.lmao.ninja/v2/countries/australia")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("aus").innerHTML = data.country;
    document.getElementById("aus-ac").innerHTML = data.active;
    document.getElementById("aus-d").innerHTML = data.deaths;
    document.getElementById("aus-rc").innerHTML = data.recovered;
    console.log(data);
    })
  .catch(error =>{
    console.log(error);
  })
fetch("https://corona.lmao.ninja/v2/countries/france")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("fr").innerHTML = data.country;
    document.getElementById("fr-ac").innerHTML = data.active;
    document.getElementById("fr-d").innerHTML = data.deaths;
    document.getElementById("fr-rc").innerHTML = data.recovered;
    console.log(data);
    })
  .catch(error =>{
    console.log(error);
  })