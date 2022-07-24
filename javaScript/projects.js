let header1 = ["P","r","o", "j","e","c","t","s"];


let tiping = new Tiping();
let navigation = new Navigation();
let animation = new Animations();

async function animate(){
    await tiping.writeHeader("aboutHeader", header1, 4);
    setTimeout(() => {
        animation.animateDropIn("skillsText",false)
        setTimeout(() => {
            animation.animateDropIn("cubeImage",true)
        },200)
    },300)

}

animate();