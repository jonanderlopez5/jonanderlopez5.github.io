<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

    // echo $nombre . '<br>';
    // echo $email . '<br>';
    // echo $mensaje;

    $headers .= "from: " . $nombre . " " . $email;

    mail('jonanderlopez5@gmail.com', 'mensaje desde la web', $mensaje, $headers);
    header("Location: http://jonanderlopez5.github.io");
}else{
    echo "nada";
}


