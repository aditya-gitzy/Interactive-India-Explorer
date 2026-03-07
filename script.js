document.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll('path.land');
    const infoPanel = document.getElementById('info-panel');
    const themeToggle = document.getElementById('theme-toggle');

    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerText = '☀️ Light Mode';
        themeToggle.style.backgroundColor = '#f1f1f1';
        themeToggle.style.color = '#333';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerText = '☀️ Light Mode';
            themeToggle.style.backgroundColor = '#f1f1f1';
            themeToggle.style.color = '#333';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerText = '🌙 Dark Mode';
            themeToggle.style.backgroundColor = '#000080';
            themeToggle.style.color = 'white';
        }
    });

   
    paths.forEach(path => {
        path.addEventListener('click', function() {
            paths.forEach(p => p.classList.remove('active-state'));
            this.classList.add('active-state');

            const stateId = this.getAttribute('id');
            const stateName = this.getAttribute('title'); 
            const data = statesData[stateId];

         
            infoPanel.classList.remove('fade-in');
            void infoPanel.offsetWidth; 
            infoPanel.classList.add('fade-in');

            if (data) {
                infoPanel.innerHTML = `
                    <h2>${stateName}</h2>
                    <div class="info-item"><strong>🏛️ Capital:</strong> ${data.capital}</div>
                    <div class="info-item"><strong>🗣️ Language:</strong> ${data.language}</div>
                    <div class="info-item"><strong>🍛 Famous Food:</strong> ${data.food}</div>
                    <div class="info-item"><strong>🗺️ Top Places:</strong> ${data.places}</div>
                    <div class="info-item"><strong>🎉 Culture:</strong> ${data.culture}</div>
                    <a href="details.html?id=${stateId}" target="_blank" class="details-btn">Explore Deep Dive ➔</a>
                `;
            } else {
                infoPanel.innerHTML = `
                    <h2>${stateName}</h2>
                    <p>Details coming soon! Add data to data.js</p>
                `;
            }
        });
    });
});
