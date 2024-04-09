setInterval(  function() { 

let parisElement= document.querySelector ("#Paris");
let parisDateElement = parisElement.querySelector (".date");
let parisTimeElement = parisElement.querySelector (".time");
let parisTime = moment ().tz("Europe/Paris");

parisDateElement.innerHTML =  moment().format ("DD MMMM YYYY");
parisTimeElement.innerHTML = parisTime.format("HH: mm : ss [<small>] A [</small]");

}, 1000);


setInterval (function() { 
let istanbulElement= document.querySelector ("#Istanbul");
let istanbulDateElement = istanbulElement.querySelector (".date");
let istanbulTimeElement = istanbulElement.querySelector (".time");
let istanbulTime = moment ().tz("Europe/Istanbul");

istanbulDateElement.innerHTML =  moment().format ("DD MMMM YYYY");
istanbulTimeElement.innerHTML = istanbulTime.format("HH: mm : ss[<small>] A [</small]");
}, 1000);
