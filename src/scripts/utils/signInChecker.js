import { UserSignedInKey } from '../views/pages/signin';

const SignInCheck = {
    init() {
        window.addEventListener('load', this._checkInLocalStorage)
    },

    _checkInLocalStorage() {
        if (localStorage.getItem(UserSignedInKey) === null) {
            alert('Masuk untuk mengakses halaman ini');
            location.replace('#/signin');
        } else {
            console.log('Akses diberikan.');
        }
    }
};

export default SignInCheck;
