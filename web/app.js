const NASHUA = [42.7654, -71.4676];
const map = L.map('map').setView(NASHUA, 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Blue dot for user location
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(pos => {
    const latlng = [pos.coords.latitude, pos.coords.longitude];
    if (!window.userMarker) {
      window.userMarker = L.circleMarker(latlng, {
        radius: 8,
        color: '#007bff',
        fillColor: '#007bff',
        fillOpacity: 0.8
      }).addTo(map).bindPopup('You');
    } else {
      window.userMarker.setLatLng(latlng);
    }
    map.panTo(latlng);
  }, () => map.setView(NASHUA, 13), { enableHighAccuracy: true });
} else {
  map.setView(NASHUA, 13);
}