(()=>{"use strict";const e=document.getElementById("weather-search"),t=document.getElementById("search-button"),n=document.getElementById("toggle");t.addEventListener("click",(()=>{e.value?o(e.value):alert("Please enter a city name.")})),n.addEventListener("change",(()=>{return e=parseInt(temp.textContent.slice(0,-1)),void(n.checked?temp.textContent=Math.round(1.8*e+32)+"°":temp.textContent=Math.round(.5556*(e-32))+"°");var e}));let a;const o=async e=>{try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=1148c1cce4eb4124e7142dadbf7589d7&units=metric`);if(!t.ok)return void(404===t.status?alert("Please enter a correct city name."):console.log(t.statusText));const n=(({main:{feels_like:e},weather:t,name:n})=>({main:{feels_like:e},weather:t,name:n}))(await t.json());a=n,document.getElementById("temp").textContent=Math.round(a.main.feels_like)+"°",document.querySelector("img").src=`http://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png`,document.querySelector(".city-name").textContent=a.name,document.querySelector(".title").textContent=a.weather[0].main,document.querySelector(".description").textContent=a.weather[0].description}catch(e){console.log(e)}};o("Bangkok")})();