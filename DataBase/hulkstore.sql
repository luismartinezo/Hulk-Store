-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 05-02-2020 a las 18:28:07
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hulkstore`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `img` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_sat8uh55mbbue8o6g5s6vb23j` (`nombre_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre_producto`, `precio`, `descripcion`, `img`, `cantidad`) VALUES
(1, 'Camiseta Jerks - Spiderman Parody Stan Lee Fan Art', 150000, 'Heroes y villas: estas tarjetas de juego DC Comics Joker cuentan con algunos de los personajes más icónicos de DC Comics, incluyendo Batman, Wonder Woman, Superman, y por supuesto, el propio Joker', 'camisa.png', 7),
(2, 'Batmobile Collectible Vehículo, Empaque estándar 6', 1100000, 'Carro control remoto', 'accesorio1.png', 10),
(3, 'Avangers Comic Movie Adaptation', 60000, 'Comic', 'comic1.png', 0),
(4, 'Iron Patriot Figura de Acción', 320000, 'Item Type: Model\nGender: Unisex\nSize: 12\"\nWarning: NONE\nDimensions: 12inch/30cm', 'accesorio2.png', 0),
(9, 'La misma camisa', 70000, 'camiseta', 'camisa.png', 45),
(10, 'Wolverine: Arma X La colección definitiva de novelas gráficas de MARVEL', 29900, 'Wolverine: Arma X\nLa colección definitiva de novelas gráficas de MARVEL', 'novela1.png', 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
