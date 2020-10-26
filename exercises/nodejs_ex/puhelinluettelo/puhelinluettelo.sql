-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.5.5-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for puhelinluettelo
CREATE DATABASE IF NOT EXISTS `puhelinluettelo` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci */;
USE `puhelinluettelo`;

-- Dumping structure for taulu puhelinluettelo.henkilot
CREATE TABLE IF NOT EXISTS `henkilot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nimi` varchar(50) DEFAULT NULL,
  `puhelin` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8;

-- Dumping data for table puhelinluettelo.henkilot: ~178 rows (suunnilleen)
/*!40000 ALTER TABLE `henkilot` DISABLE KEYS */;
INSERT INTO `henkilot` (`id`, `nimi`, `puhelin`) VALUES
	(1, 'Routalempi Pekka', '0441234567'),
	(2, 'Repomies Rauno', '0212345678'),
	(3, 'Naamio Musta', '044-6544655'),
	(4, 'Ankka Iines', '044-3434343'),
	(6, 'Ankka Roope', '050-1231232'),
	(7, 'Ankka Roope', '050-1231232'),
	(8, 'Ankka Roope', '050-1231232'),
	(9, 'Ankka Roope', '050-1231232'),
	(10, 'Ankka Roope', '050-1231232'),
	(11, 'Ankka Roope', '050-1231232'),
	(12, 'Ankka Roope', '050-1231232'),
	(13, 'Ankka Roope', '050-1231232'),
	(14, 'Ankka Roope', '050-1231232'),
	(15, 'Ankka Roope', '050-1231232'),
	(16, 'Ankka Roope', '050-1231232'),
	(18, 'Matti Miettinen', '044-5431232'),
	(19, 'Matti Miettinen', '044-5431232'),
	(20, 'Ankka Roope', '050-1231232'),
	(21, 'Matti Miettinen', '044-5431232'),
	(22, 'Matti Miettinen', '044-5431232'),
	(23, 'Ankka Roope', '050-1231232'),
	(24, 'Matti Miettinen', '044-5431232'),
	(25, 'Ankka Roope', '050-1231232'),
	(26, 'Matti Miettinen', '044-5431232'),
	(27, 'Ankka Roope', '050-1231232'),
	(28, 'Matti Miettinen', '044-5431232'),
	(29, 'Ankka Roope', '050-1231232'),
	(30, 'Matti Miettinen', '044-5431232'),
	(31, 'Ankka Roope', '050-1231232'),
	(32, 'Matti Miettinen', '044-5431232'),
	(33, 'Ankka Roope', '050-1231232'),
	(34, 'Matti Miettinen', '044-5431232'),
	(35, 'Ankka Roope', '050-1231232'),
	(36, 'Matti Miettinen', '044-5431232'),
	(37, 'Ankka Roope', '050-1231232'),
	(38, 'Matti Miettinen', '044-5431232'),
	(39, 'Ankka Roope', '050-1231232'),
	(40, 'Matti Miettinen', '044-5431232'),
	(41, 'Matti Miettinen', '044-5431232'),
	(42, 'Matti Miettinen', '044-5431232'),
	(43, 'Matti Miettinen', '044-5431232'),
	(44, 'Ankka Roope', '050-1231232'),
	(47, 'Matti Miettinen', '044-5431232'),
	(48, 'Ankka Roope', '050-1231232'),
	(49, 'Matti Miettinen', '044-5431232'),
	(50, 'Ankka Roope', '050-1231232'),
	(51, 'Matti Miettinen', '044-5431232'),
	(52, 'Ankka Roope', '050-1231232'),
	(53, 'Matti Miettinen', '044-5431232'),
	(54, 'Ankka Roope', '050-1231232'),
	(55, 'Matti Miettinen', '044-5431232'),
	(56, 'Ankka Roope', '050-1231232'),
	(57, 'Matti Miettinen', '044-5431232'),
	(58, 'Ankka Roope', '050-1231232'),
	(59, 'Matti Miettinen', '044-5431232'),
	(60, 'Ankka Roope', '050-1231232'),
	(61, 'Matti Miettinen', '044-5431232'),
	(62, 'Ankka Roope', '050-1231232'),
	(63, 'Matti Miettinen', '044-5431232'),
	(64, 'Ankka Roope', '050-1231232'),
	(65, 'Matti Miettinen', '044-5431232'),
	(66, 'Ankka Roope', '050-1231232'),
	(67, 'Matti Miettinen', '044-5431232'),
	(68, 'Ankka Roope', '050-1231232'),
	(69, 'Matti Miettinen', '044-5431232'),
	(70, 'Ankka Roope', '050-1231232'),
	(71, 'Matti Miettinen', '044-5431232'),
	(72, 'Ankka Roope', '050-1231232'),
	(73, 'Matti Miettinen', '044-5431232'),
	(74, 'Ankka Roope', '050-1231232'),
	(75, 'Matti Miettinen', '044-5431232'),
	(76, 'Ankka Roope', '050-1231232'),
	(77, 'Matti Miettinen', '044-5431232'),
	(78, 'Ankka Roope', '050-1231232'),
	(79, 'Matti Miettinen', '044-5431232'),
	(80, 'Ankka Roope', '050-1231232'),
	(81, 'Matti Miettinen', '044-5431232'),
	(82, 'Ankka Roope', '050-1231232'),
	(83, 'Matti Miettinen', '044-5431232'),
	(84, 'Ankka Roope', '050-1231232'),
	(85, 'Matti Miettinen', '044-5431232'),
	(86, 'Ankka Roope', '050-1231232'),
	(87, 'Matti Miettinen', '044-5431232'),
	(88, 'Ankka Roope', '050-1231232'),
	(89, 'Matti Miettinen', '044-5431232'),
	(90, 'Ankka Roope', '050-1231232'),
	(91, 'Matti Miettinen', '044-5431232'),
	(92, 'Ankka Roope', '050-1231232'),
	(93, 'Matti Miettinen', '044-5431232'),
	(94, 'Ankka Roope', '050-1231232'),
	(95, 'Matti Miettinen', '044-5431232'),
	(96, 'Ankka Roope', '050-1231232'),
	(97, 'Matti Miettinen', '044-5431232'),
	(98, 'Ankka Roope', '050-1231232'),
	(99, 'Matti Miettinen', '044-5431232'),
	(100, 'Ankka Roope', '050-1231232'),
	(101, 'Matti Miettinen', '044-5431232'),
	(102, 'Ankka Roope', '050-1231232'),
	(103, 'Matti Miettinen', '044-5431232'),
	(104, 'Ankka Roope', '050-1231232'),
	(105, 'Matti Miettinen', '044-5431232'),
	(106, 'Ankka Roope', '050-1231232'),
	(107, 'Matti Miettinen', '044-5431232'),
	(108, 'Ankka Roope', '050-1231232'),
	(109, 'Matti Miettinen', '044-5431232'),
	(110, 'Ankka Roope', '050-1231232'),
	(111, 'Matti Miettinen', '044-5431232'),
	(112, 'Ankka Roope', '050-1231232'),
	(113, 'Matti Miettinen', '044-5431232'),
	(114, 'Ankka Roope', '050-1231232'),
	(115, 'Matti Miettinen', '044-5431232'),
	(116, 'Ankka Roope', '050-1231232'),
	(117, 'Matti Miettinen', '044-5431232'),
	(118, 'Ankka Roope', '050-1231232'),
	(119, 'Matti Miettinen', '044-5431232'),
	(120, 'Ankka Roope', '050-1231232'),
	(121, 'Matti Miettinen', '044-5431232'),
	(122, 'Ankka Roope', '050-1231232'),
	(123, 'Matti Miettinen', '044-5431232'),
	(124, 'Ankka Roope', '050-1231232'),
	(125, 'Matti Miettinen', '044-5431232'),
	(126, 'Ankka Roope', '050-1231232'),
	(127, 'Matti Miettinen', '044-5431232'),
	(128, 'Ankka Roope', '050-1231232'),
	(129, 'Matti Miettinen', '044-5431232'),
	(130, 'Ankka Roope', '050-1231232'),
	(131, 'Matti Miettinen', '044-5431232'),
	(132, 'Ankka Roope', '050-1231232'),
	(133, 'Matti Miettinen', '044-5431232'),
	(134, 'Ankka Roope', '050-1231232'),
	(135, 'Matti Miettinen', '044-5431232'),
	(136, 'Ankka Roope', '050-1231232'),
	(137, 'Matti Miettinen', '044-5431232'),
	(138, 'Ankka Roope', '050-1231232'),
	(139, 'Matti Miettinen', '044-5431232'),
	(140, 'Ankka Roope', '050-1231232'),
	(141, 'Matti Miettinen', '044-5431232'),
	(142, 'Ankka Roope', '050-1231232'),
	(143, 'Ankka Roope', '050-1231232'),
	(144, 'Matti Miettinen', '044-5431232'),
	(145, 'Ankka Roope', '050-1231232'),
	(146, 'Matti Miettinen', '044-5431232'),
	(147, 'Ankka Roope', '050-1231232'),
	(148, 'Matti Miettinen', '044-5431232'),
	(149, 'Ankka Roope', '050-1231232'),
	(150, 'Matti Miettinen', '044-5431232'),
	(151, 'aku', '123'),
	(152, 'aku', '123'),
	(153, 'aku', '123'),
	(154, 'aku', '123'),
	(155, 'aku', '123'),
	(156, 'aku', '444'),
	(157, 'aku', '444'),
	(158, 'aku', '444'),
	(159, 'aku', '444'),
	(160, 'aku', '444'),
	(161, 'aku', '444'),
	(162, 'aku', '444'),
	(163, 'aku', '444'),
	(164, 'aku', '444'),
	(165, 'aku', '444'),
	(166, 'aku', '444'),
	(167, 'aku', '444'),
	(168, 'aku', '444'),
	(169, 'aku', '444'),
	(170, 'aku', '444'),
	(171, 'aku', '444'),
	(172, 'aku', '444'),
	(173, 'aku', '444'),
	(174, 'aku', '444'),
	(175, 'aku', '444'),
	(176, 'aku', '444'),
	(177, 'aku', '444'),
	(178, 'aku', '444'),
	(179, 'aku', '444'),
	(180, 'aku', '444'),
	(181, 'aku', '444'),
	(182, 'aku', '444');
