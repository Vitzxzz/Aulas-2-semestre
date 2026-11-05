<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Headers: Content-Type");

    $host = "localhost";
    $banco = "tde_carros";
    $user = "root";
    $senha = "1234";

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$banco",$user,$senha);
    } catch (PDOException $e){
        echo json_encode(["erro" => "Erro de conexão."]);
    }
?>
