# Park Ji-hoon Fan Website Blueprint

## **1. Overview**

This document outlines the plan for a fan website for the actor and singer Park Ji-hoon. The site is a comprehensive resource for fans, featuring an introduction, filmography, a summary of his activities, and his upcoming schedule. The design is based on a whimsical and enchanting "Ghibli style" and now includes a user-selectable Light/Dark mode feature.

## **2. Design & Style (Ghibli Redesign)**

The design is inspired by the heartfelt and nostalgic aesthetic of Studio Ghibli films.

*   **Theme Switcher:** A toggle switch has been added to the header, allowing users to switch between a light mode ("Day") and a dark mode ("Night").
*   **Light Mode (Day):** The default theme, featuring a light and airy atmosphere with soft, natural colors like sky blue, gentle greens, and creamy whites. The background is a bright, painterly Ghibli-style day landscape.
*   **Dark Mode (Night):** A darker theme that evokes a serene, magical Ghibli night. It uses a palette of deep blues, muted greens, and soft yellows. The background is a beautiful, starry Ghibli-style night landscape.
*   **Fonts:** The typography remains "M PLUS Rounded 1c" to maintain a friendly and soft feeling across both themes.
*   **Color Palette:** CSS variables are used to manage two distinct color palettes for seamless theme switching.
*   **Accessibility:** The site continues to adhere to accessibility standards, ensuring high contrast and readable fonts in both modes.

## **3. Features & Sections**

The website is a single-page application with the following sections:

1.  **Header & Navigation:** A sticky header with navigation links and a new Light/Dark mode toggle switch.
2.  **Introduction:** A hero section with a stunning Ghibli-style landscape that changes with the theme.
3.  **Filmography:** A section showcasing his work, presented as interactive cards.
4.  **Activities:** A summary of his career as both an actor and a singer.
5.  **Schedule:** A section for his upcoming events and appearances.
6. **Disqus Comment Section:** A dedicated area for fans to leave comments and interact, powered by Disqus.
7. **Fortune Telling (Saju):** A fun, interactive section where fans can "see their fortune" with Park Ji-hoon (links to community or a themed experience).
8. **Google AdSense:** Integrated Google AdSense for site monetization, including the required script and `ads.txt`.
9. **Footer:** A simple footer with copyright information.

## **4. Technical Implementation**

*   **Structure:** The site is built using HTML, CSS, and JavaScript.
*   **Theme Switching:**
    *   An HTML switch is added to the header in `index.html`.
    *   CSS in `style.css` uses custom properties (variables) for colors. A `[data-theme='dark']` attribute selector is used to apply the dark mode palette.
    *   JavaScript in `main.js` handles the logic for toggling the `data-theme` attribute on the `<body>` element and saving the user's preference in `localStorage`.
*   **Disqus Integration:**
    *   Disqus universal embed code is added to `index.html` above the Saju section.
    *   Styled with CSS to ensure it matches the Ghibli theme.
*   **Deployment:** The final site will be pushed to the `main` branch of the GitHub repository.

## **5. Development Plan (Current)**

### **Phase 1: Implement Theme Switcher**
*   Update `blueprint.md` with the new theme switcher feature.
*   Add a toggle switch to the header in `index.html`.
*   Refactor `style.css` to use CSS variables for colors and add a dark mode color scheme under a `[data-theme='dark']` selector.
*   Write JavaScript in `main.js` to manage theme toggling and persist the choice using `localStorage`.

### **Phase 2: Implement Disqus & Saju Section**
*   Add Disqus thread container and script to `index.html`.
*   Update the `saju` section to reflect "Fortune Telling" more accurately.
*   Add styles for the Disqus section in `style.css`.

### **Phase 3: Deployment**

*   Commit all changes to the Git repository.
*   Push the updated code to the `main` branch on GitHub.
*   Inform the user about the update and deployment.
