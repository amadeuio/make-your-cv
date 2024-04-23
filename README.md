![Stack](https://img.shields.io/badge/Stack-React_|_TypeScript-149eca)
![License](https://img.shields.io/badge/License-MIT-green)

# Make Your CV 📃

CV builder frontend web app.

## Demo

<p align="center">
  <img src="public/screenshots/screenshot.png" width="650px" alt="screenshot">
</p>
<h2 align="center">
  <a href="https://amadeuio.github.io/make-your-cv">👉 Demo</a>
</h2>

## Features

- Enter your information in the forms and the CV will be updated in real-time
- Expand and collapse the forms
- Drag-and-drop the forms to organize chronologically
- Responsive
- Download the CV in PDF format

## Tech Stack

- **UI Library:** React
- **Languages:** TypeScript, CSS, HTML
- **Build Tool:** Vite
- **Dependencies:** uuid, html2canvas, jspdf

## Main Directories

Located in `src`:

- `components`: React components
- `data`: Storage of initial data and its type definitions
- `icons`: SVG icons components
- `css`: CSS styles
- `Context.tsx`: Context API provider component
- `App.tsx`: Main component responsible for managing state and rendering components of the app
- `main.tsx`: Entry point for the React app

Located in root:

- `docs`: Distribution files generated during the build, GitHub pages is reading the root of this directory
- `index.html`: Entry point for the app

## Run Locally

Clone the project

```bash
git clone https://github.com/amadeuio/make-your-cv
```

Go to the project directory

```bash
cd make-your-cv
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Acknowledgements

- [Design inspo by Dmitry Sergushkin](https://dribbble.com/shots/20685447-Create-Event-Form)
- [GPT](https://chat.openai.com/)
- [shields.io](https://shields.io/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
