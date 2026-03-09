
// SHALAT

function hitungShalat(){

let checkboxes = document.querySelectorAll(".shalat");
let total = checkboxes.length;
let checked = 0;

checkboxes.forEach(cb => {
if(cb.checked){
checked++;
}
});

let progress = (checked/total)*100;

document.getElementById("dailyProgress").style.width = progress + "%";

let motivasi = document.getElementById("motivasi");

if(progress <= 40){
motivasi.innerText = "Belum optimal";
}
else if(progress <= 80){
motivasi.innerText = "Cukup baik";
}
else{
motivasi.innerText = "MasyaAllah lengkap!";
}

}

// AL QURAN

function hitungQuran(){

let target = document.getElementById("targetQuran").value;
let read = document.getElementById("readQuran").value;

let progress = (read/target)*100;

document.getElementById("quranProgress").style.width = progress + "%";

let status = document.getElementById("quranStatus");

if(progress < 50){
status.innerText = "Masih bisa ditambah";
}
else if(progress < 90){
status.innerText = "Hampir selesai";
}
else{
status.innerText = "Target tercapai";
}

}

// PUASA

let calendar = document.getElementById("calendar");

for(let i=1;i<=30;i++){

let day = document.createElement("div");
day.classList.add("day");
day.innerText = i;

day.addEventListener("click",function(){
day.classList.toggle("checked");
});

calendar.appendChild(day);

}



function hitungPuasa(){

let puasa = document.querySelectorAll(".checked").length;
let progress = (puasa/30)*100;

document.getElementById("dailyProgress").style.width = progress + "%";

}