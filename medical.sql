-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2025 at 08:14 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medical`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_username` varchar(25) NOT NULL,
  `admin_password` text NOT NULL,
  `admin_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `admin_role` enum('super','patient','doctor') NOT NULL,
  `admin_created_at` text NOT NULL DEFAULT current_timestamp(),
  `admin_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_username`, `admin_password`, `admin_status`, `admin_role`, `admin_created_at`, `admin_updated_at`) VALUES
(1, 'aland', '12345', 'active', 'super', '2025-01-16 21:40:32', 'urrent_timestamp('),
(2, 'ali', '12345', 'active', 'super', '0000-00-00 00:00:00', '1737055110779'),
(3, 'ali', '12345', 'deactive', 'super', '1737055151939', '1737055151939'),
(4, 'hama', '12345', 'deactive', 'super', '1737126507375', '1737126791110'),
(5, 'ali', '12345', 'active', 'super', '1737128437344', '1737128437344'),
(6, 'ali', '12345', 'active', 'super', '1737144729884', '1737144729884'),
(7, 'ali', '12345', 'active', 'super', '1737147910043', '1737147910043'),
(8, 'ali', '12345', 'active', 'super', '1737147911356', '1737147911356');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointment_id` int(11) NOT NULL,
  `appointment_date` text NOT NULL,
  `appointment_time` text NOT NULL,
  `appointment_created_at` text NOT NULL DEFAULT current_timestamp(),
  `appointment_updated_at` text NOT NULL DEFAULT current_timestamp(),
  `doctors_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`appointment_id`, `appointment_date`, `appointment_time`, `appointment_created_at`, `appointment_updated_at`, `doctors_id`, `patient_id`) VALUES
(2, '1737055151939', '1737055151939', '0000-00-00 00:00:00', '1737128218928', 1, 1),
(3, '1737055151939', '1737055151939', '0000-00-00 00:00:00', '1737128302516', 1, 1),
(4, '1737055151939', '1737055151939', '0000-00-00 00:00:00', '1737128332446', 1, 1),
(7, '1737055151939', '1737055151939', '1737144733869', '1737144733869', 1, 1),
(8, '1737055151939', '1737055151939', '1737144762247', '1737144762247', 1, 1),
(9, '1737055151939', '1737055151939', '1737147938848', '1737147938848', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `doctors_id` int(11) NOT NULL,
  `doctors_username` varchar(50) NOT NULL,
  `doctors_password` text NOT NULL,
  `doctors_fname` varchar(10) NOT NULL,
  `doctors_mname` varchar(10) NOT NULL,
  `doctors_lname` varchar(10) NOT NULL,
  `doctors_email` text NOT NULL,
  `doctors_phone` varchar(11) NOT NULL,
  `doctors_address` text NOT NULL,
  `doctors_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `doctors_id_of_ministry` int(11) NOT NULL,
  `doctors_cv` text NOT NULL,
  `doctors_profile_pct` text NOT NULL,
  `doctors_created_at` text NOT NULL DEFAULT current_timestamp(),
  `doctors_updated_at` text NOT NULL DEFAULT current_timestamp(),
  `speciality_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`doctors_id`, `doctors_username`, `doctors_password`, `doctors_fname`, `doctors_mname`, `doctors_lname`, `doctors_email`, `doctors_phone`, `doctors_address`, `doctors_status`, `doctors_id_of_ministry`, `doctors_cv`, `doctors_profile_pct`, `doctors_created_at`, `doctors_updated_at`, `speciality_id`, `admin_id`) VALUES
(1, 'ali', '12345', 'ali', 'ahmad', 'kamaran', 'ali@gmail.com', '12', 'adh;jh;', 'active', 0, 'qkr;evj;n;', 'rf;rjkevn;cj', '2025-01-17 18:35:31', 'urrent_timestamp(', 1, 1),
(2, 'kardo', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'active', 0, 'avjknej;', 'evknrej', '0000-00-00 00:00:00', '1737145304814', 1, 1),
(3, 'mlko', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'deactive', 0, 'avjknej;', 'evknrej', '0000-00-00 00:00:00', '1737145370037', 1, 1),
(4, 'kardo', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'active', 0, 'avjknej;', 'evknrej', '0000-00-00 00:00:00', '1737147964247', 1, 1),
(5, 'kardo', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'active', 0, 'avjknej;', 'evknrej', '1737148007417', '1737148007417', 1, 1),
(6, 'kardo', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'active', 0, 'avjknej;', 'evknrej', '1737148009423', '1737148009423', 1, 1),
(7, 'kardo', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'active', 0, 'avjknej;', 'evknrej', '1737148010447', '1737148010447', 1, 1),
(8, 'kardo', '12345', 'kardo', 'husen', 'hama', 'kardo@gmail.com', '2147483647', 'asfjkvn', 'active', 0, 'avjknej;', 'evknrej', '1737148011388', '1737148011388', 1, 1),
(10, 'dr_johndoe', '$2b$10$F5PyFd2sXJWLU5aDa6xh3ulNrMhhNTEV0PfqVQ9E5Ns4CzXj.8lqi', 'John', 'Michael', 'Doe', 'johndoe@example.com', '7708612689', '123 Main Street, City, Country', 'active', 123456, 'https://example.com/cv/johndoe.pdf', 'https://example.com/images/johndoe.jpg', '1739812708170', '1739812708170', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `doctors_notification`
--

CREATE TABLE `doctors_notification` (
  `doctors_notification_id` int(11) NOT NULL,
  `doctors_notification_title` varchar(20) NOT NULL,
  `doctors_notification__text` text NOT NULL,
  `doctors_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `doctors_notification_created_at` text NOT NULL DEFAULT current_timestamp(),
  `doctors_notification_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `favorites_id` int(11) NOT NULL,
  `doctors_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `created_at` text NOT NULL,
  `updated_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_rate` int(3) NOT NULL,
  `feedback_detail` text NOT NULL,
  `patient_id` int(11) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `feedback_created_at` text NOT NULL DEFAULT current_timestamp(),
  `feedback_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `feedback_rate`, `feedback_detail`, `patient_id`, `appointment_id`, `feedback_created_at`, `feedback_updated_at`) VALUES
(1, 50, 'erlkn\'rja', 1, 2, '2025-01-17 23:50:29', 'urrent_timestamp('),
(2, 40, 'vjkrenajrnea', 1, 2, '0000-00-00 00:00:00', '1737147276644'),
(3, 60, 'vjkrenajrnea', 1, 2, '0000-00-00 00:00:00', '1737147449510'),
(4, 40, 'vjkrenajrnea', 1, 2, '0000-00-00 00:00:00', '1737147280387'),
(6, 40, 'vjkrenajrnea', 1, 2, '1737148021933', '1737148021933'),
(7, 40, 'vjkrenajrnea', 1, 2, '1737148022873', '1737148022873');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `id` int(11) NOT NULL,
  `doctors_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `medicine_created_at` text NOT NULL DEFAULT current_timestamp(),
  `medicine_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_id` int(11) NOT NULL,
  `patient_username` varchar(50) NOT NULL,
  `patient_password` text NOT NULL,
  `patient_fname` varchar(10) NOT NULL,
  `patient_mname` varchar(10) NOT NULL,
  `patient_lname` varchar(10) NOT NULL,
  `patient_phone` varchar(11) NOT NULL,
  `patient_age` int(3) NOT NULL,
  `patient_blood_type` text NOT NULL,
  `patient_weight` int(4) NOT NULL,
  `patient_height` int(4) NOT NULL,
  `patient_address` text NOT NULL,
  `patient_gender` enum('male','female') NOT NULL,
  `patient_created_at` text NOT NULL DEFAULT current_timestamp(),
  `patient_updated_at` text NOT NULL DEFAULT current_timestamp(),
  `patient_status` enum('active','deactive') NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_id`, `patient_username`, `patient_password`, `patient_fname`, `patient_mname`, `patient_lname`, `patient_phone`, `patient_age`, `patient_blood_type`, `patient_weight`, `patient_height`, `patient_address`, `patient_gender`, `patient_created_at`, `patient_updated_at`, `patient_status`) VALUES
(1, 'fatima', '1234', 'fatima', 'mhamad', 'osman', '123', 12, 'evfeverv', 123, 156, 'avlkn;erv', 'male', '2025-01-17 18:36:48', 'urrent_timestamp(', 'active'),
(2, 'john_doe', '$2b$10$OjbvhAQZh1k66Vz5Fn1fCewR1MZ/lUkWqN3TWZudqppTcXCzwIjH.', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:40:19', '2025-02-17 03:40:19', 'active'),
(3, 'john_doe', '$2b$10$TFya/OK.FmxQPJDTQCzi1OiSJfvExCY/t/2w2hhxG4xSXY/AbEdRK', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:45:05', '2025-02-17 03:45:05', 'active'),
(4, 'john_doe', '$2b$10$coGacsjAkx.iUnoqOZcsn.OPaWVONoA1.y1FUeFu7UEzkphz7G4Y2', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:50:03', '2025-02-17 03:50:03', 'active'),
(5, 'john_doe', '$2b$10$aHRdOiC1bpRDE2iI6WC.luOG897gXVvy4TUtH6mNt/sIQfpYS.L9S', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:50:25', '2025-02-17 03:50:25', 'active'),
(6, 'john_doe', '$2b$10$IWEkgy0B97xDTLh9b8IW9uE.hNoZ0OuNLtN6kiYG4UWcSJ8P.zF.i', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:51:03', '2025-02-17 03:51:03', 'active'),
(7, 'john_doe', '$2b$10$ByQkVJvxD.nfPmfGpMEIsORMg7qO3eNftYWUGDVRewzhiGykMYT46', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:53:43', '2025-02-17 03:53:43', 'active'),
(8, 'john_doe', '$2b$10$/IJy3WcNeMp46cAklbPgNuVAa.MJDInGec1OH4KQui8fZubKUenYy', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:54:12', '2025-02-17 03:54:12', 'active'),
(9, 'john_doe', '$2b$10$HFRfF8S4vZjXdpNIk6AHk.JHcHtvV7587ILP4T/y2y6Z5mHq6GJ6G', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:55:00', '2025-02-17 03:55:00', 'active'),
(10, 'john_doe', '$2b$10$L0TKGVxB6Ld5qYoUgvCVY.OixBZ57yOmVtAY54QaAL01Om0awYfgq', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 03:55:26', '2025-02-17 03:55:26', 'active'),
(11, 'john_doe', '$2b$10$y9.69O1npGEv7gFO0nZDiOQxUIi1tC6M8UD.wSd5QBZWGaG4RbsBe', 'John', 'Michael', 'Doe', '2147483647', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 04:17:30', '2025-02-17 04:17:30', 'active'),
(12, 'john_doe', '$2b$10$JiOUOf4qBlRs6bP7xrMrS..CYJOMgC7x0GVAdTWclutiy.CX7/B/W', 'John', 'Michael', 'Doe', '7708612689', 30, 'O+', 75, 180, '12345', 'male', '2025-02-17 04:19:47', '2025-02-17 04:19:47', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `patient_notification`
--

CREATE TABLE `patient_notification` (
  `patient_notification_id` int(11) NOT NULL,
  `patient_notification_title` varchar(20) NOT NULL,
  `patient_notification_text` text NOT NULL,
  `patient_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `patient_notification_created_at` text NOT NULL DEFAULT current_timestamp(),
  `patient_notification_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `radiology`
--

CREATE TABLE `radiology` (
  `radiology_id` int(11) NOT NULL,
  `doctors_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `radiology_created_at` text NOT NULL DEFAULT current_timestamp(),
  `radiology_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `speciality`
--

CREATE TABLE `speciality` (
  `speciality_id` int(11) NOT NULL,
  `speciality_category_name` varchar(50) NOT NULL,
  `speciality_expertise` text NOT NULL,
  `speciality_created_at` text NOT NULL DEFAULT current_timestamp(),
  `speciality_updated_at` text NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `speciality`
--

INSERT INTO `speciality` (`speciality_id`, `speciality_category_name`, `speciality_expertise`, `speciality_created_at`, `speciality_updated_at`) VALUES
(1, 'ma3ida', 'aklfn;ejvn/er', '2025-01-17 18:34:03', 'urrent_timestamp(');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `test_id` int(11) NOT NULL,
  `doctors_id` int(11) NOT NULL,
  `test_created_at` text NOT NULL DEFAULT current_timestamp(),
  `test_updated_at` text NOT NULL DEFAULT current_timestamp(),
  `patient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointment_id`),
  ADD KEY `appointment_ibfk_1` (`doctors_id`),
  ADD KEY `appointment_ibfk_2` (`patient_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`doctors_id`),
  ADD KEY `speciality_id` (`speciality_id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `doctors_notification`
--
ALTER TABLE `doctors_notification`
  ADD PRIMARY KEY (`doctors_notification_id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `doctors_id` (`doctors_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctors_id` (`doctors_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `appointment_id` (`appointment_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctors_id` (`doctors_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_id`);

--
-- Indexes for table `patient_notification`
--
ALTER TABLE `patient_notification`
  ADD PRIMARY KEY (`patient_notification_id`),
  ADD KEY `admin_id` (`admin_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `radiology`
--
ALTER TABLE `radiology`
  ADD PRIMARY KEY (`radiology_id`),
  ADD KEY `doctors_id` (`doctors_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `speciality`
--
ALTER TABLE `speciality`
  ADD PRIMARY KEY (`speciality_id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`test_id`),
  ADD KEY `test_ibfk_1` (`doctors_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `doctors_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `doctors_notification`
--
ALTER TABLE `doctors_notification`
  MODIFY `doctors_notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `patient_notification`
--
ALTER TABLE `patient_notification`
  MODIFY `patient_notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `radiology`
--
ALTER TABLE `radiology`
  MODIFY `radiology_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `speciality`
--
ALTER TABLE `speciality`
  MODIFY `speciality_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `test_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`doctors_id`) REFERENCES `doctors` (`doctors_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`speciality_id`) REFERENCES `speciality` (`speciality_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctors_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctors_notification`
--
ALTER TABLE `doctors_notification`
  ADD CONSTRAINT `doctors_notification_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctors_notification_ibfk_2` FOREIGN KEY (`doctors_id`) REFERENCES `doctors` (`doctors_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`doctors_id`) REFERENCES `doctors` (`doctors_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`appointment_id`) REFERENCES `appointment` (`appointment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medicine`
--
ALTER TABLE `medicine`
  ADD CONSTRAINT `medicine_ibfk_1` FOREIGN KEY (`doctors_id`) REFERENCES `doctors` (`doctors_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medicine_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_notification`
--
ALTER TABLE `patient_notification`
  ADD CONSTRAINT `patient_notification_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_notification_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `radiology`
--
ALTER TABLE `radiology`
  ADD CONSTRAINT `radiology_ibfk_1` FOREIGN KEY (`doctors_id`) REFERENCES `doctors` (`doctors_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `radiology_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test`
--
ALTER TABLE `test`
  ADD CONSTRAINT `test_ibfk_1` FOREIGN KEY (`doctors_id`) REFERENCES `doctors` (`doctors_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