/*!40000 ALTER TABLE `henkilot` ENABLE KEYS */;

-- Dumping structure for proseduuri puhelinluettelo.sp_delete_henkilo
DELIMITER //
CREATE PROCEDURE `sp_delete_henkilo`(
	IN `henkilo_id` INT
)
BEGIN
	DELETE FROM henkilot WHERE henkilot.id = henkilo_id LIMIT 1;
END//
DELIMITER ;

-- Dumping structure for proseduuri puhelinluettelo.sp_get_henkilon_tiedot
DELIMITER //
CREATE PROCEDURE `sp_get_henkilon_tiedot`(
	IN `henkilo_id` INT
)
BEGIN
	SELECT id, nimi, puhelin FROM henkilot WHERE id = henkilo_id;
END//
DELIMITER ;

-- Dumping structure for proseduuri puhelinluettelo.sp_get_henkilot
DELIMITER //
CREATE PROCEDURE `sp_get_henkilot`()
BEGIN  
         SELECT id,nimi,puhelin FROM henkilot;
    END//
DELIMITER ;

-- Dumping structure for proseduuri puhelinluettelo.sp_insert_henkilo
DELIMITER //
CREATE PROCEDURE `sp_insert_henkilo`(
	OUT `henkilo_id` INT,
	IN `henkilo_nimi` VARCHAR(25),
	IN `henkilo_puhelin` VARCHAR(25)
)
BEGIN
	INSERT INTO henkilot(nimi,puhelin) VALUES (henkilo_nimi,henkilo_puhelin);
	SET henkilo_id = LAST_INSERT_ID();
END//
DELIMITER ;

-- Dumping structure for proseduuri puhelinluettelo.sp_update_henkilo
DELIMITER //
CREATE PROCEDURE `sp_update_henkilo`(
	IN `henkilo_id` INT,
	IN `henkilo_nimi` VARCHAR(25),
	IN `henkilo_puhelin` VARCHAR(25)
)
BEGIN
	UPDATE henkilot SET henkilot.nimi = henkilo_nimi, henkilot.puhelin = henkilo_puhelin WHERE henkilot.id = henkilo_id;
END//
DELIMITER ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
