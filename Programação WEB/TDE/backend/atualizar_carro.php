<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: PUT, OPTIONS");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();}  

    require_once 'conexao.php';

    $dados = json_decode(file_get_contents("php://input"), true);

    try{
        $sql = "UPDATE carros SET modelo = :modelo, marca = :marca, ano = :ano, preco = :preco WHERE id = :id AND ativo = 1;";
        $pstmt = $pdo->prepare($sql);
        $pstmt->execute([
            ':modelo' => $dados['modelo'],
            ':marca' => $dados['marca'],
            ':ano' => $dados['ano'],
            ':preco' => $dados['preco'],
            ':id' => $dados['id']
        ]);
        echo json_encode(["mensagem" => "Carro atualizado com sucesso!"]);
    }catch (PDOException $e){
         echo json_encode(["erro" => "Erro ao tentar atualizar o veículo!"]);
    }
?>