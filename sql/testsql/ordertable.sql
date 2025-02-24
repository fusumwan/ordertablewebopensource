DROP TABLE IF EXISTS `ordertable`;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `ordertable` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `ordertable`;




--
-- Table structure for table `account`
--
DROP TABLE IF EXISTS `account`;


CREATE TABLE `account` (
    account_id CHAR(36) NOT NULL DEFAULT (UUID()),
    first_name varchar(255),
    last_name varchar(255),
    username varchar(255),
    email varchar(255),
    contact_number varchar(255),
    password varchar(255),
    user_type varchar(255),
    PRIMARY KEY (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Dumping data for table `account`
--
INSERT INTO account (account_id,first_name,last_name,username,email,contact_number,password,user_type)
VALUES ('349c048a-204d-4c92-a070-6df4a62c33cc','Timothy','Fu','Timothy','a1714470@student.adelaide.edu.au','123','cGFzc3dvcmQ=','ADMIN');
INSERT INTO account (account_id,first_name,last_name,username,email,contact_number,password,user_type)
VALUES ('d5565ecd-5438-45e3-a27a-1899aae97f5c','Timothy','Fu','Timothy','Timothy@hotmail.com','0481772223','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','MANAGER');
INSERT INTO account (account_id,first_name,last_name,username,email,contact_number,password,user_type)
VALUES ('23556262-43e1-4a9d-88c0-af06dbdde4f7','Daro','Mey','Daro','Mey@hotmail.com','456','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','EMPLOYEE');
INSERT INTO account (account_id,first_name,last_name,username,email,contact_number,password,user_type)
VALUES ('c8a80a4c-1063-4353-b365-c1ce82765a3e','Hoang','Dung','Hoang','Dung@hotmail.com','789','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','EMPLOYEE');
INSERT INTO account (account_id,first_name,last_name,username,email,contact_number,password,user_type)
VALUES ('4ba82912-a0c0-461c-b4e4-61c5e44bb4da','first_name0','last_name0','john','john@hotmail.com','789','$12$xpbBDdLm.OygBHosR7wbqOPXBMQdl9MxoD.KescTN681JPI6hwEa2','EMPLOYEE');


--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
    booking_id CHAR(36) NOT NULL DEFAULT (UUID()),
    account_id varchar(100),
    tables_id varchar(100),
    enable boolean,
    booking_time  datetime,
    reserved_time    datetime,
	PRIMARY KEY (`booking_id`)
	CONSTRAINT `booking_ibfk_1` FOREIGN KEY (account_id) REFERENCES account(account_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SELECT DATE_FORMAT(booking_time, '%Y-%m-%d') AS formatted_date FROM booking;
SELECT DATE_FORMAT(reserved_time, '%Y-%m-%d') AS formatted_date FROM booking;
--
-- Dumping data for table `booking`
--

INSERT INTO booking (booking_id,account_id,tables_id,enable,booking_time,reserved_time)
VALUES ('a2308e6e-1446-4ab5-8bad-cff7bece3436', '349c048a-204d-4c92-a070-6df4a62c33cc', 'd5898e83-347c-4b1f-8f26-4455cdfa0baf', 1, '2019-06-01 13:23:44' , '2019-06-15 08:00:00');

INSERT INTO booking (booking_id,account_id,tables_id,enable,booking_time,reserved_time)
VALUES ('4f840d43-5549-4d86-89f1-07cf1100fbaa', '349c048a-204d-4c92-a070-6df4a62c33cc', '007d4e54-19f2-4670-bd8a-084278068cb6', 1, '2019-05-16 13:00:00', '2019-5-12 18:00:00');




--
-- Table structure for table `tables`
--

DROP TABLE IF EXISTS `tables`;
CREATE TABLE `tables` (
    tables_id CHAR(36) NOT NULL DEFAULT (UUID()),
    number_of_sits int,
    restaurant_id varchar(255),
    arrival_time int,
	PRIMARY KEY (`tables_id`)
	CONSTRAINT `tables_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `ordertable`.`restaurant`(`restaurant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;








--
-- Dumping data for table `time`
--

INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('08710463-52e1-4b9b-9c97-0618475c669a', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3753d5dd-9310-44ba-ab98-b54dba34aaff', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('245dd50c-2775-4b02-845a-ee0e510098a3', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a8f2c624-af72-460c-af35-daf163c77dfd', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f137c2c8-c72f-4b54-bcc7-01a4c2e2d2ec', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('121e1bea-827c-4ef9-8bb5-2c72e2144704', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c402d21a-99a1-4b18-af1f-57178d47a97a', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('582b1b34-82c3-4880-b4f5-84b94d380da0', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('98520e74-9f2a-4850-b876-ea9ce632e800', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('305c90e5-613b-447b-a978-97072fd3d7f5', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5f6fa4fb-eee2-46b3-a115-3937781fb7a5', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5ecbe8e1-623c-440c-9fc3-0195f2ca66a3', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a5484169-ea51-4a8d-9b2c-aeed2002b255', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1de91972-d910-45e2-8df2-2a18c69c046b', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7ef71273-97e1-432b-9910-81fc12a33914', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1a8898a9-e632-4730-8731-6dddfbc9b75b', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a74e7807-f653-473b-8c19-2f0dcd6d9baf', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c495b81b-8931-4627-945d-1c8c8d878152', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d5898e83-347c-4b1f-8f26-4455cdfa0baf', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4b8cec36-01b9-43ff-8a13-551e09d64428', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('40de56f1-8454-4abf-bb80-cf5b1a7d078e', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('64d33d23-be4f-4525-8d61-7bd8fc4eb320', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c53ba0f5-9f2e-4716-b192-d6916dcaf59b', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a6d8e646-1c2b-4882-a0cd-ba5171b6d520', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('094e2b68-7d42-41a2-92ca-c6c7af6df2fc', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8cb4757f-2231-4b60-abe8-989fd54c0f9e', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9de45ad9-452e-4dd5-84d7-fa9700c04a65', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('449e66c7-d63e-40b3-8e66-9a6b32948e41', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3f640761-a6e3-4ede-8cd3-ebde9055eaa7', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('846b44b0-ffcd-414d-9c33-9df4dd8d8dd8', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('089469c3-bdb5-458b-a65a-57923553c315', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3af8af94-2e83-4500-928a-33021055039f', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3196e7c5-1a6e-4815-a623-2035d014e4fb', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('372bd4ea-76fb-4cc9-85a0-0c75df69b10d', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ae5c3b07-3d37-4b6e-80f9-1536531a9e82', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('53df2d6e-5a5e-452a-9e4f-9637c2483917', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1e903f2f-c5cf-463d-874f-5cd30db0232e', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('54076bc5-8d77-4af2-b0c9-de26bffa557d', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('199b2701-c01f-4e38-9b43-7d22767a448d', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d2e13bfd-c5b4-48ef-9307-692fdc40d438', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eff3fe58-6026-48ec-9f6e-82a74a34e13a', 1 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1490490e-e414-4c14-ab78-97f9879584da', 2 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('02612fcc-fc6e-4076-ab68-0f248ef0c1e6', 4 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('007d4e54-19f2-4670-bd8a-084278068cb6', 8 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ddbf8638-d1fc-445d-818c-840a9076e52b', 12 , '0d3f08f9-9782-4705-ade8-48cbd7b00a9a' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8029fdf5-3810-4412-997e-0154eb045908', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('22c8bc0f-91b7-4bfd-97e7-621960af13a7', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ff45efde-e25f-46ce-bf28-57e15cbf0df0', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4f58d625-b2d9-41ca-be05-8eeccd047d49', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('443c5feb-7cf6-4c28-a178-c1ff88a9f884', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('162a67eb-4ba6-407c-8996-50f17e3f2684', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('94966f82-74f8-4ee4-90cb-4eea56ddeafb', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('16378d66-fcd6-4fac-bcc9-d033bddb07e8', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('74473185-7c7f-4764-bf28-e7467d795e09', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7f15b71a-f84e-4414-a7cf-c4cbf4611de2', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bd6e2d59-071a-4033-be9b-40dea6ef87a2', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('69b638d2-b377-4daf-8c9b-f50c843b3286', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('68baad6b-e339-4d62-96e1-22b8365c6bb2', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('56cc84ef-b596-40d7-804c-38d8c517be94', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('807ff74b-c8cb-4e33-97e1-b4aca641610d', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bf6b9737-8988-4f7a-b9c0-e82c6e9b71c0', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a0bbf532-d770-4458-82dd-d9f6b4064624', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3f69a3b3-f04c-4903-ae31-e86f08a4cd6e', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8d55a843-66f9-4755-b4d3-9ef094df4577', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9acbe789-2f75-4850-a3d8-4c51a9cfd43c', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0730e675-32fa-48ea-847b-2f2b91404208', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ab451083-d237-4cfe-a69c-e2889d554a2c', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0ff7bb03-3345-4206-b168-00cedeba0986', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d496458c-5837-4eae-81fb-5c0324066d96', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bd7a9519-16a4-4907-afb8-70c66749695e', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('dcaaf599-19be-4bc2-b9da-1b01d371df7b', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('80146ecd-5676-4c95-9a24-c343183248c1', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('371b4391-93eb-4d92-b56c-73b6d5367825', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b17f4c66-ed38-46c0-8a27-71d7f72a1b35', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('16f7e2b6-56ae-46ea-a454-3b5d139bdc6c', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('07a8c066-3308-454e-bac0-f67098447a88', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a6c6fdbb-23fe-419f-8310-58e8f7f7e762', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1e579ff2-8e56-4e87-b137-15505dc12594', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b0b24ed8-abae-41ee-95f3-282f6e84ed3e', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6a954011-e7d5-4ad8-a39f-ad098d2851b0', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9e4046f4-46f9-4f03-91cc-28051e47e152', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('18c165f4-f984-473f-96b7-71160fe9d950', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9fbe5bbc-5457-4406-9758-0f44a9936c7c', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('24a705fa-69ad-43e8-9f87-8113a4a46a8c', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('78a87a13-69d9-4eff-ab1a-87765c5fc2c1', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9ec3b830-8faa-4417-ba8b-befb72aff7bf', 1 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7c2cf8ba-075e-4dd5-9ea0-d5278665817e', 2 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8b6881a2-14b5-4619-b05f-76193be72509', 4 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1d6f4fd0-32c0-44fc-ba55-3148e3373b0b', 8 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('dbb3798a-e57b-4cfe-ae8c-a4e955ed03ea', 12 , '81775c1d-c4c5-4687-8dbc-430a117467d6' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('64c08d75-df86-4546-8b82-7438fae8fcc7', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2a2d9b47-e062-4523-8132-eb7931306d3f', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9794146b-a707-4e1f-bbea-06b74d5ce098', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fd6a60f1-4f18-4e38-9d13-8f589e0e8ef1', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('85e56b89-a3b3-4513-9d92-788ef1948fd8', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d836b860-8869-4870-aaf0-9a06d6d71c02', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('457fb99b-0aac-4ebf-acb6-355de864cbf4', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9daa9e48-8f74-4a99-9c70-7283f039928f', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('43aaf8e9-7b03-41e5-a6ed-166b8126923e', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2ac04a87-bcc5-45aa-9418-d643a57f7057', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3fabef56-a0fe-479a-ba51-7012ea358e01', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('186b0af2-7058-4f58-bad7-b911626e2ba5', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('762a8c7c-7cdc-4113-a02d-038c5f786626', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fbd551c8-978f-4b28-acd2-221c44394757', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('74548bd0-5764-449c-b59b-f66863ffc1e7', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d69dac37-28c8-407e-90d9-08171b7419eb', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('04d45a6e-6f78-413f-9c40-31fe4fe5cb3e', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8498ab93-dc47-413a-b0ec-97f250f7ce2b', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5956a5ce-458d-49f2-844f-7180cb7e4dfb', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bd6b936b-1545-4e4d-a9f8-4c414ea9e455', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('38fc3dd4-74e8-4aa2-91a2-e70e570dcd9c', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('52c2389f-77ae-4273-b423-e67ef6f0e374', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2bdd0668-dc9e-470d-b269-be257022733e', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ed50f5fd-364c-4617-baaf-96bc8bfec84b', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4e4eff7e-3d2e-4edd-aa1b-9a9664f7852c', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4dd216ae-4717-42ee-82be-4885f3c430c3', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1187929f-91fb-4d8e-8980-99133b30fd8c', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('52d8c01b-1076-4aaf-9236-ba015610b24f', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('094b66d4-525c-4bac-9662-e946f5ce4bac', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a7cb7649-dcb4-459f-8036-c553bfe452a1', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6f7f1109-af5f-4344-8823-a7642af7d0b5', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('92621c4a-adaa-4e82-ba4e-b71603f6f5e2', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8200ee7b-602f-44f0-98d4-a6ff21fe2ab3', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3c185bc0-45cb-4e51-9d5e-e771bffe37cc', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('77217aa2-a70d-4996-be0c-36a46303ab6d', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('95ec5edf-2cad-449c-83fe-8e4ae2a0938f', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4f932bd6-4d2b-4c84-8a96-ef370259abc4', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('12bcaa7d-cc24-4def-b3f7-67ff68e35f99', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('291be911-7920-49c2-8ee4-8165b30d62de', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4a9d1488-d2ba-414d-865d-9b7d06096dae', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d2224908-7e50-4663-b895-6cf6b99c3efd', 1 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c3a64454-d06b-4ce0-b57d-00353376fe68', 2 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('542a8d56-8eb6-4085-83fb-9fee09392d02', 4 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e0f2a8b8-e7e0-4498-a501-a6eb75dfc0f9', 8 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('575d1e23-23fe-468f-9f7f-46f901e1d910', 12 , '2556d610-8d89-460c-94c0-f53df7f96bff' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b6e4b73b-4d9e-42ac-b998-c790270306d3', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c750626a-6545-4fe4-b546-a39a5f7196ff', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ad9604d8-6ad3-4a64-bc7f-b4e02bec92aa', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('08db2a4c-bcb3-418f-8cc3-7d657dfcf07e', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6260237b-754f-47c3-a7b8-773eab20a5de', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5e9b06cc-1b3e-487f-92a6-beb557967a77', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ff7b0864-a68f-4f03-aef2-7898e9c17570', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('861a31bf-854a-4572-9bc1-da43047b7c80', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('844abcdd-834e-46fa-91ba-a979ca37c810', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('98acddb3-10bb-4fc8-922c-efe55604583c', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2494c300-26a8-4f8e-8ed1-03909975e2df', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('480d7b19-90bc-49f9-b659-5cfccc4cc076', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('237d3f9f-f0b9-473c-9c61-7100d9341f8c', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b52f9ce0-d08b-41bd-b39c-7eccf688d284', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fdfc7b13-9f85-4a55-8bb8-0aade0fcd944', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c2caca8e-989b-4595-82cf-1868b64b4bf8', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e812e81e-99e2-4c5e-b198-cf211004cac2', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f3c41675-5746-4cd7-9da4-c7c882a7f3ed', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7e7ac21b-5906-4582-b54c-78239a61f928', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('884da22d-efed-42e3-8339-17623c3415cc', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('79f38cb1-b25c-4bea-b2de-5def55b1b657', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d40b8034-c87a-4fc1-b539-ec481a93565b', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ec97888c-76ac-4d31-9216-9aa51388c695', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d01f364b-5ec1-42c2-94e3-00baf95c1ae4', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('651d1080-bb4e-4e21-a942-97015e5fdca6', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e8f79100-4a52-496c-a9f0-c1c27bbade45', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9d67f996-2036-4a19-8c68-df2ef1bfee00', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('21ef0e9d-757c-4a58-82de-f682a49c3070', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0171e947-81b8-4a75-a3a3-3ca86e0fb39a', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e6e27521-11c8-47bd-aea6-81b81db45c4b', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e3e3b81d-7350-4d82-90de-5b9ea90bae2a', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('81fac76e-3787-4133-908b-4c888e0a14fc', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('017b35f5-6eb8-436c-a1bd-a38b1b79dfd6', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('620869d9-f7f7-430b-9f3f-59984e75f31d', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b5aa7798-c311-40be-8c54-abf2a2f258f4', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4951169c-4c6e-4c93-a8a9-6702bf4c49d1', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6004d7eb-0156-43ff-ac4c-43c63f562dcf', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4d4f3753-b681-4b3d-8508-ec92fdab2db3', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b5d70f71-e2f4-43ee-b2df-bdb1c69f9d9b', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fb711aa2-b78c-4184-93c6-a2a8aa20d01e', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9945d224-a2ae-455c-b253-da547d6b1389', 1 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6989b423-60ef-4010-adc6-8bbcef533a61', 2 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('535c8dd2-6248-4655-9a74-138bfa3885c7', 4 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9d2b2898-a239-46ff-8b08-aaf92e3c3b79', 8 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('824c37c4-2a12-45ad-95c4-a9647c7808f1', 12 , 'a1602f14-3b3f-4674-bc0f-292c05987d12' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f92d02c6-9547-4d1f-b005-ec51c5bd7bc8', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('38801123-9c76-4446-b295-20a9fe91bd4f', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cb841af3-1269-4e82-84e2-6302ffa31458', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6cd652e2-e2c5-4743-86f1-5ef54eaa736a', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b1be0754-d0ac-4967-a4a7-8c200de56aff', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0ff734fd-65dd-47a7-b9f0-334e2f61f991', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('53f00d4b-c9b4-4b1a-8209-0fdd699432a2', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('30af09cb-a2ff-41f3-9ac1-bdf369bca2bf', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5ae59a45-6573-4018-9e33-3d18c6fffebc', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e3c90596-d643-4f98-9e14-2365bb74e83b', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3bb3ef04-5726-42f7-a8e7-64f1b5308269', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6cde4d70-2d9f-45f1-bc36-b36abad019b6', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('65dd6895-0b1e-4350-8286-10afc97e7d14', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a0b8fe68-9e0d-44e8-a67e-3c5de97b3229', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('556d95e3-2b37-4cab-b85e-1480b3f51b30', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('14b6ee18-0f21-4740-a6ba-c36f696bafe7', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('288e5fc6-cb7a-4ba6-bf9b-113a53d74323', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d7210525-5402-4cd5-8961-5a6babb4ff99', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c75da378-b4f1-44fe-9459-d448eff0a9e6', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('082a79b4-80f3-4351-9e77-e600cf4662c0', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eaf12e9d-09eb-4c7a-8b64-15065323cb7d', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a3694abe-df75-474c-b6c5-76ae6653126c', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9f9d16da-c6f6-4866-b30a-ab4ad66cb290', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c8cfe641-dd04-4894-a8d8-7aa787a5ac85', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7a72e0fa-4c4d-4edc-911e-98ff1b8bab2c', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c0dc48de-623c-4e6f-ac0c-1d084bbc43ee', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ee5a85da-9361-45b5-9de7-2c89a4dd319e', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('215c905e-7db2-4a28-94ba-94368300dbb2', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b4630599-3d62-49b8-8432-6b268bba2624', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5f7ab239-d889-4fb7-9410-ffc62993d349', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c29dcdf7-d03b-4d47-9f27-7acf24bb5b07', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('976ae51e-1047-45c7-a981-5d8656efbdb7', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d73af19e-69dc-44ca-ab0f-a65bfaebc476', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a09fd1fc-fa46-432b-b882-a627de17a577', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('22dcef20-ae8c-46cc-9bd9-972ae20080a2', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1ebffb20-eebe-4246-bdf8-6a97e45160ca', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1540e444-2798-4cbc-bf4c-0dcbe16973ac', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c308f6e9-73cc-4434-8743-4e9225797fb0', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ee47de81-7796-43c3-bc2d-bc1de6df580a', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1551f19e-042c-470d-b945-77cf316296a6', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ffbf5fa8-cc28-45dc-80ac-a38d16b7370c', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('062ec8ee-e4a8-48f5-8cc7-8babfc3eb429', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7a0f4a16-6250-4b8f-96c9-76755c321fa6', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6940c3f1-d3cb-4b8d-bf5b-51db55b54a1e', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b37060ba-108f-40b8-a48c-8b5e4439e29c', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d143' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0e237c83-6199-47ac-a2d0-3797786bc838', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ab6c32dc-ee99-4fd1-8672-bd7ba8d8bebe', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6537da95-511e-41aa-9f2e-09afd54d2683', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d3a1c5a2-0ac7-4f85-addf-bc0dea5ee068', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a9f2aa91-527c-4800-bf58-2e2648a8d7e2', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7b0c56ad-9fd2-4126-b8f8-9cca907d0c5f', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('343ac069-4906-45c8-a746-6caba831d2c2', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('193debea-ff84-453a-b56f-f6db68c7c063', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eed0d640-70db-4c20-82c0-05ea1c88333a', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('88e201be-e747-46dd-8edf-e3f218da8436', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b5b672fc-bbb0-4137-a83d-27da2f7f8e14', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b2662cc4-d44c-494e-99b1-2122359fc3a6', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e82ffe89-58ca-48d6-8171-e93d09cb6e10', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('38923471-db50-4a8a-8951-2405a4b0c5d2', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('280b0d4b-569b-4ab7-b337-31825dde16a9', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1b3eab18-65b3-4e78-90bd-31bc8b85db78', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6f5c5859-2ffa-4a0c-b945-9ce04df1ab84', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('770a4789-68b8-4858-95ae-0918de114669', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c164ef1e-05a4-40f1-8f2c-6d2f8b847d61', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('077a74be-1a44-42fb-91c6-6353e0e46728', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d436de34-18d9-42e9-bb8e-d1d31fbffc59', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('780bc32c-84b8-4734-996f-7b86c3f9a124', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f7735b57-59ed-4d3f-a187-f42db0bdeb9e', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5d6abb86-4067-450b-a9cd-18a3ae1e8617', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('04145541-250e-424d-a57b-bccf07d76534', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d8c041c9-08e9-4e21-87a6-fc030953e26d', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6a6400a8-8fec-4ced-936a-5a5cd8780d70', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('30301616-018e-42b4-a9bf-846f2be94490', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('85251905-2ca5-41d9-8d4a-4a495e05eeef', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c54976ea-dfdb-4f04-8600-e6798af37647', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('33b4b253-784f-4064-ba85-2bc471a64829', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c9ba3fb5-1adf-4d2b-9f5c-3d34f126b606', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9023a248-e5a9-4c39-ab59-58df6dfbbd19', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('59f67e19-4c8a-46a1-9c43-7971c5eba3c6', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('872f6ad0-2a37-4cd8-9f86-13f231f8d9b4', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b6c79a04-5873-4d03-81d5-3bf52ed300fb', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e1224853-bb35-458c-b26c-6f46c611aa27', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6e1170a9-a006-4284-9058-5dd3ef3b4893', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3529849e-4b4a-4874-870e-c900466d7199', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cd6953ce-316e-479f-8fef-64b1f79a1954', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('32399c4e-d987-4d1d-86fc-9c20491df82a', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4386f839-5659-4738-89c6-4f1959bb8874', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('45fe4dc2-af07-4f84-a3be-cc032f4c4941', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c3f0b7b9-7108-41c6-b1c5-210e51fd2123', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b026da41-c92a-4b6b-bb08-9651028b0cd2', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d144' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3c656606-300a-4dc9-8728-4508097285dd', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('75be8c50-8c10-4bb1-bc2b-5e0f510d60ad', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4c18bc39-dea4-4484-a81b-c8289bb920b6', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6dad017a-6f91-4730-b9d6-52b68c1d17c8', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7ea5ce53-44c2-4f12-ba13-b8011eda56d0', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7a41bd84-4187-4c57-99ed-e2092da0de73', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('68c9f4da-59e9-49bf-9c7b-74353c92d0f0', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ad2b8b07-6aec-410d-81cd-12110f88a315', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d6be221a-bfe7-449e-9125-69dac10f7477', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3b7de84d-7fa1-4c0f-b25f-238c8b098080', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4c92f1b4-6004-4f1d-9ea9-9ae59db0966f', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2578e9c4-e429-426c-8625-a7fea7429ed6', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6930d718-89b4-4bff-89fc-5acba94f3f9e', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('53743731-bb0e-46ad-bb78-ec09ec548918', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('dcfec795-379b-4d11-95e5-385d85a83e49', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('58f72880-7954-4c29-8bb5-29dec3d6ecba', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b1632fc8-e0d5-4d92-96d2-7ab2e89ecec9', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('08c8b2f4-475c-4cbb-b0bf-88da20add933', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5d0dd7ff-a648-4494-8027-f3caaa52630a', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b414b342-d898-4770-b8a2-73785106e3a5', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('194eb2e9-2cf7-454b-ad2b-2444c993e2f5', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('31727b34-9ced-41cf-9722-59f70e590cc3', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('31f7a17b-639c-4a19-87bc-78db01ba7931', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7a01c4eb-abe5-4984-8b4f-6722a54cf18d', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('952ef1f9-d47b-4426-8deb-7f19469aed8a', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1c1635f4-c276-4ccb-9367-35feb9d8e24b', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ab535726-d3d0-4e5b-94d7-33d4aaa92c34', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('81723987-f47d-48da-8c58-10d1df2a96ae', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f5f7f8b4-c010-4cf0-b4c9-eb9e1c65a895', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d1d822de-b7e0-4b5e-aea4-47be103ae8bf', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0afa84e7-f612-4c57-b78f-74821109c484', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('747206c9-ca71-44ec-9f36-5e9b0d0c8c55', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5336e2a1-b092-4779-a909-a622a8cb2dec', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eacb6b86-bffc-4de7-85d6-a06781ce6169', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('da4ab063-890b-4728-a46e-a3cfeeb5da01', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ce778a08-37a7-46ca-856e-8af26b45f284', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3e346d4f-a9e0-44e9-be13-6cfaed40d888', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('71b7aa00-2fc6-413b-a152-8760af8968c4', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('87404fa9-92d6-423a-92ea-d1767db0f196', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bee0ffd5-8cf4-416a-989c-84c4798d7474', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('17960da0-2b6f-4069-ab3b-45eb6c3a5302', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('44e9c7f9-7ebc-4053-a279-c1bdc9829008', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d15d34a6-c833-4a5c-824f-884917d53f6e', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4e6d5630-d0e3-4d2f-9de5-93615f77ed44', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('566cc82e-f8a6-4cf2-949a-8a4c6684a02c', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d145' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7cb57789-5a5e-4f14-b300-e7a914d28779', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6c9bbc1b-cb87-4898-a740-0d5f0ebb01ae', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7c16aac5-8860-4bae-be85-e6a0f90570cf', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e1dd34ed-e71e-48bd-b2fb-a9b163d83311', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('08e0c1e4-791a-427c-8883-afa51babbe73', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fb0b5588-cb5c-4121-9e9f-a8e3da16c7ee', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('95985a3e-75fc-4f5f-8679-f5f0d09005d8', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('99471871-b299-44e4-87bd-f53ed04d4dd8', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('64f21a53-fa0c-4c4c-bbb5-44307b0c8a18', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fe82b63f-b860-467b-8939-c12477684c30', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('141a549c-7f99-4ccf-817a-8fb241222285', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('754515d4-9545-4435-aa70-c6ebbaa89093', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c953c65d-9b97-45c5-82a8-167e82675ba9', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3f97b422-1659-4203-8b09-3c532759d329', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c9cb109e-a053-4dc7-bbac-6711281843b2', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f1e7b7f4-69ce-4581-9694-cb75c8d85a42', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7c07f625-e0d3-4164-8cce-d9b4ea11391e', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d2a9f8b5-90e5-45e8-87f0-722dbd1aaeaf', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d1487889-c74b-4e0a-80b6-9c9658bc9c9f', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cd2d733b-834b-469f-9f9b-808238a2f20e', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4ee4c2b3-f39e-4195-8355-9246f1334c5f', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('73e356d4-2844-4d9a-8741-a392455af1da', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2206556d-417f-4c38-99a0-1887f2e40db7', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('19f098bb-5e35-4042-910e-14db4e034ee4', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('af315dd2-ed11-4b68-99b1-6de3347c174c', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5ef48e7a-02f2-4a2c-89df-f741d6b6aeae', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('349b5bc9-03b5-4500-bf1a-ff753ded8697', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('46dcd265-456f-4649-9eae-081beeec3586', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('aa6a55e9-0db8-4950-b6b5-603267ea69ca', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('132028a2-cac2-42be-8ba1-b4bc0b65b52d', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9e179c7d-f0a2-4685-8df7-93d8ba925c2b', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0b6224cb-7ef9-496f-a204-d1de4f5e1b7b', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e505b456-73d3-4de7-ab5f-6e862e836c39', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7e0d1967-9aa1-477a-927d-b864a9c2d3a2', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('624de9fd-809f-4c84-9499-6dd29f88ed92', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1b511901-2f8c-4b1c-815b-676b832d8d4e', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b2d074b1-651e-46b2-ae53-2b4011639a91', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8748d273-c689-4da4-bd14-8b6b0cf5afea', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3edd9e8b-0f12-44dd-adba-b62045edcfee', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('803acee4-36e4-4a89-ad2a-1c37f46081e2', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f2bb4ae0-a672-4c27-963e-c360da3e2de4', 1 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3311db75-b0b1-460b-b362-3328985af545', 2 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f0a66955-ac65-4780-a1f2-f1c7f19565b6', 4 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('23b6d22c-e442-4bd8-9698-47e435a0aac8', 8 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cfb7b689-0c4c-42b4-bc5d-336f407f3774', 12 , '0b811b80-79aa-4947-a8f0-bfac35b6d146' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('744c36fd-aa3b-4f17-b377-8153f2fdb0f6', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('331ac071-5642-4b0c-96b8-d8ba7d8e8de7', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c1502cb0-9290-4c03-8395-f66fa203aa3d', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3ce36948-c69e-4f84-9cf9-7afb7271dbbc', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('82830777-ec78-49b2-9165-1bd7308de363', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ac809075-b3a1-4507-9cb8-be044f15d94e', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0e93350a-4d64-481b-b2aa-f5ba4294ec6e', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cd19cbdb-50ae-4a8d-b162-617e3cf86282', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9becb7f1-b8f8-4609-8151-5ee37f7078d6', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c80fab63-496d-4173-a3b7-f6baf4a5b63a', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('873beda6-f38c-4695-b3f8-b5671be1e07f', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8da81611-6cbd-4bea-b5c5-c45e52621454', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3d056574-9f80-4ab7-bec1-d7632b6e918d', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f2da9d5a-7156-4a41-aeff-6a72080131cc', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3db02ebb-df4d-442f-8127-6ea6df205052', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('26b45c85-b297-4e24-bc87-a0bf85dff89f', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('588c2f47-a8b6-432c-a2f4-45d8a17a1833', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9a4bad7c-7d22-4a39-b42f-23c36ade4a95', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('72155c2d-6b3b-40ee-bf66-e8681273923c', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('33bfa2ee-16e2-4c0f-b2c2-26899ea6d9bf', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('13f0a44b-34fb-485d-a26e-780069e440b8', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('049af78e-7016-47d1-8b63-e391b89c86d1', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c1a56a16-3815-40f0-9ea0-337c701dea28', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b1303948-dfc6-4dbe-8cf5-36bd94cfe484', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1a77394f-f77e-464f-a93e-6f21815914b2', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9da28ff9-b591-4370-b6fd-bf806515a51c', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('05383fbe-3e9e-4a5d-b379-15d2ae180f62', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5ec83e52-68c2-4b4b-9cf7-a16b2e1c8911', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('869d0a17-0c9d-4b81-99d5-e26440e5c402', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2eb8e258-f102-40e7-ac79-3d95cf0062fb', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2c999b96-8279-44fc-b238-3a8638c2e762', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f5274bb2-2680-44fb-b3ea-24689a216f45', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('188c6d4c-9fdb-4200-8de2-79c7493dadd0', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('28bdad59-6bc5-4c51-b61d-828140dbfa55', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b15ae762-d644-408f-b0e2-eb29c125bf26', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('60be2b10-127d-4155-9103-baffe89cd707', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c3c96f83-fe0a-4793-a8ba-8ffc241decf4', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6fea7431-608f-4bb8-9ec1-ac8329741669', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c433f27a-30ee-4887-b2fb-38ef5d30ca8f', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('94ade686-bc27-4c19-9fd8-837632305f6d', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('709831a8-c648-4cc0-b79c-445d7a1e0a7f', 1 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a0a4b897-273d-49e3-9e32-b1c1a3fc60db', 2 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('36473ca5-1fde-42a1-a19c-396b395a0be2', 4 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3653dbdb-a61f-473d-8d3f-c3af6d4147c9', 8 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('88f2d635-1fa9-42ce-b95c-e8ae552103f8', 12 , '2556d610-8d89-460c-94c0-f53df7f96b50' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f60ba535-4733-4f4b-95b7-fa10ff18f4f1', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('26ddbe60-99a3-41f0-9948-7ef2fa1523d1', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fe770c85-8e0c-4d61-9c3e-fa7894cc9709', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3f63b978-ec21-4fcd-bad0-9387e274b312', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cace959c-ede6-4ac2-aa96-65c54148348a', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fda0076d-9903-42d1-b66c-79ca50b86b84', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('afb9caba-7fcb-4553-8101-5c6174f74679', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('56ab980f-4b99-4fd0-8986-56a26e3a70fb', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bf45b3db-42ba-488b-94f2-0f3362d28381', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('35702b76-fdd9-42e7-ad53-075b19856e93', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3ba8b2cd-dfbe-4175-8285-dea2d6072f0c', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eb085385-f474-4708-b2cd-44a1e98969d1', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('49bec799-979b-49b4-baf2-b7dfff9543be', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('02b355d1-ed47-4be0-b501-4a3234a8f6aa', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d7e56656-973d-429e-9718-f12e16bfde6b', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5ef9c65b-bdba-40c1-9477-c46e25ab799b', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7b243392-a934-4343-a134-299eb6a22f28', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('49e2308d-c8af-449b-b020-038e8d4a75dc', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c46ca073-d546-4b1a-8b3d-d8109a161491', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1143fb5f-74ca-4310-98c4-f363c54c12ef', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0698df2a-17d0-4cd7-baa1-715e0db5f73f', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d88a7891-f385-40dd-b871-da7ff237e8b4', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b195520e-504a-44a7-9d84-b395083c8c50', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7924dc36-eff6-443f-a644-384c786ed3c4', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('556a4d22-d248-4e14-b5e2-bf2cd2bbcb38', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('42da0287-592e-43ac-b0e2-50a9f85836bc', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1238b2f4-62a9-42a5-948a-9963690eeba0', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('678b3a15-ceac-4754-8343-c511080636ad', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2b41c697-0e8f-487a-bdb7-4c32758909bc', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9c1988d4-57e8-48c1-80e8-a50cdb559c3a', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9910e07b-b715-4260-a4c8-70a83f97b095', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bfd2035b-dcd0-4b82-bae2-8b4e872057a8', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('39b56bfe-8741-488a-84c0-22b5a42faac4', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a6d974e4-afa4-45c0-b6be-486c873d1718', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5e073740-ead4-42f0-bc3f-b3e6df782d9b', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b3fb825e-fe74-4805-97dc-794de366e1b1', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('721e7e5c-122b-49e5-b23e-b45e3f787fd4', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('0fac4e81-886f-48e7-9a00-0fe4264a75b0', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('b62588ae-4bc1-4cba-95ae-ea08ecde2406', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1ad49702-abab-4082-8ee3-54ff9e42f8ec', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('608a10fa-5808-4908-a6b5-f59b6d5ca0bf', 1 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fd34da2c-5913-41f4-abd0-f653dcfc85b6', 2 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3c38a4ea-e9d6-4128-84c1-4bc9ae133667', 4 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2fe17735-8698-40ef-93ec-eb3d20b7e9f2', 8 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('583b2714-cfc1-4bde-a1b9-5792811ccb93', 12 , '2556d610-8d89-460c-94c0-f53df7f96b51' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3360542c-81df-4146-922f-78532440641d', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('3a6ee84d-2258-41ce-b0bf-19ff3e9e7dbd', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('882881f0-45a8-4b0f-a500-39d795ed1e2d', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eec90772-42b1-4494-8300-115d69de49eb', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('078e1432-12ef-4c08-a856-b3dab8f577c2', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('902c89ad-90e3-4cb8-8b04-6cef1b5e7a2a', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('25360fe1-aca1-4418-a5c9-6e100a9cd176', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('33e14550-0f3c-449c-b36b-bbd7738ffe9e', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d6deb0ca-853e-4d10-a507-769fde42c683', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1e6a58eb-9ad5-4f4d-8ba3-f5b0b6ad880d', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('058cfb55-1344-4a4e-9e89-41115031b563', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e73cde8c-04da-4b5c-b6f5-a490ffc1697d', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d4d1b7dc-258b-4cce-9ef1-486b854e1c13', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('38b5694c-7ec4-4bfc-904f-c6e9e9dcf8de', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4b8620e3-430c-401f-958c-7d139fcd237f', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5b42fbc8-897f-4858-9d4c-20f51a721ee8', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7b9f3d0f-ebab-4444-9495-d2be83cd9188', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5f40e14f-cb16-49d4-8c39-f420bb638ea6', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7230fa1d-0fde-4184-8f05-09af3718b6a6', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ee7f2909-f575-4572-9968-43a78a2f5c4f', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('efe449de-a19b-46d4-a532-969cb68aa524', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('aab240a1-a9f1-45b8-9d0c-8515f77e5cf8', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('94851504-ff9f-4c99-906c-59d5c5974465', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('caeb0090-8970-4a25-817c-50b5978579a3', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('733e8e86-0ff0-4d5d-b337-f6f0a1e7893d', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('625cec0d-8ef5-47f3-8dbf-5b7e83b9c9e7', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('f4cd9023-8784-42e7-bbbf-7ed4e2b38219', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('23a495f7-0851-4056-81ac-3e503056ca25', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('98a48482-a600-490b-8761-1c3762ac4e4a', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ab7b7452-56ed-4808-a5f6-76143af12225', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7ba07afb-7094-4330-ae42-8c8fd642301b', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('88f2d87e-eb90-4668-acee-fb7fb02b31fa', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('9ad8faf0-f208-45c3-8ca3-7d4f20b1ecb7', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('44c3255c-dbd9-4541-89a3-9a134494581f', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ba5dc41a-42a2-4fe5-9e6b-281647a3bc80', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c86f49d8-5cfa-4c16-ba78-c9bcaead20a6', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('be83e99c-3e03-4e2c-9f73-23480d3ffbaa', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c8d1a75b-c2db-4c9e-bc8f-84adf5debc09', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c0c4be61-9872-4a1a-9a52-e6d21ff553cb', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('54053d30-cb90-4158-b386-d1b95710871a', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('7dcbb2ce-d6ea-4121-ae60-153670984139', 1 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('10ce0b25-dcb5-4312-b767-b09658a8ff1b', 2 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('81f67a60-8c39-42e4-af6c-7210ed17d010', 4 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a5a6d557-1cab-4076-8211-bab33a73e4ff', 8 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('46430c4d-3687-4638-8a95-88ebeae852ba', 12 , '2556d610-8d89-460c-94c0-f53df7f96b52' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('98da3382-0b46-47b6-a819-1a45f99d578c', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ef8e44b8-c554-4b30-8130-0f0255bc3740', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('bcfc34bc-273d-4e2d-affc-8b54acbbfd86', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('af20df9c-06e7-4356-94ed-15aaa5706755', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6ee7e0e7-8d4d-49c0-be67-d2511b92917b', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 2);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('6d6ce36f-1c49-4052-bc41-9bff00572f8c', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('69ee5793-b7eb-453f-b530-64db59a0a019', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e9079f23-9aab-428f-8779-e71f2d37b433', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4867d70f-e978-4697-8377-c28c7f610dc6', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('458d9f24-1805-46b7-8bfb-8a5acd06ee7c', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 4);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('57b46ad8-3281-4aaa-a962-1db731bccd5f', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('ba1587d8-6474-4b58-a1d4-5b112aac04cf', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('71c147c1-eb43-4f8a-9708-53198a480d18', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('577a7392-bd9c-46b9-82d5-757a5be53340', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8b9063e1-7eae-463d-95e5-7807fcce9efd', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 6);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('103eaed8-b13f-4d22-92e6-ba0e30f30324', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2249c534-2fdb-4b71-a266-1e0670ce1e5a', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d6f9a2b7-18e6-4ff2-9714-a2597aae2ed1', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('16edb0e5-ee3b-4e84-bf28-ccaa0d69a1c9', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8f157fc7-d0de-41b2-a4ea-0ba29f1407db', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 8);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('319ead37-a074-4753-81ce-ec652b153164', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5765369a-cc79-4d40-8fec-846e4b76ee83', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('c20dbed3-d420-4294-b63a-5a9a1a10a608', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e2d4a822-ac45-4f3c-8190-77b3be4d38a3', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a5340eb7-0b3f-477b-9c87-3ac6a9e95da6', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 10);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('28bcdc0a-4001-4ebf-9ef8-0aca3e2b0a78', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('83dfda03-0576-49bc-94db-da3b42b0f47c', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('12b2048b-f539-4271-aaa6-76f3d348784c', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4389bc42-9efc-4e7a-a702-4d6849dca037', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('44662004-1c22-499c-87bb-ab2caef2e546', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 12);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('96d60079-656c-46e0-a97d-bb6586f05bf5', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('afb6c156-205f-49d1-a1cb-45f62de170d3', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('cc98f74b-02a2-4e42-b16b-587ba41f2f2b', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('1b9fcb02-19d1-4fa9-b2f0-fe61b85e9971', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('713b8f46-1006-4353-945b-f065285f5b9b', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 14);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('93cca7a9-9a68-4a25-ab5b-6dece98be245', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('d56349eb-03ff-43cb-888d-6b1816e9fff6', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('8b180163-7adb-47d3-8230-c25de2a24811', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('2e8e4216-b032-49ec-931e-d10219260237', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('4cf61769-833a-481a-9159-932b46b277f9', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 16);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('e9a17f16-4c73-4fcc-8abf-a9b46cd325e7', 1 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('a85aa3b1-4224-4676-b69b-11462c072378', 2 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('fa4706b6-2aab-4e5b-bc68-7752ddc95c9c', 4 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('5a77c529-2623-4135-aaf9-8a2f6f14ffce', 8 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 18);
INSERT INTO tables (tables_id,number_of_sits,restaurant_id,arrival_time) VALUES ('eb0eccd3-c9c5-4913-9cf2-b51ffbb5ad56', 12 , '2556d610-8d89-460c-94c0-f53df7f96b53' , 18);




DROP TABLE IF EXISTS `timeperiod`;
CREATE TABLE `timeperiod` (

    timeperiod_id CHAR(36) NOT NULL DEFAULT (UUID()),
    restaurant_id varchar(255),
	account_id varchar(255),
    start_period date,
    end_period date,
	PRIMARY KEY (`timeperiod_id`)
	CONSTRAINT `timeperiod_ibfk_1` FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id) ON DELETE NO ACTION ON UPDATE NO ACTION
	CONSTRAINT `timeperiod_ibfk_2` FOREIGN KEY (account_id) REFERENCES account(account_id) ON DELETE NO ACTION ON UPDATE NO ACTION

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `time`
--

INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('e2506176-30cf-4b4e-b7c2-85a10a8f7317', '0d3f08f9-9782-4705-ade8-48cbd7b00a9a', 'c8a80a4c-1063-4353-b365-c1ce82765a3e', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('2074dc17-1634-4561-bfa5-4380ef52d738', '81775c1d-c4c5-4687-8dbc-430a117467d6', 'c8a80a4c-1063-4353-b365-c1ce82765a3e', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('ac76b9f5-8430-4ec5-8b02-1d396cf75330', '2556d610-8d89-460c-94c0-f53df7f96bff', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('a14eb1c3-805d-42ee-8124-dbc43930cc16', 'a1602f14-3b3f-4674-bc0f-292c05987d12', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('db674307-8f04-4b7b-931d-ca77e3bf54bb', '0b811b80-79aa-4947-a8f0-bfac35b6d143', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('27ae1dd4-37df-4b24-bfa1-9cc8fe669250', '0b811b80-79aa-4947-a8f0-bfac35b6d144', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('fc95e83b-ba00-41e8-bd42-6a3ea00c6a9f', '0b811b80-79aa-4947-a8f0-bfac35b6d145', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('c21a4c0c-6f71-4e3f-a44d-b228b2c338df', '0b811b80-79aa-4947-a8f0-bfac35b6d146', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('2d5e79da-8b15-4196-9a14-8716cd07e890', '2556d610-8d89-460c-94c0-f53df7f96b50', 'd5565ecd-5438-45e3-a27a-1899aae97f5c', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('9e5af8e1-d5af-4e5b-ad8b-e04e8daa1d7b', '2556d610-8d89-460c-94c0-f53df7f96b51', '23556262-43e1-4a9d-88c0-af06dbdde4f7', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('e320458d-1150-4181-8759-cdad8611ccf2', '2556d610-8d89-460c-94c0-f53df7f96b52', '23556262-43e1-4a9d-88c0-af06dbdde4f7', '2019-01-01','2019-12-30');
INSERT INTO timeperiod(timeperiod_id,restaurant_id,account_id,start_period,end_period) VALUES ('3d3db93a-fd41-4c7e-b6a8-f3f3ea49042a', '2556d610-8d89-460c-94c0-f53df7f96b53', '23556262-43e1-4a9d-88c0-af06dbdde4f7', '2019-01-01','2019-12-30');
--
-- Table structure for table `restaurant`
--
DROP TABLE IF EXISTS `restaurant`;

CREATE TABLE `restaurant` (
    restaurant_id CHAR(36) NOT NULL DEFAULT (UUID()),
    name varchar(255),
    image varchar(255),
    location varchar(255),
    contact_number int(50),
    longitude varchar(50),
    latitude varchar(50),
    description longtext,
	PRIMARY KEY (`restaurant_id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


--
-- Dumping data for table `restaurant`
--

INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('0d3f08f9-9782-4705-ade8-48cbd7b00a9a', 'Shobosho', 'Shobosho.jpg', '17 Leigh Street Adelaide, AU-SA 5000',
'883662224', '-34.9236182', '138.5973681', 'At Shōbōsho we blend smoke, steam, and fire. The ancient traditions of Japanese yakitori is combined with the finesse, skill & texture of all that is raw, cured, pickled and fermented.');


INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)
VALUES ('81775c1d-c4c5-4687-8dbc-430a117467d6','Osteria Oggi', 'Osteria Oggi.jpg','76 Pirie Street Adelaide, AU-SA 5000',
'83592525', '-34.9254427', '138.6025924', 'At Osteria Oggi, we cook food that we love to eat using seasonal produce, and serve it in a way that is designed to share. Pasta is made fresh daily, with a carefully chosen wine list to match.');




INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('2556d610-8d89-460c-94c0-f53df7f96bff', 'Nido Bar & Pasta', 'Nido Bar & Pasta.jpg', '160 King William Road Hyde Park, AU-SA 5061', '83732044', '-34.9548079', '138.5998573', 'Nido Bar & Pasta Taking up residence in the former The Pot, Nido Bar & Pasta is a suburban aperitivo bar featuring artisanal cured meats and salumi, and bar snacks, with larger plates represented by hand-made pastas, and grilled meats. Some tables are furnished with comfortable leather-upholstered stools. If you have a particular seating request, please let us know with your booking. We will do our utmost to accommodate requests!');




INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('a1602f14-3b3f-4674-bc0f-292c05987d12', 'Riverside Restaurant', 'Riverside Restaurant.jpg','InterContinental Adelaide North Terrace Adelaide, AU-SA 5000',
'82382400', '-34.920605', '138.5966225', 'Modern food and a welcoming environment are the embodiment of our dishes in Riverside Restaurant, skillfully and lovingly prepared with local ingredients. Popular menu items include the Barossa pork shoulder, from locally sourced, heritage breeds that are free range and milk fed, or the Carey Gully apple-fed chicken. You can also go more healthy with the Catch of the Day or indulge in the amazing array of vegan food options, in our luxurious buffet breakfast or in our convenient $25 lunch package. We also have an extensive wine selection ranging from NV Krug Grande Cuvee Champagne to famed local Barossa Shiraz such as The Beauty from Hentley Farm. End the visit with one of our mouth-watering desserts, an espresso or a cognac.

As the system allows bookings of maximum 20, please explore the option of an additional booking until reaching the total amount of seats needed. Please leave your contact details for us to be in touch with you to define further info');




INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('0b811b80-79aa-4947-a8f0-bfac35b6d143', 'Melt CBD', 'Melt CBD.jpg', '38 Waymouth Street Adelaide, AU-SA 5000', '82116723', '-34.9257419', '138.5982322', 'Melt CBD is Adelaide’s favourite tapas and pizza venue, in the heart of the city. Join us for a drink at the bar, a quick lunch or long dinner, and everything in between.

We are open all day, from 11am, serving up a delicious and unique selection of pizzas and a regularly updated tapas menu. Our wine list is extensive and we also offer beers on tap.

Our first floor space is ideal for large groups and functions, or for your next corporate off-site workshop.');



INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('0b811b80-79aa-4947-a8f0-bfac35b6d144', 'Crack Kitchen', 'Crack Kitchen.jpg', '13 Franklin St Adelaide, AU-SA 5000', '84101407', '-34.9273686', '138.59852', 'Formerly a Bank of Adelaide, Crack Kitchen is now focussed on quality food and coffee, serving time-poor office workers during the week and the leisurely brunch set on weekends. Coffee is seasonally roasted and blended on site from our roastery on the mezzanine level of the building. Food motto is ‘contemporary yet controversial’ however we err more on the side of leading edge than bleeding edge…');



INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('0b811b80-79aa-4947-a8f0-bfac35b6d145', 'Johnny’s Kitchen', 'Johnny’s Kitchen.jpg', '56 Glen Osmond Road Parkside, AU-SA 5063', '72260005', '-34.9426225', '-34.9426225', 'From traditional Indian taste A relax and comfort zone area to boosting and Dine-in.A perfect place for a gathering and throwing a party taste from various parts of indian territory. Its our commitment to use authentic genuine ingredients.');



INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('0b811b80-79aa-4947-a8f0-bfac35b6d146', 'Five Feet Street Eats', 'Five Feet Street Eats.jpg', '24 Waymouth St Adelaide, AU-SA 5000',
'71202514', '-34.9258276', '138.5986265', '5 Feet Street Eat, ‘Kaki Lima’ means street food. It’s name comes from the five-foot-wide sidewalks in Indonesia that are crowed with proud locals selling their traditional cuisine. 

We are located in very busy street in Adelaide CBD.The Five Feet menu is short and simple, divided not into entrees, lunch and mains but “Quick & Run” and “If You Have a Spare Minute”.
Vego and vegan dishes are tagged “Things That We Do Not Want to Miss”.
No matter what you order, the emphasis is on good value and fast service. It’s the kind of place you can do lunch in 15 minutes or settle in after work for a few beers (or work your way through the all-SA wine list) with some chicken skewers, sea star dumplings, pork belly Pad Pik King or a slow-cooked Massaman Beef Brisket to share.

Chef Watcharin Chantaramad heads up the Thai side, while Sing Chaen Tielooks after all things Malaysian.');




INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('2556d610-8d89-460c-94c0-f53df7f96b50', 'Shiki Japanese Restaurant', 'Shiki Japanese Restaurant.jpg', 'InterContinental Hotel North Terrace Adelaide, AU-SA 5000', '82382400', '-34.9205294', '138.5963479', 'Adelaide’s Shiki is a favourite among locals and visitors for its traditional and fresh take on Japanese Cuisine served in its inviting restaurant, located on the Upper Lobby of the luxurious five-star InterContinental Adelaide. 

For starters, the sashimi selection or the tempura soft shell mud carb are sensational selections. Some of Shiki’s popular dishes include letting us choose for you with our range of set menu selections such as the Kayki which includes lobster tails infused with truffle butter or the Hanabi which includes seared Mt Gambier beef tenderloin steak with fried garlic and green peppercorns. 

Shiki\'s Japanese green tea ice-cream with red bean sauce is the perfect dessert with which to finish your meal.');




INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('2556d610-8d89-460c-94c0-f53df7f96b51', 'Meze Mazi - Adelaide', 'Meze Mazi - Adelaide.jpg', '86b Prospect Road Prospect, AU-SA 5082', '82692777', '-34.8892673', '138.5940698', 'Andrew Papadakis moved to Australia in 2013 with the vision of sharing an authentic piece of Greece through the culture of food and family. 

At Meze-Mazi, we’re all about authenticity. Our food is derived from old family recipes and our native Greek chefs craft each dish with the same love and passion that they do for their own families.');



INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('2556d610-8d89-460c-94c0-f53df7f96b52', 'Press* Food & Wine', 'Press* Food & Wine.jpg', '40 Waymouth St Adelaide, AU-SA 5000', '82118048', '-34.925738', '138.59815', 'At press*, we bring the best products from our patch of the earth to the table, and have fun doing it. Our kitchen is open all day for a quick bite to eat, or to settle in for a few hours. Bookings are taken for our upstairs loft area (walk-ins are welcome downstairs).');




INSERT INTO restaurant (restaurant_id,name,image,location,contact_number,longitude,latitude, description)

VALUES ('2556d610-8d89-460c-94c0-f53df7f96b53', 'Melt Henley', 'Melt Henley.jpg', 'hop 5 269 Seaview Road Henley Beach, AU-SA 5022', '84228606', '-34.926738', '138.59715', 'We are a vibrant sea side tapas and pizzeria restaurant located in a prime viewing location of one of South Australia\'s most popular coast lines. Henley Beach is easily accessed from all popular hubs within the city of Adelaide.

Over looking Henley Square and rolling coast we offer a diverse series of dining and seating options to suit any occasion. Fitted with floor to ceiling windows you\'re completely surrounded by the beauty of our beach where ever you are seated.

Together with our chefs and Kitchen team we are in the business of facilitating a good time. We have brought the unique and established brand that is Melt, to the seaside – a premium offering of food, service, environment, the whole package - in an exceptionally fun way.');




DROP TABLE IF EXISTS `rating`;
CREATE TABLE `rating` (
  rating_id CHAR(36) NOT NULL DEFAULT (UUID()),
  account_id varchar(255),
  rating_date datetime,
  rating_value TINYINT,
  PRIMARY KEY (`rating_id`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (account_id) REFERENCES account(account_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




INSERT INTO rating (rating_id,account_id,rating_date,rating_value) VALUES ('349c048a-204d-4c92-a070-6df4a62c33ca','349c048a-204d-4c92-a070-6df4a62c33cc','2019-05-16 12:00:00',2);

INSERT INTO rating (rating_id,account_id,rating_date,rating_value) VALUES ('23556262-43e1-4a9d-88c0-af06dbdde4fb','23556262-43e1-4a9d-88c0-af06dbdde4f7','2019-05-16 12:00:00',3);

INSERT INTO rating (rating_id,account_id,rating_date,rating_value) VALUES ('c8a80a4c-1063-4353-b365-c1ce82765a3c','c8a80a4c-1063-4353-b365-c1ce82765a3e','2019-05-16 12:00:00',4);














DROP VIEW IF EXISTS `restaurant_timeperiod_account`;

CREATE VIEW restaurant_timeperiod_account AS
SELECT
	CONCAT(a.account_id, tp.timeperiod_id, r.restaurant_id) AS restaurant_timeperiod_account_id,
    a.account_id AS account_TTT_account_id,
    a.first_name AS account_TTT_first_name,
    a.last_name AS account_TTT_last_name,
    a.username AS account_TTT_username,
    a.email AS account_TTT_email,
    a.contact_number AS account_TTT_contact_number,
    tp.timeperiod_id AS timeperiod_TTT_timeperiod_id,
    tp.start_period AS timeperiod_TTT_start_period,
    tp.end_period AS timeperiod_TTT_end_period,
    r.restaurant_id AS restaurant_TTT_restaurant_id,
    r.name AS restaurant_TTT_name,
    r.image AS restaurant_TTT_image,
    r.location AS restaurant_TTT_location,
    r.contact_number AS restaurant_TTT_contact_number,
    r.longitude AS restaurant_TTT_longitude,
    r.latitude AS restaurant_TTT_latitude,
    r.description AS restaurant_TTT_description
FROM
    account a
INNER JOIN
    timeperiod tp
ON
    a.account_id = tp.account_id
INNER JOIN
    restaurant r
ON
    tp.restaurant_id = r.restaurant_id;
	
	
	
	
	