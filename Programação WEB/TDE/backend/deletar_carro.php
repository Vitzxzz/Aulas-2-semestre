<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: DELETE, OPTIONS");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();}  

    require_once 'conexao.php';

    $dados = json_decode(file_get_contents("php://input"), true);

     try{
        $sql = "UPDATE carros SET ativo = 0 WHERE id = :id;";
        $pstmt = $pdo->prepare($sql);
        $pstmt->execute([
            ':id' => $dados['id']
        ]);
        echo json_encode(["mensagem" => "O seu carro foi deletado com sucesso."]);
    }catch (PDOException $e){
         echo json_encode(["erro" => "Erro ao tentar deletar o veículo."]);
    }
?>