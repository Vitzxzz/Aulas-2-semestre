<?php
// configuração de segurança
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

//captura o post e transforma o json em um array
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

//acessa o array e joga o valor para as variaveis
$username = $data['nome'] ?? "sem nome";
$password = $data['senha'] ?? "sem senha";

/*
"timestamp": 04/09/26 09:56,
"username": mateus,
"senha": oiasjd8a9hdsoaishdas9dh8
*/

//acessando o json
date_default_timezone_set('America/Sao_Paulo');
$timestamp = date("Y-m-d H:i:s");

$arrayData = [
    "timestamp" => $timestamp, 
    "username" => $username,
    "password" => sha1($password)
];

$jsonString = json_encode($arrayData, JSON_PRETTY_PRINT);
file_put_contents('dados.json', $jsonString);

//resposta para o front
echo json_encode([
    "status" => "success",
    "message" => "Recebi $username e $password"
]);










?>