import { UserSignedInKey } from '../views/pages/signin';

const SignInCheck = {
    init() {
        window.addEventListener('hashchange', this._checkOnWriteStory);
    },

    _checkOnWriteStory() {
        if (location.hash === '#/writestory') {
            if (localStorage.getItem(UserSignedInKey) === null) {
                alert('Masuk untuk mengakses halaman ini');
                location.replace('#/signin');
            } 
            else {
                console.log('Akses diberikan.');
            }
        }

    },

    _checkNavbar() {
        const logOutBtn = document.querySelector('#logout');
        const signInBtn = document.querySelector('.signin');
        const signUpBtn = document.querySelector('.signup');

        //user has not logged in
        if (localStorage.getItem(UserSignedInKey) === null) {
            logOutBtn.setAttribute('hidden', true);
            signInBtn.removeAttribute('hidden', true);
            signUpBtn.removeAttribute('hidden', true);
        } 
        //user logged in
        else {
            signInBtn.setAttribute('hidden', true);
            signUpBtn.setAttribute('hidden', true);
            logOutBtn.removeAttribute('hidden', true);
        }
    }
};

export default SignInCheck;
