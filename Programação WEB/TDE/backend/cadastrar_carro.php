<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    header("Access-Control-Allow-Methods: POST, OPTIONS");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();}  

    require_once 'conexao.php';

    $dados = json_decode(file_get_contents("php://input"), true);

    try{
        $sql = "INSERT INTO carros (modelo, marca, ano, preco) VALUES (:modelo, :marca, :ano, :preco);";
        $pstmt = $pdo->prepare($sql);
        $pstmt->execute([
            ':modelo' => $dados['modelo'],
            ':marca' => $dados['marca'],
            ':ano' => $dados['ano'],
            ':preco'  => $dados['preco']
        ]);
        echo json_encode(["mensagem" => "Carro cadastrado com sucesso!"]);
    }catch (PDOException $e){
         echo json_encode(["erro" => "Erro ao tentar cadastrar o veículo!"]);
    }
?>