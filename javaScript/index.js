let header1 = ["H", "e", "l"];
let header2 = ["H", "i", ",", "I", "'", "m", "&nbsp", "A", "n", "d", "r", "e", "j"];


let tiping = new Tiping();
let navigation = new Navigation();
let animation = new Animations();

async function animate(){
   await tiping.writeHeader("aboutHeader", header1, 5);
   await tiping.deleteHeader("aboutHeader",header1, 4);
   await tiping.writeHeader("aboutHeader", header2, 4);
   setTimeout(() => {
       animation.animateDropIn("text",false)
       setTimeout(() => {
           animation.animateDropIn("profilePicture",true)
       },200)
   },500)

}

animate();


