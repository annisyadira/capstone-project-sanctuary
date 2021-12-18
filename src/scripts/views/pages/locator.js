const Locator = {
    async render() {
        return `
        <h3 class='title'>LOKASI</h3>
        <p class='sub-title'>Temukan lokasi Psikolog, Psikiater, atau Pusat Kesehatan Masyarakat terdekat<p>
        <div id='body' class='container'>
            <div id="map"></div>
        </div>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPpkEPb6xeoQuPnXPBgZSUYCOCUGablkU&callback=initMap"></script>
        `;
    },

    async afterRender() {
        function initMap() {
            const semarang = { lat: 7.1510, lng: 110.1403 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6,
                center: semarang,
            });
            const marker = new google.maps.Marker({
                position: semarang,
                map: map,
            });
        }
    }
}

export default Locator;
