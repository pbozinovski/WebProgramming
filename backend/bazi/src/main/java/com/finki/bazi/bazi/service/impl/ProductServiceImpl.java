package com.finki.bazi.bazi.service.impl;

import com.finki.bazi.bazi.dto.ProductDTO;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import com.finki.bazi.bazi.model.exceptions.InvalidProductIdException;
import com.finki.bazi.bazi.repository.ProductsRepository;
import com.finki.bazi.bazi.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductsRepository repository;

    public ProductServiceImpl(ProductsRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    @Override
    public List<ProductDTO> getAllProductsDTO() {
        List<Product> products = repository.findAll();
        List<ProductDTO> productsDTO = new ArrayList<>();
        for (Product product:products
             ) {
            productsDTO.add(new ProductDTO(product));
        }

        return productsDTO;
    }

    @Override
    public ProductDTO getByIdDTO(Integer id) {
        return new ProductDTO(repository.findById(id).orElseThrow(InvalidProductIdException::new));
    }

    @Override
    public Product getById(Integer id) {
        return repository.findById(id).orElseThrow(InvalidProductIdException::new);
    }

    @Override
    public void deleteProduct(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void addProduct(Integer id, String name, Integer quantity, Double price, String brand, String description, String type, String image) {
        Product product = new Product(id, name, quantity, price, brand, description, type, image);
        repository.save(product);
    }

    @Override
    public void updateProduct(Integer id, String name, Integer quantity, Double price, String brand, String type, String image) {
        Product product = this.repository.findById(id).orElseThrow(InvalidProductIdException::new);

        product.setProductName(name);
        product.setProductQuantity(quantity);
        product.setProductPrice(price);
        product.setProductBrand(brand);
        product.setProductType(type);
        product.setProductImage(image);
        repository.save(product);
    }
}
