const planetData = {
    mercury: {
        speed: '47.87 km/s',
        distance: '57.91 millones km',
        size: '0.38 veces el tamaño del Sol',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/e/e3/Mercury_Messenger_image.jpg'
        ]
    },
    venus: {
        speed: '35.02 km/s',
        distance: '108.2 millones km',
        size: '0.95 veces el tamaño del Sol',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
        ]
    },
    earth: {
        speed: '29.78 km/s',
        distance: '149.6 millones km',
        size: '1.00 veces el tamaño del Sol',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg'
        ]
    },
    mars: {
        speed: '24.077 km/s',
        distance: '227.9 millones km',
        size: '0.53 veces el tamaño del Sol',
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_by_Hubble.jpg'
        ]
    }
};

let selectedPlanet = 'earth'; // Por defecto, Tierra

// Función para seleccionar el planeta
function selectPlanet(planet) {
    selectedPlanet = planet;
    document.getElementById('planet-info').textContent = `Planeta seleccionado: ${planet.charAt(0).toUpperCase() + planet.slice(1)}`;
}

// Función para mostrar la información del planeta
function displayInfo(infoType) {
    const info = planetData[selectedPlanet][infoType];
    const infoElement = document.getElementById('planet-info');

    if (infoType === 'images') {
        infoElement.innerHTML = info.map(img => `<img src="${img}" alt="${selectedPlanet} image">`).join('');
    } else {
        infoElement.textContent = `${infoType.charAt(0).toUpperCase() + infoType.slice(1)}: ${info}`;
    }
}
