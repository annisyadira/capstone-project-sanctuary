import { createSignIn } from '../templates/template-creator';
import data from '../../data/DATA.json';

const userData = data[2].user;
const usernameInput = document.querySelector('#usernameInput').value;
const passwordInput = document.querySelector('#passwordInput').value;

const SignIn = {
    async render() {
        return `
        <div id='content'></div>
        `;
    },

    async afterRender() {
        const container = document.querySelector('#content');
        container.innerHTML = createSignIn();

        window.addEventListener("load", function(){
            if (typeof(Storage) !== "undefined") {
                console.log('Web Browser supported!');
            }
            else {
                alert('The browser you are using does not support Web Storage')
            }
        });

        const submit = document.querySelector('#submitBtn');
        submit.addEventListener('click', this.checkInput);
    },

    async checkInput(event) {
        //cek username
        if (userData.find((username) => {
            return username.username !== usernameInput;
        })) {
            alert('Wrong username. Try again.');
            event.preventDefault();
            event.stopPropagation();
        }

        //cek password
        if (userData.find((password) => {
            return password.password !== passwordInput;
        })) {
            alert('Wrong password. Try again.');
            event.preventDefault();
            event.stopPropagation();
        }

        //cek kombinasi username & password
        if (userData.indexOf(usernameInput) !== userData.indexOf(passwordInput)) {
            alert('Enter the correct password and username combination. Try again.');
            event.preventDefault();
            event.stopPropagation();
        }
        
        else {
            const UserSignedInKey = 'USER_SIGNED_IN';
            const userCredential = userData.indexOf(usernameInput);
            const getCredential = userData[userCredential];
            
            //assign user credential ke local storage
            if (localStorage.getItem(UserSignedInKey) === null){
                localStorage.setItem(UserSignedInKey, JSON.stringify(getCredential))
            }
            
            alert('Sign in success!');
            location.replace('#/writeYourStory');
        }
    }
};

export default SignIn;