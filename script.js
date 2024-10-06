// Orbital animation for planets
const planets = document.querySelectorAll('.planet');
const sun = document.getElementById('sun');

// Function to animate the planets in a circular motion
function animateOrbits() {
    planets.forEach((planet, index) => {
        let angle = 0;
        const radius = 100 + (index * 50); // Increment radius for each planet
        setInterval(() => {
            angle += 0.05; // Speed of rotation
            const x = radius * Math.cos(angle) + 250; // Centered around the sun
            const y = radius * Math.sin(angle) + 250;
            planet.style.left = `${x}px`;
            planet.style.top = `${y}px`;
        }, 50); // Speed of the animation
    });
}

// Add some NEOs near the Earth
const neos = document.getElementById('neos');

function addNEOs() {
    let angle = 0;
    const radius = 200; // NEO orbit radius
    setInterval(() => {
        angle += 0.1;
        const x = radius * Math.cos(angle) + 250;
        const y = radius * Math.sin(angle) + 250;
        neos.style.left = `${x}px`;
        neos.style.top = `${y}px`;
    }, 100);
}

// Initialize animations
animateOrbits();
addNEOs();
