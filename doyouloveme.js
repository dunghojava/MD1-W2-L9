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
    r.style.right = '0px';
    r.style.bottom = '0px';
}
var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
function no() {

    r.style.left = parseInt(r.style.left) + Math.random() * 200 + 'px';
    r.style.top = parseInt(r.style.top) + Math.random() * 200 + 'px';
    r.style.bottom = parseInt(r.style.bottom) + Math.random() * 200 + 'px';
    r.style.right = parseInt(r.style.right) + Math.random() * 200 + 'px';
    // if (r.style.left < width && r.style.top < height) {
    //     r.style.left = parseInt(r.style.left) + Math.random() * 200 + 'px';
    //     r.style.top = parseInt(r.style.top) + Math.random() * 200 + 'px';
    // }
}

window.onload = init;


