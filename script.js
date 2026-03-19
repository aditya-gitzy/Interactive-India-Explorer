document.addEventListener("DOMContentLoaded", () => {
    const paths = document.querySelectorAll('path.land');
    const infoPanel = document.getElementById('info-panel');
    const themeToggle = document.getElementById('theme-toggle');

    // --- 1. DARK MODE & LOCAL STORAGE ---
    if (themeToggle) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerText = '☀️ Light Mode';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerText = '☀️ Light Mode';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerText = '🌙 Dark Mode';
            }
        });
    }

    // --- 2. ACCESSIBILITY (WCAG) INJECTION ---
    // Automatically makes every state keyboard navigable and screen-reader friendly
    paths.forEach(path => {
        const stateName = path.getAttribute('title');
        path.setAttribute('tabindex', '0'); 
        path.setAttribute('role', 'button');
        path.setAttribute('aria-label', `View details for ${stateName}`);
    });

    // --- 3. CORE MAP LOGIC ---
    function handleStateSelection(element) {
        // Clear previous active states
        paths.forEach(p => p.classList.remove('active-state'));
        element.classList.add('active-state');

        const stateId = element.getAttribute('id');
        const stateName = element.getAttribute('title'); 
        const data = statesData[stateId];

        if (infoPanel) {
            // Trigger CSS fade-in animation
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
                    <a href="details.html?id=${stateId}" class="primary-btn">Explore Deep Dive ➔</a>
                `;
            } else {
                infoPanel.innerHTML = `<h2>${stateName}</h2><p style="color: var(--text-muted)">Details coming soon.</p>`;
            }
        }
    }

    // Support both Mouse Click and Keyboard 'Enter' for accessibility
    if (paths.length > 0) {
        paths.forEach(path => {
            path.addEventListener('click', function() {
                handleStateSelection(this);
            });

            path.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStateSelection(this);
                }
            });
        });
    }
});
