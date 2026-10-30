<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $host = "localhost";
    $banco = "meteflix";
    $user = "root";
    $senha = "1234";

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$banco",$user,$senha);
        $sql = $pdo->query("SELECT * FROM meteflix.filmes;");
        $dados = $sql->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($dados);
    } catch (PDOException $e){
        echo json_encode(["erro" => $e->getMessage()]);
    }
?>