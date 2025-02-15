-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-02-2025 a las 23:38:27
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `amount`, `description`, `img`, `name`, `price`) VALUES
(1, 7, 'Heroes y villas: estas tarjetas de juego DC Comics Joker cuentan con algunos de los personajes más icónicos de DC Comics, incluyendo Batman, Wonder Woman, Superman, y por supuesto, el propio Joker', 'camisa.png', 'Camiseta Jerks - Spiderman Parody Stan Lee Fan Art', 150000),
(2, 10, 'Carro control remoto', 'accesorio1.png', 'Batmobile Collectible Vehículo, Empaque estándar 6', 1100000),
(3, 0, 'Comic', 'comic1.png', 'Avangers Comic Movie Adaptation', 60000),
(4, 0, 'Item Type: Model\nGender: Unisex\nSize: 12\"\nWarning: NONE\nDimensions: 12inch/30cm', 'accesorio2.png', 'Iron Patriot Figura de Acción', 320000),
(9, 45, 'camiseta', 'camisa.png', 'La misma camisa', 70000),
(10, 5, 'Wolverine: Arma X\nLa colección definitiva de novelas gráficas de MARVEL', 'novela1.png', 'Wolverine: Arma X La colección definitiva de novelas gráficas de MARVEL', 29900),
(12, 5, 'Esta es otra prueba', 'libro1.png', 'Producto de prueba', 10000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKjmivyxk9rmgysrmsqw15lqr5b` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
