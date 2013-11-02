/**
 * Created by root on 11/2/13.
 */

$(document).ready(function() {
    $("#enviar").on('click',function(){
        var texto=$("#comentarios").val();
        var fecha= new Date();
        var cruz= "<img class='eliminar' src='cancel.png'>"+"</img>";
        var fechaComentario= "<span class='fecha'>"+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"</span>";
        var divComentarioEscrito= "<div class='comentario-enviado'>";
        var divCompleto= divComentarioEscrito+fechaComentario+"   "+texto+"   "+cruz+"</div>";
        $("#comentarios-escritos").prepend(divCompleto);
    });

    // Note the amended selector here...
    $("#comentarios-escritos").on('click', '.eliminar', function(){
        alert("ELIMINAR");
    });

});
