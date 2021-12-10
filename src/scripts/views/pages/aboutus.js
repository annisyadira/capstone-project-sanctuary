import { createAboutUs } from '../templates/template-creator';

const AboutUs = {
    async render() {
        return `
        <div class="about-section">
            <h1>Tentang Kami</h1>
            <p>Mari mengenal siapa di balik Sanctuary</p>
        </div>
        <div id="content"></div>
    },

    async afterRender() {
        const container = document.querySelector('#content');
        container.innerHTML = createAboutUs();
    },
}

export default AboutUs;
