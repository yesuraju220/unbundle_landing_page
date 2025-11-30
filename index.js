let doriIncrement = document.getElementById("doriIncrement");
let doriUlContainer = document.getElementById("doriUlContainer");
let imageEl = document.getElementById("imageEl");

let isOpen = false; // To track open/close state

doriIncrement.addEventListener("click", function() {
    if (!isOpen) {
        // Show list items
        doriUlContainer.innerHTML = `
            <li>Reducing the risk of cross-contamination</li>
            <li>Rapidly analyse diagnostic images (like X-ray / 3D scans)</li>
            <li>Identify problems not visible to human eye</li>
            <li>Quicker diagnoses & timely treatment</li>
        `;

        // Change Image
        imageEl.src = "./images/dori_open.jpg"; // put your new image path

        // Change + to -
        doriIncrement.textContent = "−";

        isOpen = true;
    } else {
        // Hide list items
        doriUlContainer.innerHTML = "";

        // Reset Image
        imageEl.src = "./images/dori_default.jpg"; // original image path

        // Change − back to +
        doriIncrement.textContent = "+";

        isOpen = false;
    }
});

