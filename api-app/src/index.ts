import '../css/main.css';

import {FillCovidData} from "./fillcoviddata";
import {FillParticularCovidData} from "./FillParticularCovidData";
import {FillCountries} from "./FillCountries";
// import {drawchart} from "./graph";
// import {sortTable} from "./sortdata";

onload = ()=>{

    FillCovidData();
    FillCountries();
    FillParticularCovidData();
    // drawchart();
    // sortTable();

}
/*
fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/thor", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "46184cc6cfmsh8158e5a64c009fap162410jsna2ba68136244",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
    }
}).then(response => response.json())
    .then(data => console.log(data));
 */