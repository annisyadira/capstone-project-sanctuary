import { UserSignedInKey } from "../views/pages/signin";

const logoutInitiator = {
    init({ logoutBtn }) {
        logoutBtn.addEventListener('click', this._confirm)
    },

    _confirm() {
        if (localStorage.getItem(UserSignedInKey) !== null) {
            const conf = confirm('Yakin ingin keluar?');

            if (conf == true) {
                localStorage.clear();
                location.reload();
            } else {
                ev.stopPropagation();
            }
        }
    }
}

export default logoutInitiator;