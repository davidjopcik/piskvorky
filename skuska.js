
const tlacitko = document.getElementById("tlacitko")

tlacitko.addEventListener("click", function(e){
    alert("test alert")
} )

function mackanieTlacitka(e) {
    if (e.key === "ArrowRight"){
        console.log("Sipka do prava");
    } else if (e.key === "ArrowLeft"){
        console.log("Sipka do lava");
    } else {
        console.log("Nevim co si zmacknul");
    }
}

document.addEventListener("keydown", mackanieTlacitka)
