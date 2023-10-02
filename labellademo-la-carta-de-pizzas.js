// URL de la API para obtener la carta
var url = "https://software.gastrokaizen.com/CartaDigital/wpBFujVYJxksTCWF/0?lang=es";
// Token de la API
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRlIjo3MTIwLCJsb2NhbCI6MX0.VAHlXV4j96aSsacFTVhW5afs6UndYOQ6FShe0Xxuusk";
// Realiza una petición GET a la URL
fetch(url, {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + token
    }
})
.then(response => response.json()) // convierte la respuesta en un objeto JSON
.then(data => {
    // Obtiene el div donde se mostrará la carta
    var cartaDiv = document.getElementById("carta");
    // Añade el nombre de la carta al div
    cartaDiv.innerHTML = "<h1>" + data.nombre + "</h1>";
    // Añade cada plato de la carta al div
    data.composicion.forEach(plato => {
        cartaDiv.innerHTML += "<h2>" + plato.nombre + "</h2>";
        cartaDiv.innerHTML += "<p>" + plato.descripcion + "</p>";
        cartaDiv.innerHTML += "<p>Precio: " + plato.pvp + "€</p>";
    });
});
