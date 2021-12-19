import { createSignUp } from '../templates/template-creator';
import data from '../../data/DATA.json';

const userData = data[2].user;

const SignUp = {
    async render() {
        return `
        <div id='sign-content' class='body'></div>
        `;
    },

    async afterRender() {
        const container = document.querySelector('#sign-content');
        container.innerHTML += createSignUp();

        const submit = document.querySelector('#submitBtn');
        submit.addEventListener('click', this.checkDuplicates);
    },

    async checkDuplicates() {
        const emailInput = await document.querySelector('#emailInput').value;
        const usernameInput = await document.querySelector('#usernameInput').value;
        const password = await document.querySelector('#passwordInput').value;
        let lastId = parseInt(userData.at(-1).id_user);

        const credential = {
            "id_user" : `${lastId += 1}`,
            "email" : `${emailInput}`,
            "username" : `${usernameInput}`,
            "password" : `${password}`
        };

        //checking wether inputs are not empty
        if (emailInput != '' && usernameInput != '' ){
            //checking assigned username
            if (userData.find((username) => { return username.username !== usernameInput })) {
                //checking assigned email
                if (userData.find((email) => { return email.email !== emailInput })) {
                    //pushing new user credentials to userData
                    userData.push(credential);
                    alert('Akun berhasil dibuat!');
                    location.replace('#/signin');
                }
            }
            else {
                alert('Username atau E-mail telah terdaftar. Coba lagi.');
                location.reload;
            }
        }
        else {
            alert('Formulir tidak boleh kosong!')
        }

    }
}

export default SignUp;
