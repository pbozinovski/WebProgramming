package com.finki.bazi.bazi.service;

import com.finki.bazi.bazi.dto.ProductDTO;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();
    List<ProductDTO> getAllProductsDTO();
    ProductDTO getByIdDTO(Integer id);
    Product getById(Integer id);
    void deleteProduct(Integer id);
    void addProduct(Integer id, String name, Integer quantity, Double price, String brand, String description, String type, String image);
    Product updateProduct(Integer id, String name, Integer quantity, Double price, String brand, String type, String image);
}
