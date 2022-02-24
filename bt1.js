function tinh() {
    let w = document.getElementById("st1").value;
    let h = document.getElementById("st2").value;
    bmi = w / (h * h);
    if (bmi < 18.5) {
        document.write("UnderWeight");
    } else if (bmi < 25) {
        document.write("Normal");
    } else if (bmi < 30) {
        document.write("OverWeight");
    } else
        document.write("Obese");
}