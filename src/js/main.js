import '../scss/styles.scss';
import * as bootsrtap from 'bootstrap';


let sideBtn = document.getElementById('sideBtn');
let sideBar = document.querySelector('.side-bar');
let sidemain = document.getElementById('sidemain');
let contentMain = document.getElementById('contentMain');
let sideLabel1 = document.getElementById('sideLabel1');
let sideLabel2 = document.getElementById('sideLabel2');
let sideLabel3 = document.getElementById('sideLabel3');
let sideLabel4 = document.getElementById('sideLabel4');
let sideLabel5 = document.getElementById('sideLabel5');

sideBtn.addEventListener("click", minimize);

function minimize() {
    sidemain.classList.toggle('col-md-2');
    sidemain.classList.toggle('col-md-1');
    contentMain.classList.toggle('col-md-10');
    contentMain.classList.toggle('col-md-11');
    sideBar.classList.toggle('align-items-start');
    sideBar.classList.toggle('align-items-center');
    sideLabel1.classList.toggle('d-none');
    sideLabel2.classList.toggle('d-none');
    sideLabel3.classList.toggle('d-none');
    sideLabel4.classList.toggle('d-none');
    sideLabel5.classList.toggle('d-none');
    
}    

