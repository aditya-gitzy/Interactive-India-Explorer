const statesData = {
    "IN-MH": {
        capital: "Mumbai",
        language: "Marathi",
        food: "Vada Pav, Misal Pav, Puran Poli",
        places: "Gateway of India, Ajanta Caves, Mahabaleshwar",
        culture: "Ganesh Chaturthi, Lavani Dance"
    },
    "IN-GJ": {
        capital: "Gandhinagar",
        language: "Gujarati",
        food: "Dhokla, Thepla, Fafda",
        places: "Statue of Unity, Rann of Kutch, Gir National Park",
        culture: "Navratri, Garba, Kite Festival"
    },
    "IN-RJ": {
        capital: "Jaipur",
        language: "Hindi, Rajasthani",
        food: "Dal Baati Churma, Laal Maas",
        places: "Hawa Mahal, Thar Desert, Udaipur Forts",
        culture: "Ghoomar Dance, Pushkar Camel Fair"
    },
    "IN-KA": {
        capital: "Bengaluru",
        language: "Kannada",
        food: "Bisi Bele Bath, Neer Dosa",
        places: "Mysore Palace, Hampi, Coorg",
        culture: "Yakshagana, Dasara Festival"
    },
    "IN-UP": {
        capital: "Lucknow",
        language: "Hindi, Urdu",
        food: "Tunday Kababi, Chaat, Peda",
        places: "Taj Mahal, Varanasi Ghats, Agra Fort",
        culture: "Kumbh Mela, Kathak Dance"
    },
    "IN-TN": {
        capital: "Chennai",
        language: "Tamil",
        food: "Idli, Dosa, Chettinad Chicken",
        places: "Meenakshi Temple, Ooty, Mahabalipuram",
        culture: "Pongal, Bharatanatyam"
    },
    "IN-WB": {
        capital: "Kolkata",
        language: "Bengali",
        food: "Rosogolla, Macher Jhol",
        places: "Victoria Memorial, Sundarbans, Darjeeling",
        culture: "Durga Puja, Rabindra Sangeet"
    },
    "IN-DL": {
        capital: "New Delhi",
        language: "Hindi, Punjabi",
        food: "Chole Bhature, Butter Chicken",
        places: "Red Fort, India Gate, Qutub Minar",
        culture: "Republic Day Parade, Diwali"
    },
    "IN-KL": {
        capital: "Thiruvananthapuram",
        language: "Malayalam",
        food: "Appam, Kerala Fish Curry",
        places: "Munnar, Alleppey Backwaters",
        culture: "Onam, Kathakali, Boat Race"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Select all the state paths using the 'land' class from your SVG
    const paths = document.querySelectorAll('path.land');
    const infoPanel = document.getElementById('info-panel');

    paths.forEach(path => {
        path.addEventListener('click', function() {
            
            // Remove the active color from all states
            paths.forEach(p => p.classList.remove('active-state'));
            
            // Highlight the clicked state
            this.classList.add('active-state');

            // Grab the ID and Title directly from the SVG code you pasted
            const stateId = this.getAttribute('id');
            const stateName = this.getAttribute('title'); 
            const data = statesData[stateId];

            if (data) {
                // Inject the data into the HTML
                infoPanel.innerHTML = `
                    <h2>${stateName}</h2>
                    <div class="info-item"><strong>🏛️ Capital:</strong> ${data.capital}</div>
                    <div class="info-item"><strong>🗣️ Language:</strong> ${data.language}</div>
                    <div class="info-item"><strong>🍛 Famous Food:</strong> ${data.food}</div>
                    <div class="info-item"><strong>🗺️ Top Places:</strong> ${data.places}</div>
                    <div class="info-item"><strong>🎉 Culture:</strong> ${data.culture}</div>
                `;
            } else {
                // If they click a state we haven't added to the dictionary yet
                infoPanel.innerHTML = `
                    <h2>${stateName}</h2>
                    <p>Looks like data for ${stateName} hasn't been added to the database yet. You can add it in the script.js file!</p>
                `;
            }
        });
    });
});