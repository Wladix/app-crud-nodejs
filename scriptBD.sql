CREATE DATABASE BD_tarea_crud;

CREATE TABLE `BD_tarea_crud`.`cliente` (
  `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL DEFAULT '',
  `apellido` VARCHAR(100) NOT NULL DEFAULT '',
  `usuario` VARCHAR(100) NOT NULL DEFAULT '',
  `contrasena` VARCHAR(50) NOT NULL DEFAULT '',
  PRIMARY KEY(`id`)
)
ENGINE = InnoDB
CHARACTER SET utf8;