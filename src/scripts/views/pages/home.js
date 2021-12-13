const Home = {
    async render() {
        return `
        <!--Hero-->
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="container text-center text-md-left" data-aos="fade-up">
            <h1>Selamat Datang di <span>Sanctuary</span></h1>
            <p>Bersama kita akan menjadi lebih kuat<br>Tempat belajar, mencari bantuan, dan menjadi bagian dari komunitas</p>
            <a href="#learn-more" class="btn-read-more scrollto">Read More</a>
            </div>
        </section>

        <!--locator-->
        <div id=main-content class="feeds">
            <section id="locator" class="locator">
                <div class="container">
          
                    <div class="section-title">
                        <h2>Lokasi</h2>
                        <p>Tempat dimana kita dapat melihat rekomentasi lokasi dari psikolog dan psikiater terdekat.</p>
                    </div>
                    <div class="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
    
            <!--Learn More-->
            <section id="learn-more" class="learn-more">
                <div class="container">
                    
                    <div class="section-title">
                        <h2>Artikel</h2>
                        <p>Kesehatan mental itu penting karena mempengaruhi segalanya. Dapat mempengaruhi kemampuan kita cepat untuk mengatasi, beradaptasi, dan memecahkan masalah. 
                            <br>Dapat juga memengaruhi kebahagiaan kita, aktvitas produktif, dan menyesuaikan diri dengan baik.</p>
                    </div>
    
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="./images/assets/learn-more.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <div>

                            </div>
                            <h3>Pada Artikel kita dapat mempelajari lebih jauh tentang pentingnya kesehatan mental </h3>
                            <p>
                                Kesehatan mental mempengaruhi emosional, psikologis, dan sosial.<br><br>
                                Learn more, disana kamu dapat menemukan hal yang ingin kamu pahami. Kamu dapat menemukan tentang peringatan dini akan kesehatan mental,
                                dimana kesehatan mental mempengaruhi cara kita berpikir, merasakan, dan berprilaku.
                            </p>
                            <ul>
                                <li><i class="bi bi-check-circled"></i> Mengetahui gejala dini mental illness.</li>
                                <li><i class="bi bi-check-circled"></i> Membedakan Psikiater dan Psikolog.</li>
                                <li><i class="bi bi-check-circled"></i> Diagnosis Mental illness.</li>
                            </ul>
                            <p>
                                "Setiap masalah pasti punya solusi, jangan mudah menyerah dengan keadaan. Cobalah liat dunia
                                luar, lalu lihatlah kebawah kamu akan menemukan hal yang tidak pernah kamu duga. Jadi, hargailah
                                dan sanyangi dirimu sendiri."
                            </p>
                            <center>
                                <a href="" class="btn-go-to scrollto">Go to</a>
                            </center>
                        </div>
                    </div>
                </div>
            </section>
    
            <!--Their Stories-->
            <section id="their-stories" class="their-stories">
                <div class="container">
                    
                    <div class="section-title">
                        <h2>Kisah</h2>
                        <p>Jadilah bagian dari komunitas. Bacalah kisah-kisah inspiratif tentang orang-orang dari seluruh dunia yang mampu bangkit dari keterpurukan.</p>
                    </div>
    
                    <div class="row">
                        <div class="col-lg-6">
                            <img src="./images/assets/their-stories.jpg" class="img-fluid" alt="">
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Tidak apa-apa jika kamu ingin menyembunyikan perasaanmu. Kami ada disini untuk menolong kamu, kamu tidak sendiri.</h3>
                            <p>
                                Kamu dapat melihat kisah-kisah inspirasi yang dapat membangkitkan semangat dari keterpurukan. Mereka bercerita bagaimana cara mereka bisa bangkit dari keterpurukan.<br>
                                <br>Disini kamu dapat berbagi kisah bersama mereka. Melalui kisah yang kamu ceritakan bisa menjadi motivasi bagi mereka.
                            </p>
                            <center>
                                <a href="" class="btn-go-to scrollto">Go to</a>
                            </center>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        `;
    },
}

export default Home;
