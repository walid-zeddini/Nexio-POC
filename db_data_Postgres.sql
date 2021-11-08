-- ----------------------------
-- Insertions
-- ----------------------------
INSERT INTO categorie VALUES ('1', 'LTP', 'LabTops');
INSERT INTO categorie VALUES ('2', 'ORD', 'Ordinateurs');
INSERT INTO categorie VALUES ('3', 'CVD', 'CD et DVD Drives');
INSERT INTO categorie VALUES ('4', 'HDR', 'Hard Drives');
INSERT INTO categorie VALUES ('5', 'PRI', 'Inkjet Printers');
INSERT INTO categorie VALUES ('6', 'ROUT', 'Internet Routers');
INSERT INTO categorie VALUES ('7', 'BEY', 'Keyboards');
INSERT INTO categorie VALUES ('8', 'LPR', 'Laser Printers');
INSERT INTO categorie VALUES ('9', 'NTB', 'Netbooks');
INSERT INTO categorie VALUES ('10', 'NTA', 'Network Adapters');
INSERT INTO categorie VALUES ('11', 'NTS', 'Network Switches');
INSERT INTO categorie VALUES ('12', 'CPU', 'Processors (CPUs)');
INSERT INTO categorie VALUES ('13', 'SCA', 'Scanners');
INSERT INTO categorie VALUES ('14', 'SDD', 'SD Secure Digital');
INSERT INTO categorie VALUES ('15', 'SON', 'Sound Cards');
INSERT INTO categorie VALUES ('16', 'SPK', 'Speakers et Audio');
INSERT INTO categorie VALUES ('17', 'USB', 'USB Flash Drives');
INSERT INTO categorie VALUES ('18', 'VID', 'Video Cards');
INSERT INTO categorie VALUES ('19', 'CAM', 'Webcams');
INSERT INTO categorie VALUES ('20', 'WIR', 'Wireless Accessories');
 


INSERT INTO client VALUES ('1', '21-1ZW',	'ZEDDINI',	'Walid',	TO_DATE('13/09/1977', 'dd/mm/yyyy'),	'15, Rue des Aghlabides',	'Tunis',	'2045',	'+216 71724223',	'+216 71258369',	'+216 98464641',	'walid.@zeddini.com');
INSERT INTO client VALUES ('2',	'21-3VP',	'VERMEERSCH', 	'Patrick', TO_DATE('02/01/1982', 'dd/mm/yyyy'),	'6 , Rue des Sapins',	'Montreal',	'5200',	'+514-409-4776','+514-409-4776','514-409-4776',	'vp.@nexio.com');
INSERT INTO client VALUES ('3',	'21-2LE',	'LEPONTIER',	'Eric',	TO_DATE('01/01/1984', 'dd/mm/yyyy'),	'27 , Rue des Beaux Arts',	'Paris',	'72150',	'+33 987654321',	'+33 6547125858',	'+33 6547125858','le.@eisti.fr');

