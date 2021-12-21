
import { createInputStory } from '../templates/template-creator';
import data from '../../data/DATA.json';
import SignInCheck from '../../utils/signInChecker';
import { UserSignedInKey } from './signin'

SignInCheck.init();

const WriteStory = {
    async render() {
        return `
        <div id='content' class='container'></div>
        `;
    },
    async afterRender() { 
        const container = document.querySelector('#content');
        container.innerHTML = createInputStory();

        const submit = document.querySelector('#submitBtn');
        const check = document.querySelector('#req');

        check.addEventListener('change', function() {
            if (check.checked == false) {
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }            
        })
        
        submit.addEventListener('click', this.addNewStory);
    },
    async addNewStory() {
        const title = document.querySelector('#addTitle').value;
        const content = document.querySelector('#addContent').value;
        
        const storyData = data[1].story;
        let lastId = parseInt(storyData.at(-1).id_story);
        const getUserId = localStorage.getItem(UserSignedInKey);
        const date = new Date();
        const dateCreated = date.toLocaleString();

        const NewStory = {
            "id_story": `${lastId += 1}`,
            "id_user": `${getUserId}`,
            "title": `${title}`,
            "content": `${content}`,
            "created_at": `${dateCreated}`
        }

        console.log(NewStory);

        if (title == '' && content == '') {
            alert('Formulir tidak boleh kosong!')
        } else {
            storyData.push(NewStory);
            alert('Kisah berhasil ditambahkan!');
        }
    }
}

export default WriteStory;
