let headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let header1 = ["H", "e", "l"];
let header2 = ["H", "i", ",", "I", "'", "m", "&nbsp", "A", "n", "d", "r", "e", "j"];
let text = "Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she."

let picture = document.getElementById("profilePicture")
picture.style.opacity = 0

writeMessage1()

function writeMessage1() {
    let finisCount = 0
    for (let i = 1; i <= header1.length; i++) {
        setTimeout(function () {
            document.getElementById("aboutHeader" + [i]).innerHTML += header1[i - 1]
            finisCount++
            if (finisCount === header1.length) {
                removeMessage(header1.length)
            }
        }, quad(i + 11));

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
            if (finisCount === header1.length) {
                writeMessage2()
            }
        }, reverseLength * 100);
    }
}

function writeMessage2() {
    let finisCount = 0
    for (let i = 1; i <= header2.length + 2; i++) {
        setTimeout(function () {
            if(i <= header2.length) {
                document.getElementById("aboutHeader" + [i]).innerHTML += header2[i - 1]
            }
            finisCount++
            if (finisCount === header2.length + 2) {
                animatePicture()
                writeText()
            }
        }, quad(i + 5));
    }
}

function animatePicture() {
    for (let i = 0; i <= text.length; i++) {
        setTimeout(function () {
            picture.style.opacity = i / text.length
        }, i * 5);
    }

}

function writeText(){
    for (let i = 1; i <=text.length; i++) {
        setTimeout(function (){
            document.getElementById("text").innerHTML += text[i-1]
        }, i*5)
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2.5)
}

function quad2(timeFraction) {
    return Math.pow(timeFraction, 3)
}
