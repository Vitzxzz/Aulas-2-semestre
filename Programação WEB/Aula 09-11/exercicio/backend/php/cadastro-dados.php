<?php
// configuração de segurança
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

//captura o post e transforma o json em um array
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

//acessa o array e joga o valor para as variaveis
$nome = $data['nome'] ?? "sem nome";
$idade = $data['idade'] ?? "sem idade";

//acessando o json
date_default_timezone_set('America/Sao_Paulo');
$timestamp = date("Y-m-d H:i:s");

$arrayData = [
    "timestamp" => $timestamp, 
    "nome" => $nome,
    "idade" => $idade
];

//le o arquivo
$dados = file_get_contents("cadastro-dados.json");

//transforma o json em legivel php
$lista = json_decode($dados,true);

$lista[] = $arrayData;

//transforma o array do php em json dnv
$jsonString = json_encode($lista, JSON_PRETTY_PRINT);

//salva
file_put_contents('cadastro-dados.json', $jsonString);

//resposta para o front
echo json_encode([
    "status" => "success",
    "message" => "Recebi $nome e $idade"
]);
?>