function comprar(producto){

let numero = "549XXXXXXXXXX"

let mensaje = "Hola, quiero consultar por la figura: " + producto

let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje)

window.open(url)

}