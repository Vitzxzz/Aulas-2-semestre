CREATE SCHEMA TDE_CARROS;

USE tde_carros;

CREATE TABLE carros(
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(45) NOT NULL,
    marca VARCHAR(45) NOT NULL,
    ano INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    ativo INT DEFAULT 1
);

INSERT INTO carros (modelo, marca, ano, preco)
VALUES ("CRUZE", "CHEVROLET", 2022, 85000);

SELECT * FROM carros