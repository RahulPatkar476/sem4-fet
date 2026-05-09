function showLayer(id) {

    // Get all layers
    let layers = document.getElementsByClassName("layer");

    // Remove active class from all layers
    for (let i = 0; i < layers.length; i++) {
        layers[i].classList.remove("active");
    }

    // Add active class to selected layer
    document.getElementById(id).classList.add("active");
}
