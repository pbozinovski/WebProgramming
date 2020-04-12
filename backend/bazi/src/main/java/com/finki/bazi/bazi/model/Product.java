package com.finki.bazi.bazi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table(name="products")
public class Product {
    @Id
    private Integer productId;
    private String productName;
    private Integer productQuantity;
    private Double productPrice;
    private String productBrand;
    private String productDescription;
    private String productType;
    private String productImage;

    @JsonIgnore
    @ManyToMany(mappedBy = "products")
    private List<Order> orders;

    @PreRemove
    private void removeOrdersFromProducts() {
        for (Order o : orders) {
            o.getProducts().remove(this);
        }
    }

    @OneToMany(mappedBy = "product", cascade = CascadeType.REMOVE)
    private List<Review> reviews;

    public Product(Integer productId, String productName, Integer productQuantity, Double productPrice, String productBrand, String productDescription, String productType, String productImage) {
        this.productId = productId;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.productPrice = productPrice;
        this.productBrand = productBrand;
        this.productDescription = productDescription;
        this.productType = productType;
        this.productImage = productImage;
    }
}
