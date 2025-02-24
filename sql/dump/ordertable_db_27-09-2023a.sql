CREATE DATABASE  IF NOT EXISTS `ordertable` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ordertable`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: ordertable
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `account_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (uuid()),
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','Timothy','Fu','admin','email0@email.com','2222222221121','$2a$10$s9tWGj5lIFriZ1zyR0Ag4OjOnG9Y7jtvAj.gcZWkj8sGeS1vs63Km','ADMIN'),('1467e2c4-9c99-4346-8f09-fdc6c53081c6','first_name012','last_name012','john11','email0@email.com','11','test11','ADMIN'),('1af50dd9-37a2-4212-9956-d89df10dd2b1','Sun','Fu','user','user1email0@email.com','2323233243232','$2a$10$4X6iEyr3KQwWqCgyx5ZZ0OmaRH2E.A16N537uKWyRxIP8ALn/FYyS','USER'),('23556262-43e1-4a9d-88c0-af06dbdde4f7','Daro11','Mey11','Daro','Mey@hotmail.com','456','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','USER'),('23cd73e6-637d-4576-b289-85b52753281e','F12','L12','user1122','user1122email0@email.com','23232','$2a$10$WRgHWKjanhKk9q7UOK9Gpeksrs450ona/S46xXDXPCfqZUYd8ZsMm','USER'),('2a73de3a-9ca0-4de7-babd-d728ea335bc1','F1','L1','user11','user11email0@email.com','23232','$2a$10$tygDIrC1MiVi4XYedI6p2O3p8VAYbQR.PZT2S2vF1lezGS3g6OOwC','USER'),('2b58e7ca-eb41-4ce1-b931-42b8b91dcd85','F1','L1','user1','user11email0@email.com','23232','$2a$10$fnyRr6TkdyQV1mw2pWhYS.i5FJtHOcsTv/IdJpVSofhUk8eUFy5Fe','USER'),('4ba82912-a0c0-461c-b4e4-61c5e44bb4da','first_name01','last_name01','john','email0@email.com','0','$2a$10$y8Ih.D760w5OmJUkyD3mtuKVMbpXOrsdNPaDXqZ.7xkUzqsdhFwL.','ADMIN'),('b735161b-477e-43fe-9d1f-b24ddf96d906','Timothy','Fu','manager','email0@email.com','2323233243','$2a$10$u83HkczowLYhfTPxf9ZwreEtvsoxHQLn8PAcJazE6dRpMAzRRrJU.','MANAGER'),('c8a80a4c-1063-4353-b365-c1ce82765a3e','Hoang','Dung','Hoang','Dung@hotmail.com','789','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','MANAGER'),('d5565ecd-5438-45e3-a27a-1899aae97f5c','Timothy','Fu','timothy','Timothy@hotmail.com','481772223','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','MANAGER');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `rating_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (uuid()),
  `account_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating_date` datetime DEFAULT NULL,
  `rating_value` int DEFAULT NULL,
  `restaurant_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `rating_ibfk_2` (`restaurant_id`),
  KEY `rating_ibfk_1` (`account_id`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES ('672df856-efdb-47c1-aa7d-076127d9dffb','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-25 16:06:35',5,'a1602f14-3b3f-4674-bc0f-292c05987d12'),('e3144163-4a7f-469f-887e-6c45307f3b4b','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-25 10:48:05',3,'0d3f08f9-9782-4705-ade8-48cbd7b00a9a'),('f5134f64-b108-494d-94e6-13181d89b39e','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-25 10:39:42',1,'0b811b80-79aa-4947-a8f0-bfac35b6d143'),('f7cb2605-67e2-422a-a6ee-a4b91b737470','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-25 10:47:54',2,'0b811b80-79aa-4947-a8f0-bfac35b6d145');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `restaurant_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (uuid()),
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` int DEFAULT NULL,
  `longitude` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES ('0b811b80-79aa-4947-a8f0-bfac35b6d143','Melt CBD','https://i.ibb.co/cvQ8zP5/Melt-CBD.jpg','38 Waymouth Street Adelaide, AU-SA 5000',82116723,'-34.9257419','138.5982322','Melt CBD is Adelaide’s favourite tapas and pizza venue, in the heart of the city. Join us for a drink at the bar, a quick lunch or long dinner, and everything in between.We are open all day, from 11am, serving up a delicious and unique selection of pizzas and a regularly updated tapas menu. Our wine list is extensive and we also offer beers on tap.Our first floor space is ideal for large groups and functions, or for your next corporate off-site workshop.'),('0b811b80-79aa-4947-a8f0-bfac35b6d144','Crack Kitchen','https://i.ibb.co/qm57cbX/Crack-Kitchen.jpg','13 Franklin St Adelaide, AU-SA 5000',84101407,'-34.9273686','138.59852','Formerly a Bank of Adelaide, Crack Kitchen is now focussed on quality food and coffee, serving time-poor office workers during the week and the leisurely brunch set on weekends. Coffee is seasonally roasted and blended on site from our roastery on the mezzanine level of the building. Food motto is ‘contemporary yet controversial’ however we err more on the side of leading edge than bleeding edge…'),('0b811b80-79aa-4947-a8f0-bfac35b6d145','Johnny’s Kitchen','https://i.ibb.co/pj7W1ZG/Johnny-Kitchen.jpg','56 Glen Osmond Road Parkside, AU-SA 5063',72260005,'-34.9426225','-34.9426225','From traditional Indian taste A relax and comfort zone area to boosting and Dine-in.A perfect place for a gathering and throwing a party taste from various parts of indian territory. Its our commitment to use authentic genuine ingredients.'),('0b811b80-79aa-4947-a8f0-bfac35b6d146','Five Feet Street Eats','https://i.ibb.co/xfLdnvC/5-ft.jpg','24 Waymouth St Adelaide, AU-SA 5000',71202514,'-34.9258276','138.5986265','5 Feet Street Eat, ‘Kaki Lima’ means street food. It’s name comes from the five-foot-wide sidewalks in Indonesia that are crowed with proud locals selling their traditional cuisine. We are located in very busy street in Adelaide CBD.The Five Feet menu is short and simple, divided not into entrees, lunch and mains but “Quick & Run” and “If You Have a Spare Minute”.Vego and vegan dishes are tagged “Things That We Do Not Want to Miss”.No matter what you order, the emphasis is on good value and fast service. It’s the kind of place you can do lunch in 15 minutes or settle in after work for a few beers (or work your way through the all-SA wine list) with some chicken skewers, sea star dumplings, pork belly Pad Pik King or a slow-cooked Massaman Beef Brisket to share.Chef Watcharin Chantaramad heads up the Thai side, while Sing Chaen Tielooks after all things Malaysian.'),('0d3f08f9-9782-4705-ade8-48cbd7b00a9a','Shobosho','https://i.ibb.co/KyyFn3g/Shobosho.jpg','17 Leigh Street Adelaide, AU-SA 5000',883662224,'-34.9236182','138.5973681','At Shōbōsho we blend smoke, steam, and fire. The ancient traditions of Japanese yakitori is combined with the finesse, skill & texture of all that is raw, cured, pickled and fermented.'),('2556d610-8d89-460c-94c0-f53df7f96b50','Shiki Japanese Restaurant','https://i.ibb.co/H28R3Xf/Shiki-Japanese-Restaurant.jpg','InterContinental Hotel North Terrace Adelaide, AU-SA 5000',82382400,'-34.9205294','138.5963479','Adelaide’s Shiki is a favourite among locals and visitors for its traditional and fresh take on Japanese Cuisine served in its inviting restaurant, located on the Upper Lobby of the luxurious five-star InterContinental Adelaide. For starters, the sashimi selection or the tempura soft shell mud carb are sensational selections. Some of Shiki’s popular dishes include letting us choose for you with our range of set menu selections such as the Kayki which includes lobster tails infused with truffle butter or the Hanabi which includes seared Mt Gambier beef tenderloin steak with fried garlic and green peppercorns. Shiki\'s Japanese green tea ice-cream with red bean sauce is the perfect dessert with which to finish your meal.'),('2556d610-8d89-460c-94c0-f53df7f96b51','Meze Mazi - Adelaide','https://i.ibb.co/bsPVYyx/Meze-Mazi-Adelaide.jpg','86b Prospect Road Prospect, AU-SA 5082',82692777,'-34.8892673','138.5940698','Andrew Papadakis moved to Australia in 2013 with the vision of sharing an authentic piece of Greece through the culture of food and family. At Meze-Mazi, we’re all about authenticity. Our food is derived from old family recipes and our native Greek chefs craft each dish with the same love and passion that they do for their own families.'),('2556d610-8d89-460c-94c0-f53df7f96b52','Press* Food & Wine','https://i.ibb.co/XywR7JZ/Press-Food-Wine.jpg','40 Waymouth St Adelaide, AU-SA 5000',82118048,'-34.925738','138.59815','At press*, we bring the best products from our patch of the earth to the table, and have fun doing it. Our kitchen is open all day for a quick bite to eat, or to settle in for a few hours. Bookings are taken for our upstairs loft area (walk-ins are welcome downstairs).'),('2556d610-8d89-460c-94c0-f53df7f96b53','Melt Henley','https://i.ibb.co/W35LgV7/Melt-Henley.jpg','hop 5 269 Seaview Road Henley Beach, AU-SA 5022',84228606,'-34.926738','138.59715','We are a vibrant sea side tapas and pizzeria restaurant located in a prime viewing location of one of South Australia\'s most popular coast lines. Henley Beach is easily accessed from all popular hubs within the city of Adelaide.Over looking Henley Square and rolling coast we offer a diverse series of dining and seating options to suit any occasion. Fitted with floor to ceiling windows you\'re completely surrounded by the beauty of our beach where ever you are seated.Together with our chefs and Kitchen team we are in the business of facilitating a good time. We have brought the unique and established brand that is Melt, to the seaside – a premium offering of food, service, environment, the whole package - in an exceptionally fun way.'),('2556d610-8d89-460c-94c0-f53df7f96bff','Nido Bar & Pasta','https://i.ibb.co/TgpxMb4/Nido-Bar-Pasta.jpg','160 King William Road Hyde Park, AU-SA 5061',83732044,'-34.9548079','138.5998573','Nido Bar & Pasta Taking up residence in the former The Pot, Nido Bar & Pasta is a suburban aperitivo bar featuring artisanal cured meats and salumi, and bar snacks, with larger plates represented by hand-made pastas, and grilled meats. Some tables are furnished with comfortable leather-upholstered stools. If you have a particular seating request, please let us know with your booking. We will do our utmost to accommodate requests!'),('81775c1d-c4c5-4687-8dbc-430a117467d6','Osteria Oggi','https://i.ibb.co/Zh6mpQ3/Osteria-Oggi.jpg','76 Pirie Street Adelaide, AU-SA 5000',83592525,'-34.9254427','138.6025924','At Osteria Oggi, we cook food that we love to eat using seasonal produce, and serve it in a way that is designed to share. Pasta is made fresh daily, with a carefully chosen wine list to match.'),('a1602f14-3b3f-4674-bc0f-292c05987d12','Riverside Restaurant','https://i.ibb.co/4JqB8K2/Riverside-Restaurant.jpg','InterContinental Adelaide North Terrace Adelaide, AU-SA 5000',82382400,'-34.920605','138.5966225','Modern food and a welcoming environment are the embodiment of our dishes in Riverside Restaurant, skillfully and lovingly prepared with local ingredients. Popular menu items include the Barossa pork shoulder, from locally sourced, heritage breeds that are free range and milk fed, or the Carey Gully apple-fed chicken. You can also go more healthy with the Catch of the Day or indulge in the amazing array of vegan food options, in our luxurious buffet breakfast or in our convenient $25 lunch package. We also have an extensive wine selection ranging from NV Krug Grande Cuvee Champagne to famed local Barossa Shiraz such as The Beauty from Hentley Farm. End the visit with one of our mouth-watering desserts, an espresso or a cognac.As the system allows bookings of maximum 20, please explore the option of an additional booking until reaching the total amount of seats needed. Please leave your contact details for us to be in touch with you to define further info');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `restaurant_timeperiod_account`
--

DROP TABLE IF EXISTS `restaurant_timeperiod_account`;
/*!50001 DROP VIEW IF EXISTS `restaurant_timeperiod_account`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `restaurant_timeperiod_account` AS SELECT 
 1 AS `restaurant_timeperiod_account_id`,
 1 AS `account_TTT_account_id`,
 1 AS `account_TTT_first_name`,
 1 AS `account_TTT_last_name`,
 1 AS `account_TTT_username`,
 1 AS `account_TTT_email`,
 1 AS `account_TTT_contact_number`,
 1 AS `timeperiod_TTT_timeperiod_id`,
 1 AS `timeperiod_TTT_start_period`,
 1 AS `timeperiod_TTT_end_period`,
 1 AS `restaurant_TTT_restaurant_id`,
 1 AS `restaurant_TTT_name`,
 1 AS `restaurant_TTT_image`,
 1 AS `restaurant_TTT_location`,
 1 AS `restaurant_TTT_contact_number`,
 1 AS `restaurant_TTT_longitude`,
 1 AS `restaurant_TTT_latitude`,
 1 AS `restaurant_TTT_description`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tables`
