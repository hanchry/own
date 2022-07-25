let header1 = ["C", "o", "n", "t", "a", "c", "t", "&nbsp", "m", "e"];


let tiping = new Tiping();
let navigation = new Navigation();
let animation = new Animations();

async function animate(){
    await tiping.writeHeader("aboutHeader", header1, 3);
    setTimeout(() => {
        animation.animateDropIn("text",false)
        setTimeout(() => {
            animation.animateDropIn("email",false)
            setTimeout(() => {
                animation.animateDropIn("image",false)
            },200)
        },200)
    },300)

}


function initMap(){
    var coordinates = {
        lat: 55.86,
        lng: 9.84
    };
    var map = tt.map({
        key: "Rkc9Gi1KSDjUcDhHIPTLbew39ZpKUl9s",
        container: "map",
        center: coordinates,
        zoom: 5,
        style: "./public/custom_map.json"
    });
    map.on('load', () => {
        new tt.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    })
}


initMap()
animate();


