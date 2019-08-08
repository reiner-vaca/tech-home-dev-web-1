function leerArchivo(input) {
    if (input.files && input.files[0]) {
        var leer = new FileReader();
        leer.onload = function(e) {
            //console.log(e.target.result)
            var img = document.getElementById("mostrarImg");
            img.src = e.target.result;
        }
        leer.readAsDataURL(input.files[0]);
    }
}
var imagen = document.getElementById("foto");

imagen.onchange = function (e) {
    leerArchivo(e.srcElement);
}
