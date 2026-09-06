<?php

header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");
header("Acess-Control-Allow-Headers: *");

date_default_timezone_set("America/Sao_Paulo");

$dadosRecebidos = file_get_contents("php://input");

$usuario = json_decode($dadosRecebidos, true);

if ($usuario === null) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "não foi possível receber os dados"
    ]);
    exit;
}

$local = "./dados/dados.json";

$conteudo = file_get_contents($local);

$usuarios = json_decode($conteudo, true);
//encriptando a senha antes de enviar para o json
$usuario["senha"] = sha1($usuario["senha"]);

$usuarios[] = $usuario;

file_put_contents(
    $local,
    json_encode($usuarios, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
);

echo json_encode([
    "sucesso" => true,
    "mensagem" => "usuario cadastrado!"
]);

?>