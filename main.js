class FilmCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background-color: #2a2a2a;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.5);
                }
                img {
                    width: 100%;
                    height: auto;
                }
                .content {
                    padding: 1.5rem;
                }
                h3 {
                    margin-top: 0;
                    font-size: 1.5rem;
                    color: #4A90E2;
                }
                p {
                    color: #ccc;
                }
            </style>
            <div class="card">
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('title')}">
                <div class="content">
                    <h3>${this.getAttribute('title')}</h3>
                    <p>${this.getAttribute('description')}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('film-card', FilmCard);
