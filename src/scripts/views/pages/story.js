import { createStoryItem } from '../templates/template-creator';
import data from '../../data/DATA.json';

const Story = {
    async render() {
        return `
        <h3 class='title'>KISAH</h3>
        <p class='sub-title'>Jadilah bagian dari komunitas kami. Baca kisah inspiratif perjuangan orang-orang</br>melawan penyakit mental. Anda bahkan dapat menulis cerita Anda sendiri!<p>
        <div id='content' class='container'></div>
        `;
    },
    async afterRender() {
        const stories = data[1].story;
        const container = document.querySelector('#content');

        stories.forEach((story) => {
            container.innerHTML += createStoryItem(story);
        });
    },
}

export default Story;
