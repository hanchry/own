let headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let header1 = ["H", "e", "l"];
let header2 = ["H", "i", ",", "I", "'", "m", "&nbsp", "A", "n", "d", "r", "e", "j"];
let text = "Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she."

let headerDelay = 100
let textDelay = 5
let pictureDelay = 5


function getLetter(message, i, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message[i]);
        }, delay);
    });
}

function getOpacity(i, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(i);
        }, delay);
    });
}

async function animatePicture() {
    if(window.screen.width > 1024) {
        document.getElementById('profilePicture').style.animation = "dropInMedium 1s ease forwards"
        document.getElementById("profilePicture").style.opacity = "1"
    }
    else {
        document.getElementById('profilePicture').style.animation = "dropInSmall 1s ease forwards"
        document.getElementById("profilePicture").style.opacity = "1"
    }
}

async function writeHeader1() {
    for (let i = 1; i < header1.length + 1; i++) {
        const x = await getLetter(header1, i - 1, Math.pow(i + 5, 2));
        document.getElementById("aboutHeader" + [i]).innerHTML += x
    }
}

async function writeHeader2() {
    for (let i = 1; i < header2.length + 1; i++) {
        const x = await getLetter(header2, i - 1, Math.pow(i + 4, 2));
        document.getElementById("aboutHeader" + [i]).innerHTML += x
    }
}

async function deleteHeader1() {
    for (let i = header1.length; i > 0; i--) {
        const x = await getLetter(header1, i - 1, headerDelay);
        document.getElementById("aboutHeader" + [i]).innerHTML = ""
    }
}

async function writeText() {
    if(window.screen.width > 1024) {
        document.getElementById('text').style.animation = "dropInMedium 1s ease forwards"
        document.getElementById("text").style.visibility = "visible"
    }
    else {
        document.getElementById('text').style.animation = "dropInSmall 1s ease forwards"
        document.getElementById("text").style.visibility = "visible"
    }
}


async function animation() {
    await writeHeader1()
    await deleteHeader1()
    await writeHeader2()
    setTimeout(() => {
        writeText()
        setTimeout(() => {
            animatePicture()
        }, 200)
    }, 500)

}



async function openMenu() {

    document.getElementById("content").style.display = "none"
    document.getElementById("menuBar").style.visibility = "hidden"
    document.getElementById("menu").style.display = "block"
    document.getElementById("menuCross").style.visibility = "visible"
}

async function closeMenu() {

    document.getElementById("menu").style.display = "none"
    document.getElementById("menuCross").style.visibility = "hidden"
    document.getElementById("content").style.display = "block"
    document.getElementById("menuBar").style.visibility = "visible"

}

function buttons() {
    document.getElementById("menuBar").addEventListener("click", () => {
        openMenu()
    })
    document.getElementById("menuCross").addEventListener("click", () => {
        closeMenu()
    })
}

buttons()
animation()