const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const btnCalculation = document.querySelector('.btn-calculator');
const resultBmi = document.querySelector('.result-bmi');


const result = (bmi, msg, color) => {
    resultBmi.style.display = "block";
    resultBmi.style.backgroundColor = color;
    return resultBmi.innerHTML = `ผลลัพธ์ = ${bmi} ${msg}`
}

btnCalculation.addEventListener('click', (e) => {
    e.preventDefault();
    let meters = height.value / 100;
    let bmi = (weight.value / (meters * meters)).toFixed(2);
    if ((weight.value == 0) && (height.value == 0)) {
        resultBmi.style.display = 'block';
        resultBmi.style.backgroundColor = " #e6b800";
        return resultBmi.innerHTML = "โปรดกรอกข้อมูล";
    }

    if (bmi < 18.50) {
        result(bmi, "ผอมเกินไป","#4d4dff");
    } else if (bmi < 23) {
        result(bmi, "ปกติ(สุขภาพดี)","#00cc00");
    } else if (bmi < 25) {
        result(bmi, "ท้วม/โรคอ้วนระดับ 1","#cc66ff");
    } else if (bmi < 30) {
        result(bmi, "อ้วน/โรคอ้วนระดับ 2","#ff8c1a");
    } else if (bmi > -30) {
        result(bmi, "อ้วนมาก/โรคอ้วนระดับ 3","#ff1a1a");
    }

})
