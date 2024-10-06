const planetData = {
    mercury: {
        speed: '47.87 km/s',
        distance: '57.91 millones km',
        size: '0.38 veces el tamaño del Sol',
        images: ['https://example.com/mercury1.jpg', 'https://example.com/mercury2.jpg']
    },
    venus: {
        speed: '35.02 km/s',
        distance: '108.2 millones km',
        size: '0.95 veces el tamaño del Sol',
        images: ['https://example.com/venus1.jpg', 'https://example.com/venus2.jpg']
    },
    earth: {
        speed: '29.78 km/s',
        distance: '149.6 millones km',
        size: '1.00 veces el tamaño del Sol',
        images: ['https://example.com/earth1.jpg', 'https://example.com/earth2.jpg']
    },
    mars: {
        speed: '24.077 km/s',
        distance: '227.9 millones km',
        size: '0.53 veces el tamaño del Sol',
        images: ['https://example.com/mars1.jpg', 'https://example.com/mars2.jpg']
    }
};

let selectedPlanet = 'earth'; // Por defecto, Tierra

// Función para seleccionar el planeta
function selectPlanet(planet) {
    selectedPlanet = planet;
    document.getElementById('planet-info').textContent = `Planeta seleccionado: ${planet}`;
}

// Función para mostrar la información del planeta
function displayInfo(infoType) {
    const info = planetData[selectedPlanet][infoType];
    const infoElement = document.getElementById('planet-info');

    if (infoType === 'images') {
        infoElement.innerHTML = info.map(img => `<img src="${img}" alt="${selectedPlanet} image" width="200">`).join('');
    } else {
        infoElement.textContent = `${infoType.charAt(0).toUpperCase() + infoType.slice(1)}: ${info}`;
    }
}
