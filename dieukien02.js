//bài 1
function doido() {
    let a = document.getElementById("st1").value;
    document.getElementById("rs1").innerHTML = a + " độ C bằng " + (a * 9 / 2 + 32) + " độ F";
}
//bài 2
function doidai() {
    let a = document.getElementById("st2").value;
    document.getElementById("rs2").innerHTML = a + " mét bằng " + (a * 3.2808) + " feet";
}
//bài 3
function vuong() {
    let a = document.getElementById("st3").value;
    document.getElementById("rs3").innerHTML = "Diện tích hình vuông là " + (a * a);
}
//bài 4
function chunhat() {
    let a = document.getElementById("st41").value;
    let b = document.getElementById("st42").value;
    document.getElementById("rs4").innerHTML = "Diện tích hình chữ nhật là " + (a * b);
}
//bài 5
function tamgiac() {
    let a = document.getElementById("st51").value;
    let b = document.getElementById("st52").value;
    document.getElementById("rs5").innerHTML = "Diện tích hình tam giác là " + ((a * b) / 2);
}
//bài 6
function bacmot() {
    let a = document.getElementById("st61").value;
    let b = document.getElementById("st62").value;
    document.getElementById("rs6").innerHTML = "x bằng " + ((-b) / a);
}
//bài 7
function bachai() {
    let a = document.getElementById("st71").value;
    let b = document.getElementById("st72").value;
    let c = document.getElementById("st73").value;
    if ((b * b) > (4 * a * c)) {
        document.getElementById("rs7").innerHTML = "Phương trình có 2 nghiệm là " + (((-b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a)) + " và " + (((-b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    } else if ((b * b) == (4 * a * c)) {
        document.getElementById("rs7").innerHTML = "Phương trình có nghiệm duy nhất là " + ((-b) / (2 * a));
    } else {
        document.getElementById("rs7").innerHTML = "Phương trình vô nghiệm"
    }
}
//bài 8
function tuoi() {
    let a = document.getElementById("st8").value;
    if (a > 0 && a < 120) {
        document.getElementById("rs8").innerHTML = "Đây là tuổi người";
    } else {
        document.getElementById("rs8").innerHTML = "Đây không phải tuổi người";
    }
}
//bài 9
function kttamgiac() {
    let a = +document.getElementById('st91').value;
    let b = +document.getElementById('st92').value;
    let c = +document.getElementById('st93').value;
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        document.getElementById('rs9').innerHTML = "Là 1 tam giác";
    } else {
        document.getElementById('rs9').innerHTML = "Không đủ điều kiện là 1 tam giác";
    }
}
//bài 10
function giadien() {
    let a = +document.getElementById('st10').value;
    if (a < 6) {
        document.getElementById("rs10").innerHTML = "Giá điện phải trả là " + (a * 1685);
    } else if (a < 22) {
        document.getElementById("rs10").innerHTML = "Giá điện phải trả là " + (8425 + (a - 5) * 1611);
    } else if (a < 110) {
        document.getElementById("rs10").innerHTML = "Giá điện phải trả là " + (34201 + (a - 21) * 1555);
    } else {
        document.getElementById("rs10").innerHTML = "Giá điện phải trả là " + (169369 + (a - 109) * 1536);
    }
}
//bài 11
function thue() {
    let a = +document.getElementById('st111').value;
    if (a <= 5000000) {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (a * 5 / 100);
    } else if (a <= 10000000) {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (250000 + a / 10);
    } else if (a <= 18000000) {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (750000 + (a * 15 / 100));
    } else if (a <= 32000000) {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (1950000 + (a / 5));
    } else if (a <= 52000000) {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (4750000 + (a / 4));
    } else if (a <= 80000000) {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (9750000 + (a * 3 / 10));
    } else {
        document.getElementById("rs11").innerHTML = "Thuế phải nộp là " + (18150000 + (a * 35 / 100));
    }
}
//bài 12
function tinhlai() {
    let a = +document.getElementById('st121').value;
    let b = +document.getElementById('st122').value;
    let c = +document.getElementById('st123').value;
    for (i=0; i<b; i++) {
        a = a + a*c/100;
    }
    document.getElementById("rs12").innerHTML = "Lãi phải trả cho " + b + " tháng là " + a;
}