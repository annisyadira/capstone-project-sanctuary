import { createStoryDetailTemplate } from '../templates/template-creator';
import data from '../../data/DATA.json';
import UrlParser from '../../routes/url-parser';

const StoryDetail = {
    async render () {
        return `
        <h3 class='title'>KISAH</h3>
        <p class='sub-title'>Jadilah bagian dari komunitas kami. Baca kisah inspiratif perjuangan orang-orang</br>melawan penyakit mental. Anda bahkan dapat menulis cerita Anda sendiri!<p>
        <div id='story-detail' class='container'></div>
        `;
    },

    async afterRender() {
        window.scrollTo(0, 0);
        const getStory = data[1].story
    
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const storyId = await url.id;
        const getIndex = getStory.findIndex(function(item, i){
            return item.id_story === storyId;
        });
        
        const story = getStory.at(getIndex);
        console.log(getIndex);

        const container = document.querySelector('#story-detail');
        container.innerHTML = createStoryDetailTemplate(story);
    },
}
export default StoryDetail;
