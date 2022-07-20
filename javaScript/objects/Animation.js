export default class Animation {

    animateDropIn(elementId, isImage) {
        if (!isImage) {
            if(window.screen.width > 1024) {
                document.getElementById(elementId).style.animation = "dropInMedium 1s ease forwards"
                document.getElementById(elementId).style.visibility = "visible"
            }
            else {
                document.getElementById(elementId).style.animation = "dropInSmall 1s ease forwards"
                document.getElementById(elementId).style.visibility = "visible"
            }
        }
        else {
            if(window.screen.width > 1024) {
                document.getElementById(elementId).style.animation = "dropInMedium 1s ease forwards"
                document.getElementById(elementId).style.opacity = "1"
            }
            else {
                document.getElementById(elementId).style.animation = "dropInSmall 1s ease forwards"
                document.getElementById(elementId).style.opacity = "1"
            }
        }
    }
}