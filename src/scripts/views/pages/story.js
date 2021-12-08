import { createStoryItem } from '../templates/template-creator';
import data from '../../data/DATA.json';

const Story = {
    async render() {
        return `
        <h3>THEIR STORIES</h3>
        <p>Be a part of the community. Read inspiring stories about people who have been ddealing with mental illness. You can even write your own story!<p>
        <div id='content'></div>
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
