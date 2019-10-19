import { findById } from '../common/utils.js';
import runsList from '../data/runs-api.js';


//const searchParams = new URLSearchParams(window.location.search);
//const runsId = searchParams.get('id');
const runsId = 'matrix';


const currentRun = findById(runsList, runsId);

//if (currentRun === null) {
//    window.location = '../map';
//}
    
const avatar = document.getElementById('avatar');
const runnerName = document.getElementById('name');
const hp = document.getElementById('hp');
const nuyen = document.getElementById('nuyen');

const bigLocationImg = document.getElementById('big-location-image');
const runDescription = document.getElementById('run-description');
const choices = document.getElementById('choices-form');
const choiceResult = document.getElementById('choice-result');

//get avatar, runnername, hp, nuyen from local storage

//populate DOM with current run info
//bigLocationImg.src = '../assets/' + currentRun.image;
runDescription.textContent = currentRun.description;
