-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`provincia` (
  `id_provincia` INT NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_provincia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ciudad` (
  `id_ciudad` INT NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `cp` INT NOT NULL,
  `barrio` VARCHAR(45) NOT NULL,
  `id_Provincia` INT NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  INDEX `provincia_idx` (`id_Provincia` ASC) VISIBLE,
  CONSTRAINT `provincia`
    FOREIGN KEY (`id_Provincia`)
    REFERENCES `mydb`.`provincia` (`id_provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id_usuario` INT(11) NOT NULL,
  `cedula` INT(11) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `celular` BIGINT(13) NULL,
  `direccion` VARCHAR(30) NULL,
  `telefono` VARCHAR(15) NULL,
  `id_ciudad` INT(6) NOT NULL,
  `mail` VARCHAR(100) NULL,
  `usuario` VARCHAR(60) NULL,
  `password` VARCHAR(100) NULL,
  `tipo_us` INT(1) NOT NULL,
  `fecha_nac` DATETIME NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `ciudad_idx` (`id_ciudad` ASC) VISIBLE,
  CONSTRAINT `ciudad`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `mydb`.`ciudad` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`puntos_verdes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`puntos_verdes` (
  `id_Puntos_Verdes` INT NOT NULL,
  `detalle` VARCHAR(45) NOT NULL,
  `horario` TIME NOT NULL,
  `ambiente` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Puntos_Verdes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`punto_vede_provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`punto_vede_provincia` (
  `id_provincia` INT NOT NULL,
  `id_puntos_verdes` INT NOT NULL,
  INDEX `prov_idx` (`id_provincia` ASC) VISIBLE,
  INDEX `puntverde_idx` (`id_puntos_verdes` ASC) VISIBLE,
  CONSTRAINT `prov`
    FOREIGN KEY (`id_provincia`)
    REFERENCES `mydb`.`provincia` (`id_provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `puntverde`
    FOREIGN KEY (`id_puntos_verdes`)
    REFERENCES `mydb`.`puntos_verdes` (`id_Puntos_Verdes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipo_prod`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tipo_prod` (
  `id_tipo_prod` INT(11) NOT NULL,
  `nombre` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id_tipo_prod`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`producto` (
  `id_producto` INT(11) NOT NULL,
  `clave` VARCHAR(10) NOT NULL,
  `costo` INT(10) NOT NULL,
  `valor` INT(10) NOT NULL,
  `cantidad` INT(4) NULL,
  `fecha_ing` DATE NULL,
  `id_tipo_prod` INT(11) NOT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `FK_tipo_prod_idx` (`id_tipo_prod` ASC) VISIBLE,
  CONSTRAINT `FK_tipo_prod`
    FOREIGN KEY (`id_tipo_prod`)
    REFERENCES `mydb`.`tipo_prod` (`id_tipo_prod`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`factura` (
  `id_factura` BIGINT(20) NOT NULL,
  `id_usuario` INT(11) NOT NULL,
  `total` INT(11) NOT NULL,
  `tipo` INT(11) NOT NULL,
  `fecha_apertura` DATE NOT NULL,
  `fecha_cierre` DATE NOT NULL,
  `dir_envio` VARCHAR(30) NULL,
  `id_ciudad` INT(6) NOT NULL,
  PRIMARY KEY (`id_factura`),
  INDEX `FK_id_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `FK_id_ciudad_idx` (`id_ciudad` ASC) VISIBLE,
  CONSTRAINT `FK_id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `mydb`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_id_ciudad`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `mydb`.`ciudad` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`venta` (
  `id_venta` INT(11) NOT NULL,
  `id_prod` INT(11) NOT NULL,
  `cantidad` INT(6) NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
  `id_factura` BIGINT(20) NOT NULL,
  `descuento` FLOAT NULL,
  PRIMARY KEY (`id_venta`),
  INDEX `FK_id_producto_idx` (`id_prod` ASC) VISIBLE,
  INDEX `FK_id_factura_idx` (`id_factura` ASC) VISIBLE,
  CONSTRAINT `FK_id_producto`
    FOREIGN KEY (`id_prod`)
    REFERENCES `mydb`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_id_factura`
    FOREIGN KEY (`id_factura`)
    REFERENCES `mydb`.`factura` (`id_factura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
