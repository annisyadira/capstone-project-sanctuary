const AboutUs = {
    async render() {
        return `
        <div class="about-section">
            <h1>Tentang Kami</h1>
            <p>Mari mengenal siapa di balik Sanctuary</p>
        </div>
        <div id="content">
            <h2 style="text-align:center">OUR TEAM</h2>
            <div class="row">
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
        </div>
        `;
    },

    async afterRender() {
        const container = document.querySelector('#content');
        container.innerHTML = createAboutUs();
    },
}

export default AboutUs;
