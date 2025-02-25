## Overview
This repository contains the source code for the **QISCA (Quantum Information Science Club Association)** website. The project consists of HTML, CSS, JavaScript, and JSON files that together form the structure, design, and dynamic content of the website. This README provides a detailed guide on how to modify and maintain the website.

---

## 1. HTML Files: Structure and Purpose

Each HTML file represents a different page on the website. Below is an overview of their roles:

- **`index.html`** - The homepage of the website. Contains an introduction and navigation to other sections.
- **`about.html`** - Provides information about the club, its mission, and its members.
- **`activities.html`** - Showcases past and upcoming activities or events.
- **`members.html`** - Displays information about the members of QISCA. However, the `members.json` file is essentially redundant, and its presence does not serve a meaningful purpose.

### Key HTML Components:
Each HTML file follows a standard structure, typically including:
- A `<head>` section that links to `style.css` for styling and JavaScript files for dynamic behavior.
- A `<body>` section that contains the main content, often structured using `<div>`, `<section>`, and `<article>` elements.

---

## 2. CSS File: `style.css`

The **`style.css`** file is responsible for the visual appearance of the website. It includes:
- **Global Styles** – Defines font styles, colors, and spacing for the entire site.
- **Layout Classes** – Manages responsive behavior for different screen sizes.
- **Navigation Bar** – Controls the appearance and behavior of the site’s navigation menu.
- **Specific Sections** – Contains styles for headers, footers, and content blocks.

To modify the appearance:
1. Open `style.css`.
2. Find the relevant section (e.g., `/* Navigation Styles */`).
3. Edit the CSS properties such as `color`, `font-size`, or `background-image`.

---

## 3. JavaScript & JSON Files: Managing Dynamic Content

### JavaScript Files:
Several JavaScript files control interactivity and data loading. Key files include:

- **`common.js`** - Contains functions shared across multiple pages (e.g., navigation logic).
- **`members.js`** - Loads member data from `members.json`, but this is not actually necessary.
- **`club.js`** - Handles club-related dynamic content, often retrieving data from `club_data.json`.

### JSON Files:
JSON files store structured content that is loaded dynamically:

- **`club_data.json`** - Contains details about club activities, history, and events.
- **`members.json`** - This file is currently unnecessary.

#### How to Modify JSON Data:
To update club information:
1. Open `club_data.json` in a text editor.
2. Modify or add new entries following the existing structure.
3. Save the file. The website will automatically reflect these changes when refreshed.

Example (`club_data.json` entry):
```json
{
    "html": "<div class=\"swiper-slide club-slide\">\n
    <img src=\"https://koreaquantumsociety.github.io/QISCA2024.github.io/images/SQRT.png\" alt=\"SQRT\">\n
    <div class=\"club-name\">SQRT</div>"
}
```

---

## 4. Updating Images

Images are used throughout the website for members, events, and banners. They are typically stored in the `images/` directory.

### How to Replace an Image:
1. Navigate to the `images/` folder.
2. Replace an existing image with a new one, ensuring it has the same filename and format.
3. If adding a new image, update the relevant JSON file (e.g., `club_data.json`) or directly modify the HTML/CSS.

Example: To update a banner image:
- Replace `images/banner.jpg` with a new image.
- Ensure the file name matches the one referenced in the HTML or CSS.

---

## Summary

- **HTML files** define the site’s structure.
- **CSS (`style.css`)** controls the visual design.
- **JavaScript (`.js` files)** adds interactivity and loads dynamic content.
- **JSON (`.json` files)** stores club information for easy updates (except `members.json`, which is redundant).
- **Images** should be replaced in the `images/` folder and referenced properly in JSON/HTML.

For further modifications or troubleshooting, review the existing code structure and follow this guide.
