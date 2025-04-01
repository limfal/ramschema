"use strict";

console.log("Hello world!");

let info = []; 

window.onload = () => {
    loadInfo();
}

async function loadInfo() {
    try {
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json")
        info = await response.json(); 
   printInfo(info);
    } catch (error) {
        console.error(error);
    }

}

function printInfo() {
    const infoEl = document.querySelector("#info");

    info.forEach(item => {
        infoEl.innerHTML += `<tr><td>${item.code}</td><td>${item.coursename}</td><td>${item.progression}</td></tr>`
    });
}