# 🕰️ Glass Morphism Digital Clock

A sleek, modern clock with a frosted-glass interface. It shows the live time and date, an analog-style rotating second hand, and a 12-hour / 24-hour format toggle. Built with HTML, CSS, and vanilla JavaScript, with no libraries or dependencies.

🔗 **Live Demo:** https://glassclock1.netlify.app/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

<!-- Add a screenshot or GIF: ![Glass clock preview](preview.png) -->

## ✨ Features

- **Glassmorphism design**: translucent frosted-glass card built with `backdrop-filter: blur()`, soft borders, and layered shadows
- **Real-time updates**: hours, minutes, and seconds refresh every second
- **Analog second hand**: a smoothly rotating hand driven by the current second
- **12h / 24h toggle**: switch between 12-hour (AM/PM) and 24-hour formats instantly
- **Live date display**
- **Fully responsive**: scales cleanly from small phones to large desktop screens

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (`backdrop-filter`, custom properties, transforms, flexbox) |
| Logic | Vanilla JavaScript (DOM manipulation, `Date` API, `setInterval`) |

## 🎯 What This Project Demonstrates

- Creating glassmorphism effects with modern CSS
- Updating the DOM in real time with JavaScript
- Rotating elements with CSS `transform` driven by time values
- Handling user interaction (format toggle) and state
- Building responsive layouts without a framework

## 🚀 Getting Started

No installation or build step is needed.

```bash
# Clone the repository
git clone https://github.com/zaidshaikh5301/glassclock.git

# Move into the project folder
cd glassclock
```

Then open `index.html` in your browser, or serve it with the VS Code **Live Server** extension (default: `http://127.0.0.1:5500`).

> `backdrop-filter` works best in modern browsers (Chrome, Edge, Safari, Firefox 103+).

## 📁 Project Structure

```
glassclock/
├── index.html    # Clock layout and markup
├── style.css     # Glass effect, dial styling, and responsive rules
├── script.js     # Time logic, second-hand rotation, and format toggle
└── README.md
```

## 🎨 Customization

- **Glass look**: adjust the `background` alpha and `backdrop-filter: blur()` values in `style.css`.
- **Colors and background**: change the CSS variables or the page gradient.
- **Default format**: set the initial 12h / 24h mode in `script.js`.

## 🗺️ Future Improvements

- Remember the chosen time format with `localStorage`
- Add multiple time zones
- Add a theme switcher (light, dark, and color accents)
- Add alarm and stopwatch modes

## 👤 Author

**Zaid Shaikh**
GitHub: [@zaidshaikh5301](https://github.com/zaidshaikh5301)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
