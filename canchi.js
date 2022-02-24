function tinh() {
    let a = document.getElementById("st").value;
    let b = a % 10;
    switch (b) {
        case 0:
            document.write('Canh ');
            break;
        case 1:
            document.write('Thân ');
            break;
        case 2:
            document.write('Nhâm ');
            break;
        case 3:
            document.write('Quý ');
            break;
        case 4:
            document.write('Giáp ');
            break;
        case 5:
            document.write('Ất ');
            break;
        case 6:
            document.write('Bính ');
            break;
        case 7:
            document.write('Đinh ');
            break;
        case 8:
            document.write('Mậu ');
            break;
        case 9:
            document.write('Kỷ ');
            break;
    }
    let c = a % 12;
    switch (c) {
        case 0:
            document.write('Thân');
            break;
        case 1:
            document.write('Dậu');
            break;
        case 2:
            document.write('Tuất');
            break;
        case 3:
            document.write('Hợi');
            break;
        case 4:
            document.write('Thìn');
            break;
        case 5:
            document.write('Sửu');
            break;
        case 6:
            document.write('Dần');
            break;
        case 7:
            document.write('Mão');
            break;
        case 8:
            document.write('Thìn');
            break;
        case 9:
            document.write('Tỵ');
            break;
        case 10:
            document.write('Ngọ');
            break;
        case 11:
            document.write('Mùi');
            break;
    }
}