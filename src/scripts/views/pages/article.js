import { createArticleItem } from '../templates/template-creator';
import data from '../../data/DATA.json';

const Article = {
    async render() {
        return `
        <h3 class='title'>ARTIKEL</h3>
        <p class='sub-title'>Ketahui lebih banyak tentang pentingnya menjaga kesehatan mental,</br>tanda-tanda awal penyakit mental, cara mengatasi penyakit mental, dan masih banyak lagi!<p>
        <div id='content' class='container'></div>
        `;
    },
    async afterRender() {
        const articles = data[0].article;
        const container = document.querySelector('#content');

        articles.forEach((article) => {
            container.innerHTML += createArticleItem(article);
        });
    },
}

export default Article;
