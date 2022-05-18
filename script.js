const binaryInput = document.querySelector("input");

window.onload = function () {
    binaryInput.value = "";
};

function checkPattern(regex, value) {
    const pattern = regex;
    return pattern.test(value);
}
