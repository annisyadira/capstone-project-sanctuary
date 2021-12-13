const createArticleItem = (article) => `
    <article class='item'>
        <h3 class='item-title'>${article.title}</h3>
        <p>${article.content}</p>
        <a class='article-detail' id='article-detail' href='#/article-detail/${article.id_article}'>Baca Selengkapnya.</a>
    </article>
`;

const createStoryItem = (story) => `
    <article class='item'>
        <h3 class='item-title'>${story.title}</h3>
        <p>${story.content}</p>
        <a class='story-detail' id='story-detail' href='#/story-detail/${story.id_story}'>Baca Selengkapnya.</a>
    </article>
`;

const createInputStory = () => `
    <h3 class='title'>TULIS DAN BAGIKAN CERITAMU</h3>
    <div id='write-story'>  
        <div class="form-group">
            <input type="string" id='addTitle' class="form-control" placeholder="Judul" required>
        </div>
        <div class="form-group">
            <input type="string" id='addContent' class="form-control" placeholder="Isi" required>
        </div>
    </div>
    <button type='submit' class='btn btn-warning btn-lg' id='submitBtn'>Bagikan</button>
`;

const createSignIn = () => `
    <h3 class='title'>MASUK</h3>
    <div id='sign-form' class='card'>
        <h4>username</h4>
        <input type='string' class='form-control' id='usernameInput' placeholder='username' required>
        <h4>password</h4>
        <input type='password' class='form-control' id='passwordInput' minlength='6' placeholder='password' required>
    </div>
    <h3 class='switch'>Belum punya akun? <a href='#/signup'>Daftar sekarang!</a></h3>
    <button type='submit' class='btn btn-dark btn-lg' id='submitBtn'>Masuk</button>
`;

const createSignUp = () => `
    <h3 class='title'>DAFTAR</h3>
    <div id='sign-form' class='card'>
        <h4>e-mail</h4>
        <input type='string' class='form-control' id='emailInput' placeholder='e-mail' required>
        <h4>username</h4>
        <input type='string' class='form-control' id='usernameInput' placeholder='username' required>
        <h4>password</h4>
        <input type='password' class='form-control' id='passwordInput' minlength='6' placeholder='minimal 6 karakter' required>
    </div>
    <h3 class='switch'>Sudah punya akun? <a href='#/signin'>Masuk!</a></h3>
    <button type='submit' class='btn btn-dark btn-lg' id='submitBtn'>Daftar</button>
`;

const createAboutUs = () => `
    <h2 style="text-align:center">OUR TEAM</h2>
    <div id="team" class="row">
        <div class="column">
            <div class="card">
                <center>
                    <img src="./images/annisya.jpg" alt="Annisya" style="width:70%">
                </center>
                <div class="container">
                    <h2>Annisya Dira Prastiwi</h2>
                    <p class="title">Front-End and Back-End Developer</p>
                    <p>Seorang mahasiswi yang memiliki ketertarikan dalam bidang IT</p>
                    <a class="button" href="https://github.com/annisyadira" target="_blank" rel="noopener">Contact</a>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <center>
                    <img src="./images/via.jpg" alt="Via" style="width:70%">
                </center>
                <div class="container">
                    <h2>Selvia Eldina</h2>
                    <p class="title">Front-End and Back-End Developer</p>
                    <p>Seorang mahasiswi yang memiliki ketertarikan dalam bidang IT</p>
                    <a class="button" href="https://www.linkedin.com/in/selvia-eldina-35840621b/" target="_blank" rel="noopener">Contact</a>
                </div>
            </div>
        </div>
    </div>
`;

const createArticleDetailTemplate = (article) => `
    <div class="row">
        <div class="detail">
            <div class="card">
                <h3 class="item-title">${article.title}</h3>
                <p>${article.content}</p>
            </div>
        </div>
    </div>
`;

const createStoryDetailTemplate = (story) => `
    <div class="row">
        <div class="detail">
            <div class="card">
                <h3 class="item-title">${story.title}</h3>
                <p>${story.content}</p>
            </div>
        </div>
    </div>
`;

export { 
    createArticleItem,
    createStoryItem,
    createInputStory,
    createSignIn,
    createSignUp,
    createAboutUs,
    createArticleDetailTemplate,
    createStoryDetailTemplate
};
