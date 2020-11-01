CREATE TABLE IF NOT EXISTS `storage` (
`id` INT NOT NULL AUTO_INCREMENT,
`Name` VARCHAR(220) NOT NULL,
`Date` DATETIME NOT NULL,
`id_collection` INT NOT NULL,
`Price` FLOAT NULL,
PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `storage` (`Name`, `Date`, `id_collection`, `Price`) VALUES ('chair', '2020-01-01 15:07:42', '1', '100'),
('table', '2020-02-01 15:07:42', '1', '100'), ('sofa', '2020-03-01 15:07:42', '1', '100'), ('apple', '2020-04-01 15:07:42', '2', '100'),
('pear', '2020-05-01 15:07:42', '2', '100'), ('carrot', '2020-06-01 15:07:42', '2', '100'), ('cherry', '2020-07-01 15:07:42', '2', '100'),
('car', '2020-08-01 15:07:42', '3', '100'), ('ship', '2020-09-01 15:07:42', '3', '100'),
('plane', '2020-10-01 15:07:42', '3', '100'), ('deathstar', '2020-11-01 15:07:42', '3', '100');

SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
