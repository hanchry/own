
let header1 = ["S", "k", "i", "l", "l", "s"];


let tiping = new Tiping();
let navigation = new Navigation();
let animation = new Animations();

async function animate(){
    await tiping.writeHeader("aboutHeader", header1, 5);
    setTimeout(() => {
        animation.animateDropIn("text",false)
        setTimeout(() => {
            animation.animateDropIn("cubeImage",true)
        },200)
    },500)

}

animate();