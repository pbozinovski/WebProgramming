package com.finki.bazi.bazi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
public class ProductDTO {

    private Integer productId;
    private String productName;
    private Integer productQuantity;
    private Double productPrice;
    private String productBrand;
    private String productDescription;
    private String productType;
    private String productImage;
    //private List<Order> orders;
    private List<ReviewDTO> reviews;


    public ProductDTO(Integer productId, String productName, Integer productQuantity, Double productPrice, String productBrand, String productDescription, String productType, String productImage) {
        this.productId = productId;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productPrice = productPrice;
        this.productBrand = productBrand;
        this.productDescription = productDescription;
        this.productType = productType;
        this.productImage = productImage;
    }

    public ProductDTO(Product product){
        this.productId = product.getProductId();
        this.productName = product.getProductName();
        this.productQuantity = product.getProductQuantity();
        this.productPrice = product.getProductPrice();
        this.productBrand = product.getProductBrand();
        this.productDescription = product.getProductDescription();
        this.productType = product.getProductType();
        this.productImage = product.getProductImage();
        this.reviews = new ArrayList<>();
        for (Review rev: product.getReviews()
             ) {
            this.reviews.add(new ReviewDTO(rev));
        }
    }
    public ProductDTO data(){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductName(this.productName);
        return productDTO;
    }


}