--

DROP TABLE IF EXISTS `tables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tables` (
  `tables_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (uuid()),
  `number_of_sits` int DEFAULT NULL,
  `restaurant_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `arrival_time` int DEFAULT NULL,
  `account_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeperiod_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`tables_id`),
  KEY `tables_ibfk_1` (`restaurant_id`),
  KEY `tables_ibfk_2` (`account_id`),
  KEY `tables_ibfk_3` (`timeperiod_id`),
  CONSTRAINT `tables_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`),
  CONSTRAINT `tables_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  CONSTRAINT `tables_ibfk_3` FOREIGN KEY (`timeperiod_id`) REFERENCES `timeperiod` (`timeperiod_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tables`
--

LOCK TABLES `tables` WRITE;
/*!40000 ALTER TABLE `tables` DISABLE KEYS */;
INSERT INTO `tables` VALUES ('04e26d63-1140-46c6-a54a-c001796333cf',3,'2556d610-8d89-460c-94c0-f53df7f96bff',7,'0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','93f62eca-1165-42fc-98bc-28a2eb5969a5'),('1dc0dec6-0efc-4a10-8622-3d6d4353204e',1,'0b811b80-79aa-4947-a8f0-bfac35b6d143',7,'0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','0cde9f87-37d2-459c-b6c3-dc97caa02589'),('469f903f-b1e1-4e3e-b3a8-a8c5d06cce63',2,'0b811b80-79aa-4947-a8f0-bfac35b6d143',10,'0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','0cde9f87-37d2-459c-b6c3-dc97caa02589'),('4c28e6ee-9b88-43b4-a3b7-c91d29e2efe6',1,'a1602f14-3b3f-4674-bc0f-292c05987d12',7,'0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','c967e375-a35e-49ce-b4ac-26c53c5b6e8c'),('888bcbe3-678a-4208-bd79-521cb3da6c5f',1,'2556d610-8d89-460c-94c0-f53df7f96b51',7,'1af50dd9-37a2-4212-9956-d89df10dd2b1','894e3fba-e950-4db0-9fc8-baf977cf7d0d'),('9e893713-1242-4053-beda-89daa97b24b9',4,'0b811b80-79aa-4947-a8f0-bfac35b6d146',12,'1af50dd9-37a2-4212-9956-d89df10dd2b1','cea465cc-69a9-481e-ba54-c6b5f086a0a9'),('aabfbc5c-6298-441a-8a80-3570c3f01c2d',2,'0b811b80-79aa-4947-a8f0-bfac35b6d143',12,'1af50dd9-37a2-4212-9956-d89df10dd2b1','4a9e3595-cb88-4be3-8b58-e6b28bcbf010'),('c8a18f2e-38a4-48bc-a165-637f795923b2',2,'2556d610-8d89-460c-94c0-f53df7f96b50',20,'1af50dd9-37a2-4212-9956-d89df10dd2b1','3c81d3e0-429d-4af8-b2ec-61be0672d628'),('ffe41f4a-cf42-4cd2-b5f5-a15e5c560151',1,'0b811b80-79aa-4947-a8f0-bfac35b6d143',7,'b735161b-477e-43fe-9d1f-b24ddf96d906','4c70de60-b12f-4391-8fda-b74a19634cd8');
/*!40000 ALTER TABLE `tables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timeperiod`
--

DROP TABLE IF EXISTS `timeperiod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timeperiod` (
  `timeperiod_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (uuid()),
  `restaurant_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_period` date DEFAULT NULL,
  `end_period` date DEFAULT NULL,
  PRIMARY KEY (`timeperiod_id`),
  KEY `timeperied_ibfk_1` (`restaurant_id`),
  CONSTRAINT `timeperied_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timeperiod`
--

LOCK TABLES `timeperiod` WRITE;
/*!40000 ALTER TABLE `timeperiod` DISABLE KEYS */;
INSERT INTO `timeperiod` VALUES ('06538857-a175-47d9-aff6-f1427d87fcda','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-07','2023-09-13'),('07aba219-c20f-4a29-8735-f18c1a585aa5','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-09','2023-09-16'),('098b72b1-8d9d-45e6-8676-3ce31a28918b','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-07','2023-09-13'),('0cde9f87-37d2-459c-b6c3-dc97caa02589','0b811b80-79aa-4947-a8f0-bfac35b6d143','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-07','2023-09-28'),('11bdc095-f95c-4331-a9ca-d00bda7036ab','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-03','2023-08-03'),('16b7768e-bdaf-4356-8190-841ad0335735','81775c1d-c4c5-4687-8dbc-430a117467d6','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-09','2023-09-29'),('192312db-4be5-4ebb-816c-433b7c6a7965','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('1a5d4aa8-8ee9-4be4-a1c3-036ab422951d','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-02','2023-09-22'),('1e3e315c-2fa7-4893-977d-c49533d62f40','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('2074dc17-1634-4561-bfa5-4380ef52d738','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-11','2023-09-16'),('209e924c-98a6-4b61-9f83-b247cf22e815','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-02','2023-09-16'),('212508b9-bf7f-410c-9ff4-54a24be42d5e','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-23'),('22b96174-1870-48c3-97df-80f69878b538','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-02','2023-08-02'),('26fe626d-bcd8-48ce-817d-0be99a25c8f6','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-10','2023-09-30'),('29c4be77-b5c3-46f6-82d0-17aec1605430','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('29d68b41-78d9-4fe1-ab0b-5a8cb7a0ee82','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-20','2023-09-30'),('2acae9e1-cacb-4696-a844-fdd690e13231','a1602f14-3b3f-4674-bc0f-292c05987d12','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-10-01','2023-10-02'),('2bff977a-f0a4-4a1f-b42b-ec8f03a72f96','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-08'),('2d5e79da-8b15-4196-9a14-8716cd07e890','2556d610-8d89-460c-94c0-f53df7f96b50','d5565ecd-5438-45e3-a27a-1899aae97f5c','2023-09-10','2023-09-15'),('2e2aaf01-69fc-48b9-82a9-6b3cc40d4ffc','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-16'),('2fbef5e3-3036-447b-b5da-2f8f5507c2dc','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-22'),('301ca4e8-4c6a-402e-a507-066a5d81bd98','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('30c5309f-79d8-4a81-a66e-e13b1599373a','2556d610-8d89-460c-94c0-f53df7f96b50','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-12','2023-09-15'),('344df199-4489-4ffc-8659-5c21ae396cfc','81775c1d-c4c5-4687-8dbc-430a117467d6','',NULL,NULL),('370c3daf-21c6-4135-ae5a-d21475e4f20c','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-20','2023-09-30'),('3b1bc243-a6f6-44d7-8a47-51d99b33408e','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('3c708657-7a3c-415c-ad9b-da0aa970f4bc','2556d610-8d89-460c-94c0-f53df7f96b53','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-16','2023-09-21'),('3c81d3e0-429d-4af8-b2ec-61be0672d628','2556d610-8d89-460c-94c0-f53df7f96b50','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-08','2023-09-23'),('3d3db93a-fd41-4c7e-b6a8-f3f3ea49042a','2556d610-8d89-460c-94c0-f53df7f96b53','23556262-43e1-4a9d-88c0-af06dbdde4f7','2023-09-10','2023-09-15'),('4a9e3595-cb88-4be3-8b58-e6b28bcbf010','0b811b80-79aa-4947-a8f0-bfac35b6d143','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-09','2023-09-29'),('4badb125-4ad4-4581-a82a-ae16e64be29f',NULL,'',NULL,NULL),('4c70de60-b12f-4391-8fda-b74a19634cd8','0b811b80-79aa-4947-a8f0-bfac35b6d143','b735161b-477e-43fe-9d1f-b24ddf96d906','2023-09-01','2023-09-02'),('4f55bd89-6ecf-44da-8f16-9d053472dbf5','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-09','2023-09-23'),('53888ea9-9dbf-49a8-ab89-09d46ddad79a','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('549b5cb4-5880-48f3-b061-d93f650c0d25','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('584c5509-2841-43b8-8fe9-571db5490749','2556d610-8d89-460c-94c0-f53df7f96b51','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-14','2023-09-30'),('5e7e9126-cdfe-4d6e-b4b7-a33820b3887c','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('5ecbdee1-9466-4c20-a64f-267051cf07d0','2556d610-8d89-460c-94c0-f53df7f96b50','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-10-03','2023-10-07'),('623fe174-cb7f-4793-8c08-93ea0eff2546','0b811b80-79aa-4947-a8f0-bfac35b6d144','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-11','2023-09-22'),('67920c90-e78d-4280-8fff-8d5311579457','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-10','2023-09-16'),('6e3087d1-9933-431d-8a67-de7e1200b991','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-09','2023-09-16'),('6ef6aad6-099e-4734-ab86-6b887e5ad869','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('73d8fe95-ba83-4f5f-8465-1e6b17b835d2','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-20','2023-09-30'),('79835465-b011-440c-801e-143084805532','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('7cdc1948-b695-4788-9f0f-e4637999cadb','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('81fb5a23-ca75-4911-830d-c0be0bec3adb','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('83b2339d-00e0-481a-a771-ea48966af62f','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('841c8976-4d6b-43dc-8c8e-f7b0be4b90b4','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-10','2023-09-30'),('894e3fba-e950-4db0-9fc8-baf977cf7d0d','2556d610-8d89-460c-94c0-f53df7f96b51','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-01','2023-09-23'),('8bc7b410-98f6-4848-952a-e5d045f6b80b','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('8e2d7e1f-9fca-42e1-958c-07a53d5ef3e8','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('8e2f1786-17ce-404a-8abe-e192464660bc','0d3f08f9-9782-4705-ade8-48cbd7b00a9a','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-01','2023-09-29'),('8fa717fb-9747-4010-b25b-cdfca8eb0f5a','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('900b580c-a2d5-4abb-a21b-514df2cd25cb','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-09','2023-09-16'),('9061fd3e-0063-478d-9fe1-a9e4756e3cf2','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('934a046a-9502-4cd9-a89e-4df3e3f3d46b','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-09','2023-09-16'),('93f62eca-1165-42fc-98bc-28a2eb5969a5','2556d610-8d89-460c-94c0-f53df7f96bff','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-08','2023-09-29'),('9d2d75b4-b5ce-4300-a5e7-cf85d3aef787','0b811b80-79aa-4947-a8f0-bfac35b6d146','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-08','2023-09-15'),('9e323d9c-825a-4435-81b5-0cf88ed46a83','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-22'),('9e5af8e1-d5af-4e5b-ad8b-e04e8daa1d7b','2556d610-8d89-460c-94c0-f53df7f96b51','23556262-43e1-4a9d-88c0-af06dbdde4f7','2023-09-10','2023-09-15'),('9f94f86e-8d97-4772-a411-d0b16f810377','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-20','2023-09-30'),('a1473bbb-3a4c-431f-abfe-b3f8427cc485','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-28','2023-08-28'),('a14eb1c3-805d-42ee-8124-dbc43930cc16','a1602f14-3b3f-4674-bc0f-292c05987d12','d5565ecd-5438-45e3-a27a-1899aae97f5c','2023-11-10','2023-11-10'),('a1f996c0-bbc4-4ae7-8b16-1e223f5f2fc1','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-07','2023-09-14'),('a5c7147d-ccc8-4609-adeb-62a1967ddeee','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-28','2023-08-29'),('a8ca4102-bae4-484e-a237-1727df1334aa','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('a964f02e-7c1d-43fd-bdd3-e6bf40841556','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('ac76b9f5-8430-4ec5-8b02-1d396cf75330','2556d610-8d89-460c-94c0-f53df7f96bff','d5565ecd-5438-45e3-a27a-1899aae97f5c','2023-11-10','2023-11-10'),('ad3d8c30-f420-4f83-bb16-084f16c0f678','0b811b80-79aa-4947-a8f0-bfac35b6d143','4ba82912-a0c0-461c-b4e4-61c5e44bb4da','2023-09-01','2023-09-01'),('b5fe459f-c8cb-4d63-b0b7-6c3fbf6c48fb','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-09','2023-09-16'),('c21a4c0c-6f71-4e3f-a44d-b228b2c338df','0b811b80-79aa-4947-a8f0-bfac35b6d146','d5565ecd-5438-45e3-a27a-1899aae97f5c','2023-11-10','2023-11-10'),('c575f169-2dcc-45e8-b529-523d43a114aa','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('c967e375-a35e-49ce-b4ac-26c53c5b6e8c','a1602f14-3b3f-4674-bc0f-292c05987d12','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-08','2023-09-21'),('cea465cc-69a9-481e-ba54-c6b5f086a0a9','0b811b80-79aa-4947-a8f0-bfac35b6d146','1af50dd9-37a2-4212-9956-d89df10dd2b1','2023-09-09','2023-09-22'),('d5a500fd-6b73-4400-9eb0-437babd1234f','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('d68bd114-1d1f-4d84-a019-30996edeb5d2','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-22'),('db674307-8f04-4b7b-931d-ca77e3bf54bb','0b811b80-79aa-4947-a8f0-bfac35b6d143','d5565ecd-5438-45e3-a27a-1899aae97f5c','2023-11-10','2023-11-10'),('e1cf4fbe-93e3-497a-8984-d776a9a5119d','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('e2506176-30cf-4b4e-b7c2-85a10a8f7317','0d3f08f9-9782-4705-ade8-48cbd7b00a9a','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-11-10','2023-11-10'),('e2a6566f-435f-415d-a854-1967b58a72c8','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-08'),('e320458d-1150-4181-8759-cdad8611ccf2','2556d610-8d89-460c-94c0-f53df7f96b52','23556262-43e1-4a9d-88c0-af06dbdde4f7','2023-11-10','2023-11-10'),('e90fa820-afc0-482f-8719-2c5aefa55526','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-22','2023-08-22'),('ebe66625-76e3-42c2-8359-ab805b44d511','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-08','2023-09-30'),('eeedb5d7-32eb-414a-9a3b-b6f62c81f925','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('ef907f9b-9fc7-4add-8c97-0e33352c5f05','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-10','2023-09-30'),('f2c97378-71e6-4146-b573-737d37f9e06e','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-22','2023-09-22'),('f47c8347-ee72-4c38-b6ca-304e58ae56e2','0b811b80-79aa-4947-a8f0-bfac35b6d145','0b22d9e5-c8cd-479b-a2e3-bc5fd8f8968b','2023-09-09','2023-09-15'),('f506d508-c0e9-45aa-a429-2c0b8d850381','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-20','2023-09-30'),('f5403081-1800-4df3-8513-52453f1e017c','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-01','2023-09-22'),('f9213cdc-bc2f-4bc2-867f-d94e023de00c','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-30','2023-08-31'),('fc95e83b-ba00-41e8-bd42-6a3ea00c6a9f','0b811b80-79aa-4947-a8f0-bfac35b6d145','d5565ecd-5438-45e3-a27a-1899aae97f5c','2023-11-10','2023-11-10'),('feec3543-6d0a-4185-9a4e-d5accc3aacb1','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-08-01','2023-08-01'),('fefbe829-a321-4139-9ce1-84b41e9b23d4','81775c1d-c4c5-4687-8dbc-430a117467d6','c8a80a4c-1063-4353-b365-c1ce82765a3e','2023-09-20','2023-09-30');
/*!40000 ALTER TABLE `timeperiod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ordertable'
--

--
-- Dumping routines for database 'ordertable'
--

--
-- Final view structure for view `restaurant_timeperiod_account`
--

/*!50001 DROP VIEW IF EXISTS `restaurant_timeperiod_account`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `restaurant_timeperiod_account` AS select concat(`a`.`account_id`,`tp`.`timeperiod_id`,`r`.`restaurant_id`) AS `restaurant_timeperiod_account_id`,`a`.`account_id` AS `account_TTT_account_id`,`a`.`first_name` AS `account_TTT_first_name`,`a`.`last_name` AS `account_TTT_last_name`,`a`.`username` AS `account_TTT_username`,`a`.`email` AS `account_TTT_email`,`a`.`contact_number` AS `account_TTT_contact_number`,`tp`.`timeperiod_id` AS `timeperiod_TTT_timeperiod_id`,`tp`.`start_period` AS `timeperiod_TTT_start_period`,`tp`.`end_period` AS `timeperiod_TTT_end_period`,`r`.`restaurant_id` AS `restaurant_TTT_restaurant_id`,`r`.`name` AS `restaurant_TTT_name`,`r`.`image` AS `restaurant_TTT_image`,`r`.`location` AS `restaurant_TTT_location`,`r`.`contact_number` AS `restaurant_TTT_contact_number`,`r`.`longitude` AS `restaurant_TTT_longitude`,`r`.`latitude` AS `restaurant_TTT_latitude`,`r`.`description` AS `restaurant_TTT_description` from ((`account` `a` join `timeperiod` `tp` on((`a`.`account_id` = `tp`.`account_id`))) join `restaurant` `r` on((`tp`.`restaurant_id` = `r`.`restaurant_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-27 11:50:27
