const Locator = {
    async render() {
        return `
        <h3 class='title'>LOKASI</h3>
        <p class='sub-title'>Temukan lokasi Psikolog, Psikiater, atau Pusat Kesehatan Masyarakat terdekat<p>
        <div id='maps' class='container'>
            <div id='map'></div>
        </div>
        `;
    },
    
    async afterRender() {
        const places = L.layerGroup();
        
        const hospital = L.marker([-6.19807, 106.846933]).bindPopup('Rumah Sakit Cipto Mangunkusumo<br>Rating: 4.0 ⭐⭐⭐⭐').addTo(places);
        const psikolog = L.marker([-6.2721037, 106.762584]).bindPopup('Yayasan Praktek Psikolog Indonesia<br>Rating: 4.7 ⭐⭐⭐⭐⭐<br>Jam Operasional: Setiaphari (08.00-20.00)').addTo(places);
        const psikiater = L.marker([-6.2780448, 106.7134046]).bindPopup('Spesialis Psikiater<br>Rating: 4.0 ⭐⭐⭐⭐<br>Jam Operasional: Setiap hari (09.00-17.00)').addTo(places);
        const psikologJey = L.marker([-6.2841775,106.6069743]).bindPopup('Psikolog Jennyfer<br>Rating: 4.0 ⭐⭐⭐⭐<br>Jam Operasional:<br>Senin-Sabtu (11.00-19.00)<br>Minggu (Tutup)').addTo(places);
        const hospitalPermata = L.marker([-6.218975, 106.777625]).bindPopup('RS Medika Permata Hijau<br>Rating: 3.6 ⭐⭐⭐⭐<br>Jam Operasional: Setiap hari (24 jam)').addTo(places);
        const hospitalPertamina = L.marker([-6.240434, 106.793332]).bindPopup('RS Pusat Pertamina <br> Rating: 4.0 ⭐⭐⭐⭐<br>Jam operasional: Setiap hari (24 jam)').addTo(places);
        const pPesona = L.marker([-6.144066480997596, 106.53667608475351]).bindPopup('Biro Konsultasi Psikologi Pesona <br> Rating: 5.0 ⭐⭐⭐⭐⭐<br>Jam operasional:<br>Senin-Kamis (08.00-21.00)<br>Jumat-Sabtu (08.00-09.00)<br>Minggu (Tutup)').addTo(places);
        const pHaji = L.marker([-6.289527681356759, 106.88930758455315]).bindPopup('Haji Jakarta Hospital<br>Rating: 3.6 ⭐⭐⭐⭐<br>Jam Operasional: Setiaphari (24 jam)').addTo(places);
        const psikiaterPolri = L.marker([-6.268059862098546, 106.87015122237328]).bindPopup('Instalasi Pelayanan Psikologi RS. Polri Kramat Jati<br>Rating: 4.8 ⭐⭐⭐⭐⭐<br>Jam Operasional:<br>Senin-Jumat (07.00-15.00)<br>Sabtu-Minggu (Tutup)').addTo(places);
        const ruangTumbuh = L.marker([-6.281113289731029, 106.91383904353629]).bindPopup('Ruang Tumbuh<br>Rating: 5.0 ⭐⭐⭐⭐⭐<br>Jam Operasional:<br>Senin-Sabtu (08.00-17.00)<br>Minggu (Tutup)').addTo(places);
        const indonesiaSehat = L.marker([-6.294735462081809, 106.92890838774669]).bindPopup('INDONESIA SEHAT Biro Psikologi dan Konsultasi : Jasa Psikolog<br>Rating: 5.0 ⭐⭐⭐⭐⭐<br>Jam Operasional: Setiap hari(09.00-17.00)').addTo(places);
        const psikiaterIbunda= L.marker([-6.28859093072615, 106.81899614967533]).bindPopup('Ibunda.id<br>Rating: 4.9 ⭐⭐⭐⭐⭐<br>Jam Operasional:<br>Senin-Sabtu (10.00-19.00)<br>Minggu (Tutup)').addTo(places);
        
        const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
        const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        
        const grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
        const streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
        
        const map = L.map('map', {
            center: [-6.176908, 106.827106],
            zoom: 11,
            layers: [grayscale, places]
        });
        
        const baseLayers = {
            'Grayscale': grayscale,
            'Streets': streets
        };
        
        const overlays = {
            'Places': places
        };
        
        const layerControl = L.control.layers(baseLayers, overlays).addTo(map);
    },
}

export default Locator;