INSERT INTO produit VALUES ('1',  'LTP-AcerAX3300', 'Acer', 'Aspire AX3300','Acer Aspire AX3300-ED2215A AMD Athlon II X2 215 4GB 640GB GeForce 9200 Winndows 10 Home Desktop ', '480', '12', '1');
INSERT INTO produit VALUES ('2',  'CAM-SamsungR530L', 'Samsung', 'R530L ', 'Samsung R530L Intel Core 2 Duo T6600 4GB 500GB 15.6IN HD WLAN Webcam Windows 10 Premium Notebook Red ','849.99', '15', '1');
INSERT INTO produit VALUES ('3',  'ORD-SamsungR480', 'Samsung', 'R480-I5','Samsung R480-I5 Intel Core i9 430M 4GB 500GB 14IN HD WLAN Webcam Windows 10 Premium Notebook Red ', '370', '24', '1');
INSERT INTO produit VALUES ('4',  'LTP-MSIGX640',  'MSI', 'GX640-098US','MSI GX640-098US Intel Core i5 430M 4GB 500GB 15.4IN WSXGA+ Radeon HD5850 Windows 7 Premium Notebook ', '500', '30','1');
INSERT INTO produit VALUES ('5',  'LTP-ToshibaRL450-01M', 'Toshiba', 'Satellite L450-01M',  'Toshiba Satellite L450-01M Intel T4300 4GB 250GB 15.6IN HD DVDRW Windows 7 Home Premium Notebook ','670.99', '18','1');
INSERT INTO produit VALUES ('6',  'ORD-AcerR3610',  'Acer', 'R3610','Acer R3610 Revo Intel Atom 330 4GB 500GB NVIDIA ION HDMI eSATA WLAN GbE Windows 10 Home Premium ', '589', '60','1');
INSERT INTO produit VALUES ('7',  'LTP-AcerM3620', 'Acer', 'M3620', 'Acer M3620 Revo Intel Atom 330 2GB 160GB NVIDIA ION HDMI eSATA 802.11N GbE Windows 7 Home Premium ', '599.99', '38','1');
INSERT INTO produit VALUES ('8',  'LTP-HPCQ5210F', 'HP Compaq', 'CQ5210F', 'HP Compaq CQ5210F AMD Athlon II X2 215 3GB 500GB DVDRW Windows 10 Premium X64 Desktop PC ', '75', '56','1');
INSERT INTO produit VALUES ('9',  'LTP-LenovoS12', 'Lenovo', 'Ideapad S12','Lenovo Ideapad S12 Intel Atom N270 1.6GHZ 1GB 160GB 12.1IN WXGA Webcam Windows XP Home Netbook 6CELL',  '47', '70','1');
INSERT INTO produit VALUES ('10',  'ORD-Dell15',  'Dell', 'Inspiron 15 Nb','Dell Inspiron 15 Nb Dual Core T4200 2.0GHZ 3GB 250GB 15.6IN DVDRW Vista Basic 1 Yr Depot Warranty ', '599', '47','1');
INSERT INTO produit VALUES ('11',  'ORD-ToshibaNB305-01E', 'Toshiba', 'NB305-01E', 'Toshiba NB305-01E Intel Atom N450 1GB 250GB 10.1IN WSVGA Windows 7 Starter Netbook Blue 6 Cell ','789', '29','1');
INSERT INTO produit VALUES ('12',  'CVD-HPCQDV7','HP Compaq', 'Pavilion DV7', 'HP Pavilion DV7 Intel Core 2 Duo T6600 4GB 250GB DVDRW Windows 7 Premium X64 Desktop PC ', '840', '19', '1');
INSERT INTO produit VALUES ('13',  'CVD-ToshibaP500',  'Toshiba', 'Satellite P500','Toshiba Satellite P500-00T Intel i7 720QM 4GB 640GB 18.4IN HD+ GeForce GT330M Bluray Win 7 Notebook ', '569', '78','1');
INSERT INTO produit VALUES ('14',  'ORD-ASUS1201N', 'ASUS', 'Eee PC 1201N', 'ASUS Eee PC 1201N Black Atom N330 NVIDIA ION 2GB 250G 12.1IN 1366X768 Draft N WIN7 Premium Netbook ', '489', '120','1');
INSERT INTO produit VALUES ('15', 'CDV-MicroLux700', 'MicroLux', 'MicroLux', 'CD VERBATIM 700 MO 80 MINUTES', '12', '3000','1');
INSERT INTO produit VALUES ('16', 'SPK-Patriot5IN', 'Patriot', 'Box Office', 'Patriot Box Office Network Media Player 2.5IN HDD Support USB HDMI LAN MKV RMVB ISO DTS P2P',  '35', '400','3');
INSERT INTO produit VALUES ('17', 'CPU-IntelI9', 'Intel', 'Core i9', 'Intel Core i5 750 Quad Core Processor Lynnfield LGA1156 2.66GHZ 8MB Cache Retail Box',  '120', '500','16');
INSERT INTO produit VALUES ('18', 'PRI-Powercolor5870', 'Powercolor', 'Radeon HD','Powercolor Radeon HD 5870 1GB GDDR5 2XDVI HDMI Display Port DIRECTX11 PCI-E Video Card W/ DIRT2', '34', '120', '12');
INSERT INTO produit VALUES ('19', 'CAM-XFX5770', 'XFX', 'Radeon', 'XFX Radeon HD 5770 850MHZ 1GB 4.8GHZ GDDR5 2XDVI HDMI Display Port DIRECTX11 PCI-E Video CARD-', '370','94', '18');
INSERT INTO produit VALUES ('20', 'USB-KingstonSATA2',  'Kingston', 'SSDNow','Kingston SSDNow V Series Gen II 64GB 2.5IN SATA2 Solid State Disk Flash Drive ', '10', '5000', '17');
INSERT INTO produit VALUES ('21', 'CAM-Warpia720P', 'Warpia', 'Lifecam','Warpia Lifecam Cinema 720P 16:9 HD Webcam Retail Box Auto Focus Noise Cancelling Microphone ', '560', '59', '17');
INSERT INTO produit VALUES ('22',  'CAM-Toshiba800D',  'Toshiba', 'Obsidian ','Toshiba Corsair Obsidian Series 800D Full Tower Case EATX 5X5.25 4X3.5 ',  '34', '120','2');
INSERT INTO produit VALUES ('23', 'SDD-Western500GB',  'Western', 'Essential','Western Digital My Passport Essential 500GB External Hard Drive USB 2.0 Black ',  '4000', '100','4');

INSERT INTO commande VALUES ('1', 'C2021-00001',  TO_DATE('22/11/2021', 'dd/mm/yyyy'),35000.00, '1',2);
INSERT INTO commande VALUES ('2', 'C2021-00002',  TO_DATE('23/11/2021', 'dd/mm/yyyy'),40000.00, '1',2);
INSERT INTO commande VALUES ('3', 'C2021-00003',  TO_DATE('22/11/2021', 'dd/mm/yyyy'),12000.00, '1',2);

INSERT INTO carnet_commande VALUES ('1', 100,  10.00, 10000.00, '1',1,1);
INSERT INTO carnet_commande VALUES ('2', 25,   10.00, 25000.00, '1',2,1);

INSERT INTO carnet_commande VALUES ('3', 10000,  3.00, 30000.00, '1',8,2);
INSERT INTO carnet_commande VALUES ('4', 10000,  1.00, 10000.00, '1',7,2);

INSERT INTO carnet_commande VALUES ('5', 400,  30.00, 12000.00, '1',20,3);
