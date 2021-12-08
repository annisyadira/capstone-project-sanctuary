const createArticleItem = (article) => `
    <article class='item'>
        <h3 id='item-title'>${article.title}</h3>
        <p>${article.content}</p>
        <a href='#/Story-Detail'>Baca Selengkapnya.</a>
    </article>
`;

const createStoryItem = (story) => `
    <article class='item'>
        <h3 class='item-title'>${story.title}</h3>
        <p>${story.content}</p>
        <a href='#/Story-Detail'>Baca Selengkapnya.</a>
    </article>
`;

const createInputStory = () => `
    <h3 class='title'>TULIS DAN BAGIKAN CERITAMU</h3>
    <div>
        <input type='string' id='addTitle' placeholder='Judul' required>
        <input type='string' id='addContent' placeholder='Isi' required>
        <button type='submit' id='submitBtn'>Bagikan</button>
    </div>
`;

const createSignIn = () => `
    <h3 class='title'>MASUK</h3>
    <div>
        <h4>username</h4>
        <input type='string' id='usernameInput' placeholder='username' required>
        <h4>password</h4>
        <input type='password' id='passwordInput' minlength='6' placeholder='password (minimal 6 karakter)' required>
    </div>
    <h3>Belum punya akun? <a href='#/signup'>Daftar sekarang!</a></h3>
    <button type='submit' id='submitBtn'>Masuk</button>
`;

const createSignUp = () => `
    <h3 class='title'>DAFTAR</h3>
    <div>
        <h4>e-mail</h4>
        <input type='string' id='emailInput' placeholder='e-mail' required>
        <h4>username</h4>
        <input type='string' id='usernameInput' placeholder='username' required>
        <h4>password</h4>
        <input type='password' id='passwordInput' minlength='6' placeholder='password (minimal 6 karakter)' required>
    </div>
    <h3>Sudah punya akun? <a href='#/signin'>Masuk!</a></h3>
    <button type='submit' id='submitBtn'>Daftar</button>
`;

export { 
    createArticleItem,
    createStoryItem,
    createInputStory,
    createSignIn,
    createSignUp 
};
