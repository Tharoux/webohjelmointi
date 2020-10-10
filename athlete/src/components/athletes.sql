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


-- Dumping database structure for athletes
CREATE DATABASE IF NOT EXISTS `athletes` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `athletes`;

-- Dumping structure for taulu athletes.athleteinformation
CREATE TABLE IF NOT EXISTS `athleteinformation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(25) NOT NULL,
  `lastName` varchar(25) NOT NULL,
  `callName` varchar(25) DEFAULT NULL,
  `yearOfBirth` varchar(10) DEFAULT NULL,
  `weight` varchar(5) DEFAULT NULL,
  `imageLink` longtext DEFAULT NULL,
  `sport` varchar(25) DEFAULT NULL,
  `accomplishments` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '' COMMENT 'This is supposed to be JSON but HeidiSQL turns it into LONGTEXT.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COMMENT='This table contains information about athletes.';

-- Dumping data for table athletes.athleteinformation: ~2 rows (suunnilleen)
/*!40000 ALTER TABLE `athleteinformation` DISABLE KEYS */;
INSERT INTO `athleteinformation` (`id`, `firstName`, `lastName`, `callName`, `yearOfBirth`, `weight`, `imageLink`, `sport`, `accomplishments`) VALUES
	(102, 'Ian', 'Millar', 'Ian', '1947-01-06', '76', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Ian_Millar_head.jpg', 'Equestrian', 'Olympic silver'),
	(103, 'Hubert', 'Raudsachl', 'Hubert', '1942-08-26', '0', 'none', 'Sailing', 'Two olympic silvers');
/*!40000 ALTER TABLE `athleteinformation` ENABLE KEYS */;

-- Dumping structure for proseduuri athletes.delete_athlete
DELIMITER //
CREATE PROCEDURE `delete_athlete`(
	IN `_id` INT
)
BEGIN
		DELETE FROM athleteinformation WHERE athleteinformation.id = _id LIMIT 1;
	END//
DELIMITER ;

-- Dumping structure for proseduuri athletes.get_all_athletes
DELIMITER //
CREATE PROCEDURE `get_all_athletes`()
BEGIN
		SELECT * FROM athleteinformation;
	END//
DELIMITER ;

-- Dumping structure for proseduuri athletes.get_athlete
DELIMITER //
CREATE PROCEDURE `get_athlete`(
	IN `_id` INT
)
BEGIN
		SELECT * FROM athleteinformation WHERE athleteinformation.id = _id;
	END//
DELIMITER ;

-- Dumping structure for proseduuri athletes.insert_athlete
DELIMITER //
CREATE PROCEDURE `insert_athlete`(
	IN `_id` INT,
	IN `_firstName` VARCHAR(25),
	IN `_lastName` VARCHAR(25),
	IN `_callName` VARCHAR(25),
	IN `_yob` VARCHAR(10),
	IN `_weight` VARCHAR(5),
	IN `_imageLink` LONGTEXT,
	IN `_sport` VARCHAR(25),
	IN `_accomplishments` JSON
)
BEGIN
		INSERT INTO athleteinformation(firstName, lastName, callName, yearOfBirth, weight, imageLink, sport, accomplishments)
			VALUES (_firstName, _lastName, _callName, _yob, _weight, _imageLink, _sport, _accomplishments);
	END//
DELIMITER ;

-- Dumping structure for proseduuri athletes.update_athlete
DELIMITER //
CREATE PROCEDURE `update_athlete`(
	IN `_id` INT,
	IN `_firstName` VARCHAR(25),
	IN `_lastName` VARCHAR(25),
	IN `_callName` VARCHAR(25),
	IN `_yob` VARCHAR(10),
	IN `_weight` VARCHAR(5),
	IN `_imageLink` LONGTEXT,
	IN `_sport` VARCHAR(25),
	IN `_accomplishments` JSON
)
BEGIN
		UPDATE athleteinformation 
			SET 
				athleteinformation.firstName = _firstName,
				athleteinformation.lastName = _lastName,
				athleteinformation.callName = _callName,
				athleteinformation.yearOfBirth = _yob,
				athleteinformation.weight = _weight,
				athleteinformation.imageLink = _imageLink,
				athleteinformation.sport = _sport,
				athleteinformation.accomplishments = _accomplishments
			WHERE athleteinformation.id = _id;
	END//
DELIMITER ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
