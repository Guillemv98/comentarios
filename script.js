/**
 * Created by root on 11/2/13.
 */

    $(document).ready(function(){
        $("#enviar").on('click', function(){
            var fecha= new Date();
            var fechaComentario= fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();

            var texto=$("#comentarios").val();
            var divComentarioEscrito= "<div class='comentario-enviado'>";
            var divCompleto=divComentarioEscrito+fechaComentario+texto+"</div>";
            $("#comentarios-escritos").prepend(divCompleto);
    });

});
