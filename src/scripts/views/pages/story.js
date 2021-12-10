import { createStoryItem } from '../templates/template-creator';
import data from '../../data/DATA.json';

const Story = {
    async render() {
        return `
        <h3 class='title'>KISAH</h3>
        <p class='sub-title'>Jadilah bagian dari komunitas kami. Baca kisah inspiratif perjuangan orang-orang</br>melawan penyakit mental. Anda bahkan dapat menulis cerita Anda sendiri!<p>
        <button id='submitBtn' class='btn btn-outline-secondary btn-md' onclick="window.location.href='#/writestory'">Tulis ceritamu!</button>
        <div id='body' class='container'></div>
        `;
    },
    async afterRender() {
        const stories = data[1].story;
        const container = document.querySelector('#body');

        stories.forEach((story) => {
            container.innerHTML += createStoryItem(story);
        });
    },
}

export default Story;
