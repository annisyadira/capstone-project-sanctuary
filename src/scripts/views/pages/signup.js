import { createSignUp } from '../templates/template-creator';
import data from '../../data/DATA.json';
// const JsonDB = require('node-json-db').JsonDB;
// const Config = require('node-json-db/dist/lib/JsonDBConfig').Config;

const userData = data[2].user;
// const db = new JsonDB(new Config("../../data/DATA", true, false, '/'));

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

    async checkDuplicates(event) {
        const email = await document.querySelector('#emailInput').value;
        const username = await document.querySelector('#usernameInput').value;
        const password = await document.querySelector('#passwordInput').value;
        let lastId = parseInt(userData.at(-1).id_user);

        const credential = {
            "id_user" : `${lastId += 1}`,
            "email" : `${email}`,
            "username" : `${username}`,
            "password" : `${password}`
        };


        if (userData.forEach((userEmail) => userEmail.email == `${email}`)) {
            alert('E-mail sudah terdaftar. Coba e-mail lain.');
            event.preventDefault();
            event.stopPropagation();

        } if (userData.forEach((userUsername) => userUsername.username == `${username}`)) {
            alert('Username sudah terdaftar. Coba username lain');
            event.preventDefault();
            event.stopPropagation();

        } else {
            // db.push("/" + [2] + "/user/" ,[credential], false);
            location.replace('#/signup/addinguser');
            alert('Akun berhasil dibuat!');
            location.replace('#/signin');
        }
    }
}

export default SignUp;
