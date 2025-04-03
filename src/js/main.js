"use strict";

const infoEl = document.getElementById("info");
const inputEl = document.getElementById("search");

window.onload = init();

function init() {
    getData();
    showInfo();
}

document.getElementById("code").addEventListener('click', sortCode);
document.getElementById("name").addEventListener('click', sortName);
document.getElementById("prog").addEventListener('click', sortProg);
inputEl.addEventListener('input', filterData);


async function getData() {
    try {
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json")
        const info = await response.json(); 
        return info;
    } catch (error) {
        console.error(error);
    }
}

async function showInfo() {
        const info = await getData();
    
    printData(info);
}

async function sortCode() {
    const info = await getData();

    info.sort((a, b) => a.code > b.code ? 1 : -1);
    printData(info);
}

async function sortName() {
    const info = await getData();

    info.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
    printData(info);
}

async function sortProg() {
    const info = await getData();

    info.sort((a, b) => a.progression > b.progression ? 1 : -1);
    printData(info);
    
}

async function filterData() {
    const info = await getData();

    const searchPhrase = inputEl.value;
    const filteredData = info.filter(info =>
    info.code.toLowerCase().includes(searchPhrase.toLowerCase()) ||
    info.coursename.toLowerCase().includes(searchPhrase.toLowerCase()) ||
    info.progression.toLowerCase().includes(searchPhrase.toLowerCase())
    );

printData(filteredData);
}

function printData(data) {
    
    infoEl.innerHTML="";

    data.forEach(item => {
        infoEl.innerHTML += `<tr><td>${item.code}</td><td>${item.coursename}</td><td>${item.progression}</td></tr>`
    });
}