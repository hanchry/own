export default class Navigation {
    constructor() {
        document.getElementById("menuBar").addEventListener("click", () => {
            this.openMenu()
        })
        document.getElementById("menuCross").addEventListener("click", () => {
            this.closeMenu()
        })
    }

    openMenu() {
        document.getElementById("content").style.display = "none"
        document.getElementById("menuBar").style.visibility = "hidden"
        document.getElementById("menu").style.display = "block"
        document.getElementById("menuCross").style.visibility = "visible"
    }
    closeMenu() {
        document.getElementById("menu").style.display = "none"
        document.getElementById("menuCross").style.visibility = "hidden"
        document.getElementById("content").style.display = "block"
        document.getElementById("menuBar").style.visibility = "visible"
    }
}