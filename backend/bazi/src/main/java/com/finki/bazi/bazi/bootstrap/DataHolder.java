//package com.finki.bazi.bazi.bootstrap;
//
//import com.finki.bazi.bazi.model.Client;
//import com.finki.bazi.bazi.model.Product;
//import com.finki.bazi.bazi.model.Review;
//import com.finki.bazi.bazi.repository.ClientsRepository;
//import com.finki.bazi.bazi.repository.ProductsRepository;
//import com.finki.bazi.bazi.repository.ReviewsRepository;
//import lombok.Getter;
//import org.springframework.stereotype.Component;
//
//import javax.annotation.PostConstruct;
//import java.util.ArrayList;
//import java.util.List;
//
//@Component
//@Getter
//public class DataHolder {
//
//    public static final List<Product> products = new ArrayList<>();
//    public static final List<Client> clients = new ArrayList<>();
//    public static final List<Review> reviews = new ArrayList<>();
//
//    public final ProductsRepository productsRepository;
//    public final ClientsRepository clientsRepository;
//    public final ReviewsRepository reviewsRepository;
//
//    public DataHolder(ProductsRepository productsRepository, ClientsRepository clientsRepository, ReviewsRepository reviewsRepository) {
//        this.productsRepository = productsRepository;
//        this.clientsRepository = clientsRepository;
//        this.reviewsRepository = reviewsRepository;
//    }
//
//    @PostConstruct
//    public void init(){
//        products.add(new Product(1111, "MB Gigabyte Z390 AORUS MASTER", 10, 18.750,"Gigabyte", "Z390 AORUS MASTER motherboard uses an all IR digital CPU power design which includes both digital PWM Controller and PowlRstage MOSFET, and is capable of providing at least 40A of power from each phase, for a total of 480A.", "Motherboard","../images/imgMB.png"));
//        products.add(new Product(1112, "CPU Intel Core i9-9900K Coffee Lake", 20, 33.750,"Intel", "8 Cores / 16 Threads, 3.60 GHz up to 5.00 GHz / 16 MB Cache, Compatible only with Motherboards based on Intel 300 Series Chipsets, Intel Optane Memory Supported, Intel UHD Graphics 630\n", "CPU","../images/imgCPU.png"));
//        products.add(new Product(1113, "MSI GeForce RTX 2080 Ti VENTUS", 30, 67.430,"MSI", "This revolutionary architecture, combined with our all-new GeForce RTX™ platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before.", "GraphicsCard","../images/imgGPU.png"));
//        products.add(new Product(1114, "MB Gigabyte Z390 AORUS MASTER", 10, 18.750,"Gigabyte", "Z390 AORUS MASTER motherboard uses an all IR digital CPU power design which includes both digital PWM Controller and PowlRstage MOSFET, and is capable of providing at least 40A of power from each phase, for a total of 480A.", "Motherboard","../images/imgMB.png"));
//        products.add(new Product(1115, "CPU Intel Core i9-9900K Coffee Lake", 20, 33.750,"Intel", "8 Cores / 16 Threads, 3.60 GHz up to 5.00 GHz / 16 MB Cache, Compatible only with Motherboards based on Intel 300 Series Chipsets, Intel Optane Memory Supported, Intel UHD Graphics 630\n", "CPU","../images/imgCPU.png"));
//        products.add(new Product(1116, "MSI GeForce RTX 2080 Ti VENTUS", 30, 67.430,"MSI", "This revolutionary architecture, combined with our all-new GeForce RTX™ platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before.", "GraphicsCard","../images/imgGPU.png"));
//        products.add(new Product(1117, "MB Gigabyte Z390 AORUS MASTER", 10, 18.750,"Gigabyte", "Z390 AORUS MASTER motherboard uses an all IR digital CPU power design which includes both digital PWM Controller and PowlRstage MOSFET, and is capable of providing at least 40A of power from each phase, for a total of 480A.", "Motherboard","../images/imgMB.png"));
//        products.add(new Product(1118, "CPU Intel Core i9-9900K Coffee Lake", 20, 33.750,"Intel", "8 Cores / 16 Threads, 3.60 GHz up to 5.00 GHz / 16 MB Cache, Compatible only with Motherboards based on Intel 300 Series Chipsets, Intel Optane Memory Supported, Intel UHD Graphics 630\n", "CPU","../images/imgCPU.png"));
//        products.add(new Product(1119, "MSI GeForce RTX 2080 Ti VENTUS", 30, 67.430,"MSI", "This revolutionary architecture, combined with our all-new GeForce RTX™ platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading. You’ve never created and enjoyed games like this before.", "GraphicsCard","../images/imgGPU.png"));
//
//
//
//        clients.add(new Client(123123122L, "Petar", "Bozinovski", "test@gmail.com",  "test1234", "normal"));
//        clients.add(new Client(123123123L,"Jovan", "Jovanovski",  "test1@gmail.com","testtest",  "admin"));
//        clients.add(new Client(123123125L,"Stefan","Stefanovski",  "test2@gmail.com","test3243", "normal"));
//
//        reviews.add(new Review(132, "This is the first review!"));
//
//        this.productsRepository.saveAll(products);
//        this.clientsRepository.saveAll(clients);
//    }
//}
