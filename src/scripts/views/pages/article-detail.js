import { createArticleDetailTemplate } from '../templates/template-creator';
import data from '../../data/DATA.json';
import UrlParser from '../../routes/url-parser';

const ArticleDetail = {
    async render () {
        return `
        <h3 class='title'>ARTIKEL</h3>
        <p class='sub-title'>Ketahui lebih banyak tentang pentingnya menjaga kesehatan mental,</br>tanda-tanda awal penyakit mental, cara mengatasi penyakit mental, dan masih banyak lagi!<p>
        <div id='article-detail' class='container'></div>
        `;
    },

    async afterRender() {
        window.scrollTo(0, 0);
        const getArticle = data[0].article;
        
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const articleId = await url.id;
        const getIndex = getArticle.findIndex(function(item, i) {
            return item.id_article === articleId;
        });
        
        const article = getArticle.at(getIndex);
        
        const container = document.querySelector('#article-detail');
        container.innerHTML = createArticleDetailTemplate(article);
    },
}
export default ArticleDetail;
