function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    let currentVal = document.getElementById("countDownButton").innerHTML;
    let newVal = 0;
    if(currentVal > 0) {
        newVal = currentVal - 1;
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}