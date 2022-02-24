function yes() {
    alert("<3");
}

let r = null;
r = document.getElementById("runno");

function init() {
    r = document.getElementById("runno");
    r.style.position = 'Relative';
    r.style.left = '0px';
    r.style.top = '0px';
}

function no() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    r.style.left = Math.random() * width + 'px';
    r.style.top = Math.random() * height + 'px';
}

window.onload = init;


