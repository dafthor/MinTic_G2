-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-10-2021 a las 03:41:09
-- Versión del servidor: 8.0.26
-- Versión de PHP: 8.0.10
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET
  time_zone = "+00:00";
  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;
--
  -- Base de datos: `minticg2`
  --
  CREATE DATABASE IF NOT EXISTS `minticg2`;
USE `minticg2`;
-- --------------------------------------------------------
  --
  -- Estructura de tabla para la tabla `usuarios`
  --
  CREATE TABLE `usuarios` (
    `id` int NOT NULL,
    `username` varchar(45) NOT NULL,
    `correo` varchar(45) DEFAULT NULL,
    `contrasena` varchar(45) DEFAULT NULL
  ) ENGINE = InnoDB;
--
  -- Volcado de datos para la tabla `usuarios`
  --
INSERT INTO
  `usuarios` (`id`, `username`, `correo`, `contrasena`)
VALUES
  (1, 'Carlos1', 'carlos@gmail.com', 'Segura123'),
  (2, 'Carlos1', 'carlos@gmail.com', 'Segura123'),
  (3, 'Mateo', 'mateo@hotmail.com', 'Segura024'),
  (4, 'Camilo3', 'camilo@hotmail.com', 'Segura357'),
  (5, 'Cesar4', 'cesar@gmail.com', 'Segura468'),
  (6, 'Pipe', 'pipe@hotmail.com', 'Segura975');
--
  -- Índices para tablas volcadas
  --
  --
  -- Indices de la tabla `usuarios`
  --
ALTER TABLE
  `usuarios`
ADD
  PRIMARY KEY (`id`);
--
  -- AUTO_INCREMENT de las tablas volcadas
  --
  --
  -- AUTO_INCREMENT de la tabla `usuarios`
  --
ALTER TABLE
  `usuarios`
MODIFY
  `id` int NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 7;
COMMIT;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;