import { createArticleItem } from '../templates/template-creator';
import data from '../../data/DATA.json';

const Article = {
    async render() {
        return `
        <h3>LEARN MORE</h3>
        <p>Know more about the importance of keeping your mental healthy, early signs of mental illness, how to cope with mental illness, and more!<p>
        <div id='content'></div>
        `;
    },
    async afterRender() {
        const articles = data[0].article;
        const container = document.querySelector('#content');

        articles.forEach((article) => {
            container += createArticleItem(article);
        });
    },
}

export default Article;