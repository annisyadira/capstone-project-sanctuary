import { createInputStory } from '../templates/template-creator';
import data from '../../data/DATA.json';
import SignInCheck from '../../utils/signInChecker';

const WriteStory = {
    async render() {
        return `
        <div id='content'></div>
        `;
    },
    async afterRender() {
        SignInCheck.init();

        const container = document.querySelector('#content');
        container.innerHTML = createInputStory();

        const submit = document.querySelector('#submitBtn');
        submit.addEventListener('click', this.addNewStory);
    },
    async addNewStory() {
        const title = document.querySelector('#addTitle').value;
        const content = document.querySelector('#addContent').value;
        
        const storyData = data[1].story;
        const lastId = parseInt(storyData[-1].id_story);
        const getUserId = localStorage.getItem(UserSignedInKey.id_user);
        const date = new Date();
        let dateCreated = date.toLocaleString();

        const NewStory = {
            "id_story": lastId += 1,
            "id_user": getUserId,
            "title": title,
            "content": content,
            "created_at": dateCreated
        }

        storyData.push(NewStory);
    }
}

export default WriteStory;
