//
// let imgObj = document.getElementById('myImage');
//
// function init() {
//     imgObj.style.position = 'relative';
//     imgObj.style.left = '0px';
// }
// init();
// function moveRight() {
//     imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
// }
//
//
//
let myImage = document.getElementById('myImage');
function initImage() {
    myImage.style.position = 'relative';
    myImage.style.left = '0px';
}
initImage();
function moveRight() {
    myImage.style.left = parseInt(myImage.style.left) + 20 + 'px';
}