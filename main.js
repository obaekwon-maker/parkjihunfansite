class FilmCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const image = this.getAttribute('image');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    background-color: var(--card-bg, #fff);
                    color: var(--text-color, #3E2723);
                }
                img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .content {
                    padding: 1.5rem;
                }
                h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.5rem;
                    color: var(--title-color, #2E7D32);
                }
                p {
                    margin: 0;
                    font-size: 1rem;
                }
            </style>
            <div class="card">
                <img src="${image}" alt="${title}">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('film-card', FilmCard);

// Theme Switcher Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
