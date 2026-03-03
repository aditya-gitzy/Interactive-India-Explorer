const statesData = {
    "IN-AN": {
        capital: "Port Blair",
        language: "English, Hindi, Bengali",
        food: "Seafood, Fish Curry, Coconut-based dishes",
        places: "Radhanagar Beach, Cellular Jail, Ross Island",
        culture: "Indigenous Tribal Culture, Sea Festivals"
    },
    "IN-AP": {
        capital: "Amaravati",
        language: "Telugu",
        food: "Pulihora, Gongura Pachadi, Hyderabadi Biryani",
        places: "Tirupati, Araku Valley, Belum Caves",
        culture: "Kuchipudi Dance, Sankranti Festival"
    },
    "IN-AR": {
        capital: "Itanagar",
        language: "English, Nishi, Monpa",
        food: "Thukpa, Apong (Rice Beer), Bamboo Shoot",
        places: "Tawang Monastery, Ziro Valley, Namdapha",
        culture: "Losar Festival, Monpa Tribe Traditions"
    },
    "IN-AS": {
        capital: "Dispur",
        language: "Assamese",
        food: "Masor Tenga, Pitha, Assam Tea",
        places: "Kaziranga National Park, Majuli Island",
        culture: "Bihu Dance, Satriya, Ambubachi Mela"
    },
    "IN-BR": {
        capital: "Patna",
        language: "Hindi, Bhojpuri, Maithili",
        food: "Litti Chokha, Sattu, Khaja",
        places: "Bodh Gaya, Nalanda University, Mahabodhi Temple",
        culture: "Chhath Puja, Madhubani Art"
    },
    "IN-CH": {
        capital: "Chandigarh",
        language: "Punjabi, Hindi",
        food: "Chole Bhature, Butter Chicken",
        places: "Rock Garden, Sukhna Lake, Rose Garden",
        culture: "Baisakhi, Modern Architecture Heritage"
    },
    "IN-CT": {
        capital: "Raipur",
        language: "Chhattisgarhi, Hindi",
        food: "Muthia, Chila, Fara",
        places: "Chitrakote Falls, Bastar, Tirathgarh",
        culture: "Bastar Dussehra, Panthi Dance, Tribal Arts"
    },
    "IN-DD": {
        capital: "Daman",
        language: "Gujarati, Hindi, Portuguese",
        food: "Seafood, Rotla, Jetty Roll",
        places: "Diu Fort, Jampore Beach, St. Paul's Church",
        culture: "Portuguese Heritage, Nariyal Purnima"
    },
    "IN-DL": {
        capital: "New Delhi",
        language: "Hindi, Punjabi, Urdu",
        food: "Chole Bhature, Butter Chicken, Chaat",
        places: "Red Fort, India Gate, Qutub Minar",
        culture: "Republic Day Parade, Diwali, Historic Architecture"
    },
    "IN-DN": {
        capital: "Silvassa",
        language: "Gujarati, Hindi",
        food: "Ubadiyu, Khaman",
        places: "Dudhni Lake, Vanganga Lake Garden",
        culture: "Tarpa Dance, Tribal Festivals"
    },
    "IN-GA": {
        capital: "Panaji",
        language: "Konkani",
        food: "Fish Curry Rice, Bebinca, Vindaloo",
        places: "Baga Beach, Dudhsagar Falls, Basilica of Bom Jesus",
        culture: "Goa Carnival, Shigmo, Portuguese Influence"
    },
    "IN-GJ": {
        capital: "Gandhinagar",
        language: "Gujarati",
        food: "Dhokla, Thepla, Fafda",
        places: "Statue of Unity, Rann of Kutch, Gir National Park",
        culture: "Navratri, Garba, Kite Festival (Uttarayan)"
    },
    "IN-HP": {
        capital: "Shimla",
        language: "Hindi, Pahari",
        food: "Madra, Dham, Babru",
        places: "Manali, Rohtang Pass, Spiti Valley",
        culture: "Kullu Dussehra, Nati Dance"
    },
    "IN-HR": {
        capital: "Chandigarh",
        language: "Hindi, Haryanvi",
        food: "Bajre Ki Roti, Kadhi Pakora, Kachri",
        places: "Kurukshetra, Sultanpur Bird Sanctuary",
        culture: "Surajkund Crafts Mela, Phag Dance"
    },
    "IN-JH": {
        capital: "Ranchi",
        language: "Hindi, Santhali",
        food: "Dhuska, Rugra, Handia",
        places: "Hundru Falls, Betla National Park, Deoghar",
        culture: "Sarhul, Karma Festival, Tribal Woodwork"
    },
    "IN-JK": {
        capital: "Srinagar (Summer), Jammu (Winter)",
        language: "Kashmiri, Dogri, Urdu",
        food: "Rogan Josh, Wazwan, Kahwa",
        places: "Dal Lake, Gulmarg, Vaishno Devi",
        culture: "Shikara Culture, Rouf Dance"
    },
    "IN-KA": {
        capital: "Bengaluru",
        language: "Kannada",
        food: "Bisi Bele Bath, Neer Dosa, Mysore Pak",
        places: "Mysore Palace, Hampi, Coorg",
        culture: "Yakshagana, Dasara Festival"
    },
    "IN-KL": {
        capital: "Thiruvananthapuram",
        language: "Malayalam",
        food: "Appam, Kerala Fish Curry, Puttu",
        places: "Munnar, Alleppey Backwaters, Wayanad",
        culture: "Onam, Kathakali, Snake Boat Race"
    },
    "IN-LD": {
        capital: "Kavaratti",
        language: "Malayalam, Mahl",
        food: "Tuna Curry, Coconut Rice",
        places: "Agatti Island, Minicoy, Bangaram Atoll",
        culture: "Lava Dance, Marine Festivals"
    },
    "IN-MH": {
        capital: "Mumbai",
        language: "Marathi",
        food: "Vada Pav, Misal Pav, Puran Poli",
        places: "Gateway of India, Ajanta Caves, Mahabaleshwar",
        culture: "Ganesh Chaturthi, Lavani Dance"
    },
    "IN-ML": {
        capital: "Shillong",
        language: "English, Khasi, Garo",
        food: "Jadoh, Pumaloi, Bamboo Shoots",
        places: "Cherrapunji, Living Root Bridges, Dawki",
        culture: "Wangala Festival, Nongkrem Dance"
    },
    "IN-MN": {
        capital: "Imphal",
        language: "Manipuri (Meitei)",
        food: "Eromba, Chamthong, Kangshoi",
        places: "Loktak Lake, Kangla Fort, Dzukou Valley",
        culture: "Yaoshang, Ras Lila (Manipuri Dance)"
    },
    "IN-MP": {
        capital: "Bhopal",
        language: "Hindi",
        food: "Poha, Jalebi, Bhutte Ka Kees",
        places: "Khajuraho, Bandhavgarh, Sanchi Stupa",
        culture: "Khajuraho Dance Festival, Bhagoria"
    },
    "IN-MZ": {
        capital: "Aizawl",
        language: "Mizo, English",
        food: "Bai, Vawksa Rep, Bamboo Shoot",
        places: "Phawngpui, Vantawng Falls, Reiek",
        culture: "Chapchar Kut, Cheraw (Bamboo Dance)"
    },
    "IN-NL": {
        capital: "Kohima",
        language: "English, Nagamese",
        food: "Smoked Pork, Bamboo Shoot, Akhuni",
        places: "Hornbill Festival, Dzukou Valley, Kohima War Cemetery",
        culture: "Hornbill Festival, Rich Tribal Heritage"
    },
    "IN-OR": {
        capital: "Bhubaneswar",
        language: "Odia",
        food: "Dalma, Rasagola, Pakhala Bhata",
        places: "Konark Sun Temple, Puri Jagannath Temple, Chilika Lake",
        culture: "Rath Yatra, Odissi Dance"
    },
    "IN-PB": {
        capital: "Chandigarh",
        language: "Punjabi",
        food: "Makki di Roti, Sarson ka Saag, Lassi",
        places: "Golden Temple, Wagah Border, Jallianwala Bagh",
        culture: "Baisakhi, Bhangra and Giddha"
    },
    "IN-PY": {
        capital: "Puducherry",
        language: "Tamil, French",
        food: "Quiche, Croissants, Seafood Curry",
        places: "Auroville, Promenade Beach, Paradise Beach",
        culture: "French Colonial Heritage, Bastille Day"
    },
    "IN-RJ": {
        capital: "Jaipur",
        language: "Hindi, Rajasthani",
        food: "Dal Baati Churma, Laal Maas, Ghevar",
        places: "Hawa Mahal, Thar Desert, Udaipur Forts",
        culture: "Ghoomar Dance, Pushkar Camel Fair"
    },
    "IN-SK": {
        capital: "Gangtok",
        language: "Nepali, Sikkimese, Lepcha",
        food: "Momo, Thukpa, Phagshapa",
        places: "Nathu La Pass, Rumtek Monastery, Tsomgo Lake",
        culture: "Losar, Saga Dawa, Mask Dance"
    },
    "IN-TG": {
        capital: "Hyderabad",
        language: "Telugu, Urdu",
        food: "Hyderabadi Biryani, Haleem, Sakinalu",
        places: "Charminar, Golconda Fort, Ramoji Film City",
        culture: "Bathukamma, Bonalu"
    },
    "IN-TN": {
        capital: "Chennai",
        language: "Tamil",
        food: "Idli, Dosa, Chettinad Chicken",
        places: "Meenakshi Temple, Ooty, Mahabalipuram",
        culture: "Pongal, Bharatanatyam"
    },
    "IN-TR": {
        capital: "Agartala",
        language: "Bengali, Kokborok",
        food: "Mui Borok, Chakhwi, Mosdeng",
        places: "Ujjayanta Palace, Neermahal, Unakoti",
        culture: "Kharchi Puja, Hojagiri Dance"
    },
    "IN-UP": {
        capital: "Lucknow",
        language: "Hindi, Urdu",
        food: "Tunday Kababi, Chaat, Peda",
        places: "Taj Mahal, Varanasi Ghats, Agra Fort",
        culture: "Kumbh Mela, Kathak Dance"
    },
    "IN-UT": {
        capital: "Dehradun (Winter), Gairsain (Summer)",
        language: "Hindi, Garhwali, Kumaoni",
        food: "Kafuli, Aloo ke Gutke, Bal Mithai",
        places: "Rishikesh, Kedarnath, Nainital",
        culture: "Kumbh Mela, Ganga Aarti, Garhwali Folk Dance"
    },
    "IN-WB": {
        capital: "Kolkata",
        language: "Bengali",
        food: "Rosogolla, Macher Jhol, Sandesh",
        places: "Victoria Memorial, Sundarbans, Darjeeling",
        culture: "Durga Puja, Rabindra Sangeet"
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
                // Fallback just in case an ID slips through
                infoPanel.innerHTML = `
                    <h2>${stateName}</h2>
                    <p>Details coming soon!</p>
                `;
            }
        });
    });
});
