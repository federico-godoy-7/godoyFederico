
// TP INTEGRADOR 
const resultado = document.getElementById("resultado");
let usuario = null;
let marcador = null;

var mapa = L.map('mapa').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(mapa);

function buscarUsuario() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {

      usuario = data.results[0];
      console.log(usuario);

      const lat = parseFloat(usuario.location.coordinates.latitude);
      const lon = parseFloat(usuario.location.coordinates.longitude);

      if (marcador) {
        mapa.removeLayer(marcador);
      }

      mapa.setView([lat, lon], 8);
      marcador = L.marker([lat, lon]).addTo(mapa);


      resultado.innerHTML = `
        <p><strong>Nombre completo:</strong> ${usuario.name.first} ${usuario.name.last}</p>
        <img src="${usuario.picture.large}" alt="foto" />
        <p><strong>Correo:</strong> ${usuario.email}</p>
        <p><strong>Teléfono:</strong> ${usuario.phone}</p>
        <p><strong>Ciudad y país:</strong> ${usuario.location.city}, ${usuario.location.country}</p>
        <p><strong>Nacionalidad:</strong> ${usuario.nat}</p>
        <p><strong>Coordenadas:</strong> ${lat}, ${lon}</p>`
    }); 
}