# Live Code Editor

## Overview

**Live Code Editor** is a modern, real-time web development tool that allows users to write and execute HTML, CSS, and JavaScript code simultaneously with instant preview. Perfect for learning, prototyping, and experimenting with web technologies.

## Features

- 🎨 **Real-Time Preview** - See your code changes instantly in the output panel
- 🔧 **Multi-Language Support** - Write HTML, CSS, and JavaScript in separate panels
- 💻 **Clean UI** - Dark modern interface designed for comfortable coding sessions
- ⚡ **Live Compilation** - Code executes as you type with no build process needed
- 🎯 **Responsive Layout** - Three input panels and one output panel for optimal workflow

## Project Structure

```
Code Editor/
├── index.html      # HTML structure and layout
├── script.js       # Real-time code execution and event handling
└── style.css       # Styling and responsive design
```

## File Descriptions

### index.html
- Defines the page layout with header, three textarea inputs, and output iframe
- Creates labeled sections for HTML, CSS, and JavaScript code input
- Links to external CSS and JavaScript files

### script.js
- Handles real-time code execution
- Listens to keyboard input on textareas
- Updates the iframe content reflecting HTML, CSS, and JavaScript changes
- Initializes with sample code to demonstrate functionality

### style.css
- Implements dark theme styling (#1F2430 background)
- Uses Flexbox for responsive layout
- Monospace font for code readability
- Custom styling for textarea inputs and output iframe

## How to Use

1. Open `index.html` in your web browser
2. Write your HTML code in the **HTML** panel
3. Write your CSS code in the **CSS** panel
4. Write your JavaScript code in the **JS** panel
5. View the live output in the **Output** panel as you type

## Getting Started

Simply open the `index.html` file in any modern web browser. No installation, dependencies, or build tools required.

```bash
# Option 1: Open directly in browser
Open index.html in your preferred browser

# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## Browser Compatibility

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Any modern browser supporting:
  - HTML5 Iframe with contentDocument API
  - CSS Flexbox
  - ES6 JavaScript

## Tech Stack

- **HTML5** - Semantic markup and iframe structure
- **CSS3** - Flexbox layouts and modern styling
- **Vanilla JavaScript** - DOM manipulation and real-time compilation

## Default Example

The editor comes pre-loaded with a simple example:
- HTML: `<h1>Start Coding</h1>`
- CSS: `h1{color:red}`
- JavaScript: `console.log('Hello World!')`

## Use Cases

- 📚 **Learning** - Practice front-end web development
- 🧪 **Testing** - Quick prototyping of HTML/CSS/JS concepts
- 🎓 **Teaching** - Demonstrate web development concepts
- 🐛 **Debugging** - Test small code snippets

## Future Enhancements

- Code syntax highlighting
- Save/Load functionality
- Export as HTML file
- Multiple project tabs
- Code themes and customization
- Console output in the UI

## License

This project is open source and available for educational and personal use.

## Author

Created as a web development learning project.

---

**Note:** This is a lightweight, client-side application. All code execution happens in your browser with no server required.
