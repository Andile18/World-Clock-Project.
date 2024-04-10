function updateTime() { 

let parisElement= document.querySelector ("#Paris");
if (parisElement){ 
let parisDateElement = parisElement.querySelector (".date");
let parisTimeElement = parisElement.querySelector (".time");
let parisTime = moment ().tz("Europe/Paris");

parisDateElement.innerHTML =  moment().format ("DD MMMM YYYY");
parisTimeElement.innerHTML = parisTime.format("HH: mm : ss [<small>] A [</small>]");

}

 
let istanbulElement= document.querySelector ("#Istanbul");
if (istanbulElement){
let istanbulDateElement = istanbulElement.querySelector (".date");
let istanbulTimeElement = istanbulElement.querySelector (".time");
let istanbulTime = moment ().tz("Europe/Istanbul");

istanbulDateElement.innerHTML =  moment().format ("DD MMMM YYYY");
istanbulTimeElement.innerHTML = istanbulTime.format("HH: mm : ss[<small>] A [</small>]");

}
}


function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();}

    let cityName =cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
 
 
     citiesElement.innerHTML = 
     
     `<div class="city">
     <div>
     <h2> ${cityName} </h2>
     <div class="date"> ${cityTime.format("DD MMMM YYYY")} </div>
     </div>
     <div class="time"> ${cityTime.format("H:mm:ss")} <small> ${cityTime.format ("A")}</small> </div>
     </div>`;
     
    
 }
 
 updateTime();
 setInterval(updateTime, 1000);
 
 
 let citiesSelectElement = document.querySelector("#city");
 
 citiesSelectElement.addEventListener("change", updateCity);



