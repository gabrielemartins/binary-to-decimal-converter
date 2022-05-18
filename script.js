const binaryInput = document.querySelector("input");
const result = document.querySelector(".result-text");
const error = document.querySelector(".error");

window.onload = function () {
    binaryInput.value = "";
};

function checkPattern(regex, value) {
    const pattern = regex;
    return pattern.test(value);
}

function binaryToDecimal() {
    let binaryNumber = binaryInput.value;
    const checkedPattern = checkPattern(/^[0-1]+$/, binaryNumber);

    if (checkedPattern || binaryNumber === "") {
        let binaryNumberSize = binaryInput.value.length - 1;
        let power = 0;
        let total = 0;
        for (let index = binaryNumberSize; index >= 0; index--) {
            let binaryNumberPart = binaryNumber.charAt(index);
            total += Math.pow(2, power) * binaryNumberPart;
            power++;
        }
        result.innerHTML = "result: " + total;
        error.innerHTML = "";
    } else {
        result.innerHTML = "";
        error.innerHTML = "invalid input, try type only 0 and 1";
    }
}
