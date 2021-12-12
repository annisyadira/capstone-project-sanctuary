import { createSignIn } from '../templates/template-creator';
import data from '../../data/DATA.json';

const userData = data[2].user;
const UserSignedInKey = 'USER_SIGNED_IN';

const SignIn = {
    async render() {
        return `
        <div id='sign-content' class='container'></div>
        `;
    },

    async afterRender() {
        const container = document.querySelector('#sign-content');
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

    async checkInput() {
        const usernameInput = document.querySelector('#usernameInput').value;
        const passwordInput = document.querySelector('#passwordInput').value;

        const usernameIndex = userData.findIndex(function(item, i){
            return item.username === usernameInput;
        });

        const passwordIndex = userData.findIndex(function(item, i){
            return item.password === passwordInput;
        });
          

        //cek username
        if (userData.find((username) => { return username.username === usernameInput })) 
        {
            //cek password
            if (userData.find((password) => { return password.password === passwordInput })) 
            {
                //cek kombinasi username & password
                if (usernameIndex === passwordIndex)
                {
                    //assign user id ke local storage
                    if (localStorage.getItem(UserSignedInKey) === null)
                    {
                        const getId = [
                            userData.at(usernameIndex).id_user
                        ];

                        localStorage.setItem(UserSignedInKey, getId)
                        
                        alert('Berhasil masuk!');
                        location.replace('#/writestory');
                    }
                }
            }
        }
        else {
            alert('Password atau username salah. Coba lagi.');
        }
    }
};

export { SignIn, UserSignedInKey };
