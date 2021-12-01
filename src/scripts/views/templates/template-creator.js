const createArticleItem = (article) => `
    <article class='item'>
        <h3>${article.title}</h3>
        <p>
            ${article.content}
            <a href='#/Story-Detail'>Baca Selengkapnya</a>
        </p>
    </article>
`;

const createStoryItem = (story) => `
    <article class='item'>
        <h3>${story.title}</h3>
        <p>
            ${story.content}
            <a href='#/Story-Detail'>Baca Selengkapnya</a>
        </p>
    </article>
`;

const createSignIn = () => `
    <h3>SIGN IN</h3>
    <div>
        <h4>username</h4>
        <input type='string' id='usernameInput'>
        <h4>password</h4>
        <input type='string' id='passwordInput'>
    </div>
    <h3>Belum punya akun? <a href='#/signup'>Sign up!</a></h3>
    <button>Sign In</button>
`;

const createSignUp = () => `
    <h3>SIGN UP</h3>
    <div>
        <h4>e-mail</h4>
        <input type='string'>
        <h4>username</h4>
        <input type='string'>
        <h4>password</h4>
        <input type='string'>
    </div>
    <h3>Sudah  punya akun? <a href='#/signin'>Sign in!</a></h3>
    <button>Sign Up</button>
`;

export { 
    createArticleItem,
    createStoryItem,
    createSignIn,
    createSignUp 
};