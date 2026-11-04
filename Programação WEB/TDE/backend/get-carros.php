<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();}   

        require_once 'conexao.php';

    try {
        $pstmt = $pdo->prepare("SELECT * FROM carros WHERE ativo = 1;");
        $pstmt->execute();
        $dados = $pstmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($dados);  
    } catch (PDOException $e){
            echo json_encode(["erro" => "Erro ao tentar buscar os registros!"]);
    }
?>