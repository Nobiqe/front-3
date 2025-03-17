# 🌐 Web Project

This project contains an HTML-based website with styling managed using Sass and Bootstrap. It includes a responsive navigation menu, sections for home, services, about us, and contact, and is designed with right-to-left (RTL) language support.

## 📂 Files

### 1. `index.html`
- Main structure of the website.
- Includes:
  - 🏠 Home section
  - ℹ️ About us
  - 🛠️ Services
  - 📞 Contact
  - 📜 Articles
- Uses external stylesheets (`style.css`, `bootstrap.css`).
- Includes a favicon setup.

### 2. `package.json`
- Manages dependencies for Sass.
- Key features:
  - Includes `sass` as a development dependency.
  - Provides a script to compile Sass files:
    ```sh
    npm run sass
    ```
  - Ensures styling consistency with `scss/styles.scss` being compiled into `css/style.css`.

## 📌 Requirements
- A web browser (Chrome, Firefox, Edge, etc.)
- Node.js & npm (for compiling Sass)

## ▶️ How to Run
1. Open `index.html` in a browser.
2. To compile Sass, run:
   ```sh
   npm install
   npm run sass
   ```

Enjoy the website! 🎉

