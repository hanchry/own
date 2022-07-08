let headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let message1 = ["H", "e", "l" ];
let message2 = ["H", "i", ",", "I", "'", "m", "&nbsp", "A", "n", "d", "r", "e", "j"];


writeMessage1()

function writeMessage1() {
    let finisCount = 0
    for (let i = 1; i <= message1.length; i++) {
        setTimeout(function () {
            document.getElementById("aboutHeader" + [i]).innerHTML += message1[i - 1]
            finisCount++
            if (finisCount === message1.length) {
                removeMessage(message1.length)
            }
        }, quad(i + 8));
    }
}

function removeMessage(length) {
    let reverseLength = 0
    let finisCount = 0
    for (let i = length; i > 0; i--) {
        reverseLength++
        setTimeout(function () {
            document.getElementById("aboutHeader" + [i]).innerHTML = ""
            finisCount++
            if (finisCount === message1.length) {
                writeMessage2()
            }
        }, reverseLength * 100);
    }
}

function writeMessage2() {
    for (let i = 1; i <= message2.length; i++) {
        setTimeout(function () {
            document.getElementById("aboutHeader" + [i]).innerHTML += message2[i-1]
        }, quad(i + 1));
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2.5)
}
