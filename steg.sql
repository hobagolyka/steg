-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 26, 2018 at 08:57 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `steg`
--

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE IF NOT EXISTS `food` (
  `leiras` text COLLATE utf8_hungarian_ci NOT NULL,
  `kaja` text COLLATE utf8_hungarian_ci NOT NULL,
  `ar` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` text COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`leiras`, `kaja`, `ar`, `id`, `type`) VALUES
('asdas', 'asdfas', 101, 6, 'eloetel'),
('asdfa', 'asdas', 1201, 7, 'eloetel');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user` text COLLATE utf8_hungarian_ci NOT NULL,
  `pw` text COLLATE utf8_hungarian_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user`, `pw`, `id`) VALUES
('admin', '5f0fa8b7a7397a3c1a5e746578bd3e59', 1),
('kata', '7cf2db5ec261a0fa27a502d3196a6f60', 3);
