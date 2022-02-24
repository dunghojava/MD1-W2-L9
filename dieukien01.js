// bài 1
function chiahet() {
    let a = document.getElementById("st11").value;
    let b = document.getElementById("st12").value;
    if (a % b == 0) {
        document.getElementById("rs1").innerHTML = "a chia hết cho b";
    } else {
        document.getElementById("rs1").innerHTML = "a không chia hết cho b";
    }
}

// bài 2
function tuoi() {
    let a = document.getElementById("st2").value;
    if (a < 15) {
        document.getElementById("rs2").innerHTML = "Chưa đủ tuổi vào lớp 10";
    } else {
        document.getElementById("rs2").innerHTML = "Đủ tuổi vào lớp 10";
    }
}

// bài 3
function amduong() {
    let a = document.getElementById("st3").value;
    if (a > 0) {
        document.getElementById("rs3").innerHTML = a + " lớn hơn 0";
    } else if (a < 0) {
        document.getElementById("rs3").innerHTML = a + " nhỏ hơn 0";
    } else {
        document.getElementById("rs3").innerHTML = "0";
    }
}

// bài 4
function timmax() {
    let a = document.getElementById("st41").value;
    let b = document.getElementById("st42").value;
    let c = document.getElementById("st43").value;
    if (a > b) {
        if (a > c) {
            document.getElementById("rs4").innerHTML = "Số lớn nhất là a";
        } else {
            document.getElementById("rs4").innerHTML = "Số lớn nhất là c";
        }
    } else if (b > c) {
        document.getElementById("rs4").innerHTML = "Số lớn nhất là b";
    } else {
        document.getElementById("rs4").innerHTML = "Số lớn nhất là c";
    }
}

// bài 5
function diemtb() {
    let a = document.getElementById("st51").value;
    let b = document.getElementById("st52").value;
    tb = (a * 2 + b * 3) / 5;
    if (tb >= 8) {
        document.getElementById("rs5").innerHTML = "Học lực giỏi";
    } else if (tb >= 6.5) {
        document.getElementById("rs5").innerHTML = "Học lực khá";
    } else if (tb >= 4) {
        document.getElementById("rs5").innerHTML = "Học lực trung bình";
    } else {
        document.getElementById("rs5").innerHTML = "Học lực yếu";
    }
}
// bài 6
function hoahong() {
    let a = document.getElementById("st61").value;
    let b = document.getElementById("st62").value;
    c = a * b / 100;
    document.getElementById("rs6").innerHTML = "Hoa hồng nhận được là " + c;
}
// bài 7
function giacuoc() {
    let a = document.getElementById("st71").value;
    let b = document.getElementById("st72").value;
    c = a * 200 + b * 800;
    document.getElementById("rs7").innerHTML = "Giá cước phải trả là " + c;
}