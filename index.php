<?php
$conection=mysqli_connect('localhost','root','root','COMENTARIOS')or die ("mysql muere");
$resultado= $conection->query("SELECT texto FROM comentario");

?>
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>COMENTARIOS</title>
    <link rel="stylesheet" type="text/css" a href="estilo.css">
    <script src="jquery.js"></script>
    <script src="script.js"></script>

</head>
<body>

    <h1><font face="bolsterbold,bold">COMENTARIOS</font></h1>
    <textarea placeholder= "escriba aquí su nombre" id="comentarios"></textarea>
    <button id="enviar">ENVIAR</button>
    <?php
        $arrayResultado=mysqli_fetch_array($resultado);
        echo "<div class='comentario-enviado'>".$arrayResultado[0];
        echo "<span class='fecha'>".date("H:i:s")."</date></span>";
        echo "<img class='¿Desea eliminar el comentario?' src='cancel.png'></div>";
    ?>
    <div id="comentarios-escritos"></div>
    <div></div>

</body>
</html>
