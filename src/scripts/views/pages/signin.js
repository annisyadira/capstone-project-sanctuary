import { createSignIn } from '../templates/template-creator';
import data from '../../data/DATA.json';

const userData = data[2].user;
const UserSignedInKey = 'USER_SIGNED_IN';

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
                console.log('Web Browser didukung!');
            }
            else {
                alert('Browser yang anda gunakan tidak mendukung Penyimpanan Web')
            }
        });

        const submit = document.querySelector('#submitBtn');
        submit.addEventListener('click', this.checkInput);
    },

    async checkInput(event) {
        const usernameInput = document.querySelector('#usernameInput').value;
        const passwordInput = document.querySelector('#passwordInput').value;

        //cek username
        if (userData.find((username) => {
            return username.username !== usernameInput;
        })) {
            alert('Usename salah. Coba lagi.');
            event.preventDefault();
            event.stopPropagation();
        }

        //cek password
        if (userData.find((password) => {
            return password.password !== passwordInput;
        })) {
            alert('Password salah. Coba lagi.');
            event.preventDefault();
            event.stopPropagation();
        }

        //cek kombinasi username & password
        if (userData.indexOf(usernameInput) !== userData.indexOf(passwordInput)) {
            alert('Masukkan kombinasi password dan username yang benar. Coba lagi.');
            event.preventDefault();
            event.stopPropagation();
        }
        
        else {
            const userCredential = userData.indexOf(usernameInput);
            const getCredential = userData[userCredential];
            
            //assign user credential ke local storage
            if (localStorage.getItem(UserSignedInKey) === null){
                localStorage.setItem(UserSignedInKey, JSON.stringify(getCredential))
            }
            
            alert('Berhasil masuk!');
            location.replace('#/writeYourStory');
        }
    }
};

export { SignIn, UserSignedInKey };
