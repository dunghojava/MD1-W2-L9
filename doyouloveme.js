function yes() {
    alert("<3");
}

let r = null;
r = document.getElementById("runno");

function init() {
    r = document.getElementById("runno");
    r.style.position = 'relative';
    r.style.left = '0px';
    r.style.top = '0px';
}

function no() {
    r.style.left = parseInt(r.style.left) + Math.random() * 100 + 'px';
    r.style.top = parseInt(r.style.top) + Math.random() * 100 + 'px';
}

window.onload = init;