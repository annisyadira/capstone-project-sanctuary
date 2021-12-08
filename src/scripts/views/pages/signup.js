import { createSignUp } from '../templates/template-creator';
import data from '../../data/DATA.json';

const userData = data[2].user;

const SignUp = {
    async render() {
        return `
        <div id='content'></div>
        `;
    },

    async afterRender() {
        const container = document.querySelector('#content');
        container.innerHTML += createSignUp();

        const submit = document.querySelector('#submitBtn');
        submit.addEventListener('click', this.checkDuplicates);
    },

    async checkDuplicates(event) {
        const email = await document.querySelector('#emailInput').value;
        const username = await document.querySelector('#usernameInput').value;
        const password = await document.querySelector('#passwordInput').value;
        const lastId = parseInt(userData[-1].id_user);

        const credential = {
            "id_user" : lastId += 1,
            "email" : email,
            "username" : username,
            "password" : password
        };

        if (userData.forEach((email) => 
        email.email === document.querySelector('#emailInput').value)) {
            alert('E-mail sudah terdaftar. Coba e-mail lain.');
            event.preventDefault();
            event.stopPropagation();

        } if (userData.forEach((username) =>
        username.username === document.querySelector('#usernameInput').value)) {
            alert('Username sudah terdaftar. Coba username lain');
            event.preventDefault();
            event.stopPropagation();

        } else {
            userData.push(credential);
            alert('Akun berhasil dibuat!');
            location.replace('#/signin');
        }
    }
}

export default SignUp;
