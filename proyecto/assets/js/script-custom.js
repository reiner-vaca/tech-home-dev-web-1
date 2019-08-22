/* USANDO JQUERY */

$(document).ready(function(){

    /* Evento show modal */
    $('#modal-images').on('show.bs.modal', function (event) {
        console.info(event)
        var img = $(event.relatedTarget)
        console.info(img) 
        var ruta = img.data('img')
        console.info(ruta)
        $("#img-modal").attr("src",ruta);
           
    })
});




