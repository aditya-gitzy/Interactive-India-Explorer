# 🇮🇳 Interactive India Explorer

I built this project to make exploring India's diverse states and union territories actually engaging. Instead of reading through a boring list, you can click around an interactive map to instantly discover the culture, food, language, and top tourist spots of any region in the country. 

**[Check out the live site here!](https://aditya-gitzy.github.io/Interactive-India-Explorer/)**

### What it does
I wanted this to feel like a modern web app, so I baked in a few key features:
* **Interactive SVG Map:** The core of the site is a custom SVG map where every state is clickable and responds to hover states with smooth CSS transitions.
* **Deep Dive Pages:** Clicking on a state's "Explore Deep Dive" button takes you to a dedicated page detailing its history, traditions, specialties, and traditional clothing. 
* **Persistent Dark Mode:** I added a dark/light mode toggle that uses CSS variables to flip the theme. It also uses `localStorage` to remember your preference if you open a new tab or come back later.
* **Keyboard Accessible:** I wrote a script to automatically inject ARIA labels and tab indexes into the SVG paths, meaning the entire map can be navigated using just the `Tab` and `Enter` keys. 

### How it was built
Right now, this is a pure, vanilla frontend project. It's built entirely with **HTML5, CSS3, and JavaScript**. 

All the state data acts as a local JSON-style dictionary within `data.js`. I completely bypassed heavy libraries and frameworks to focus on raw DOM manipulation, CSS grid/flexbox layouts, and building accessible interactive elements from scratch.

### How to run it locally
Since it's a static site, you don't need to install any massive node modules or spin up a local server. Just clone the repository to your machine and double-click the `index.html` file to open it in your browser. 

### What's next?
While it works perfectly as a frontend showcase, my next major goal for this project is to turn it into a true full-stack application. I'm planning to move the massive `data.js` dictionary into a **MongoDB** database and serve it dynamically using a **Node.js/Express** backend.

---
*Created by [Aditya Lande](https://github.com/aditya-gitzy)*
