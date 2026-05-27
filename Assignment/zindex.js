function showLayer(id) {

    let layers = document.getElementsByClassName("layer");

    for (let i = 0; i < layers.length; i++) {
        layers[i].classList.remove("active");
    }

    document.getElementById(id).classList.add("active");
}
