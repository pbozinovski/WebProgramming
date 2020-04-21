INSERT INTO Products VALUES(1111, 'Gigabyte', 'Z390 AORUS MASTER motherboard uses an all IR digital CPU power design which includes both digital PWM Controller and PowlRstage MOSFET, and is capable of providing at least 40A of power from each phase, for a total of 480A.','../images/imgMB.png','MB Gigabyte Z390 AORUS MASTER',18850, 3, 'Motherboard')
INSERT INTO Products VALUES(1112, 'Intel', '8 Cores / 16 Threads, 3.60 GHz up to 5.00 GHz / 16 MB Cache, Compatible only with Motherboards based on Intel 300 Series Chipsets, Intel Optane Memory Supported, Intel UHD Graphics 630\n','../images/imgCPU.png','CPU Intel Core i9-9900K Coffee Lake',33750, 3, 'Processor')
INSERT INTO Products VALUES(1113, 'MSI', 'This revolutionary architecture, combined with our all-new GeForce RTX™ platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before.','../images/imgGPU.png','MSI GeForce RTX 2080 Ti VENTUS',67430, 3, 'GraphicsCard')
INSERT INTO Products VALUES(1114, 'Gigabyte', 'Z390 AORUS MASTER motherboard uses an all IR digital CPU power design which includes both digital PWM Controller and PowlRstage MOSFET, and is capable of providing at least 40A of power from each phase, for a total of 480A.','../images/imgMB.png','MB Gigabyte Z390 AORUS MASTER',18850, 10, 'Motherboard')


INSERT INTO Clients VALUES(1, 'admin@hotmail.com', 'Petar', 'Bozinovski', 'admin', 'admin')
INSERT INTO Clients VALUES(2, 'joan_k4@hotmail.com', 'Joan', 'Gozinovski', 'test1234', 'normal')
INSERT INTO Clients VALUES(3, 'dsad_k4@hotmail.com', 'Dsdas', 'Sozinovski', 'test1234', 'normal')
INSERT INTO Clients VALUES(4, 'kiro_k4@hotmail.com', 'Kiro', 'Kozinovski', 'test1234', 'normal')


INSERT INTO Reviews VALUES(1, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 'This is the first review', 1, 1111)
INSERT INTO Reviews VALUES(2, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 'This is the second review', 1, 1112)
INSERT INTO Reviews VALUES(3, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 'This is the third review', 1, 1113)
INSERT INTO Reviews VALUES(4, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 'This is the first review', 2, 1111)
INSERT INTO Reviews VALUES(5, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 'This is the first review', 3, 1111)

INSERT INTO Payments (payment_id, payment_price) VALUES(1, 138880)
INSERT INTO Payments (payment_id, payment_price) VALUES(2, 33750)
INSERT INTO Payments (payment_id, payment_price) VALUES(3, 67430)

INSERT INTO Orders VALUES(1, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 1, 1)
INSERT INTO Orders VALUES(2, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 1, 2)
INSERT INTO Orders VALUES(3, 'Sat Mar 21 2020 00:00:00 GMT+0100 (Central European Standard Time)', 1, 3)
INSERT INTO ORDERS_PRODUCTS VALUES(1, 1111)
INSERT INTO ORDERS_PRODUCTS VALUES(1, 1112)
INSERT INTO ORDERS_PRODUCTS VALUES(1, 1113)
INSERT INTO ORDERS_PRODUCTS VALUES(1, 1114)

INSERT INTO ORDERS_PRODUCTS VALUES(2, 1112)
INSERT INTO ORDERS_PRODUCTS VALUES(3, 1113)
-- -- INSERT INTO Products VALUES(1112, "CPU Intel Core i9-9900K Coffee Lake", 20, 33.750,"Intel", "8 Cores / 16 Threads, 3.60 GHz up to 5.00 GHz / 16 MB Cache, Compatible only with Motherboards based on Intel 300 Series Chipsets, Intel Optane Memory Supported, Intel UHD Graphics 630\n", "CPU","../images/imgCPU.png")
-- -- INSERT INTO Products VALUES(1113, "MSI GeForce RTX 2080 Ti VENTUS", 30, 67.430,"MSI", "This revolutionary architecture, combined with our all-new GeForce RTX™ platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before.", "GraphicsCard","../images/imgGPU.png")
-- -- INSERT INTO Products VALUES(1114, "MB Gigabyte Z390 AORUS MASTER", 10, 18.750,"Gigabyte", "Z390 AORUS MASTER motherboard uses an all IR digital CPU power design which includes both digital PWM Controller and PowlRstage MOSFET, and is capable of providing at least 40A of power from each phase, for a total of 480A.", "Motherboard","../images/imgMB.png")
-- -- INSERT INTO Products VALUES(1115, "CPU Intel Core i9-9900K Coffee Lake", 20, 33.750,"Intel", "8 Cores / 16 Threads, 3.60 GHz up to 5.00 GHz / 16 MB Cache, Compatible only with Motherboards based on Intel 300 Series Chipsets, Intel Optane Memory Supported, Intel UHD Graphics 630\n", "CPU","../images/imgCPU.png"));
-- -- INSERT INTO Products VALUES(1116, "MSI GeForce RTX 2080 Ti VENTUS", 30, 67.430,"MSI", "This revolutionary architecture, combined with our all-new GeForce RTX™ platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before.", "GraphicsCard","../images/imgGPU.png")