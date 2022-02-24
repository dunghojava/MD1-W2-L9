function nhap(data) {
    document.getElementById('scr').value += data;
}
function tinh() {
    document.getElementById('scr').value = eval(document.getElementById('scr').value);
}
function xoa() {
    document.getElementById('scr').value = '';
}