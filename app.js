const logo = document.querySelector('.logo');
const nav_links = document.querySelector('.nav_links');
const etlinan = document.querySelector('.etlinan');
const corek = document.querySelector('.corek');

const ar = TimelineMax();

ar.fromTo(logo,1,{height:'0%'}, {height:'80%'})