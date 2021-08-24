"use strict";

const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

const launchTime = new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000);

//store day, hour, month values
let prevDayValue = 0;
let prevMinuteValue = 0;
let prevHourValue = 0;

function setValues() {
  const currentTime = new Date();
  const diff = launchTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  prevHourValue = h;
  prevMinuteValue = m;
  prevDayValue = d;

  day.textContent = d < 10 ? "0" + d : d;
  hour.textContent = h < 10 ? "0" + h : h;
  minute.textContent = m < 10 ? "0" + m : m;
  second.textContent = s < 10 ? "0" + s : s;

}

function updateValues() {
  const currentTime = new Date();
  const diff = launchTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  prevHourValue = h;
  prevMinuteValue = m;
  prevDayValue = d;

  day.textContent = d < 10 ? "0" + d : d;
  hour.textContent = h < 10 ? "0" + h : h;
  minute.textContent = m < 10 ? "0" + m : m;
  second.textContent = s < 10 ? "0" + s : s;

}

setValues();

setInterval(updateValues, 1000);