function handleCalculation(type) {

    let radius = parseFloat(
        document.getElementById("radiusInput").value
    );

    while (isNaN(radius) || radius <= 0) {

        radius = parseFloat(
            prompt("Enter a valid positive radius:")
        );

    }

    let output = document.getElementById("output");

    if (type === "area") {

        let area = Math.PI * radius * radius;

        output.innerHTML =
            "Area = " + area.toFixed(2);

    }

    else {

        let circumference = 2 * Math.PI * radius;

        output.innerHTML =
            "Circumference = " +
            circumference.toFixed(2);

    }
}
