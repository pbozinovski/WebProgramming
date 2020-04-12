package com.finki.bazi.bazi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.finki.bazi.bazi.model.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@NoArgsConstructor
@Data
public class OrderDTO {

    private Long orderId;
    private String orderDate;
    private Payment payment;
    private List<ProductDTO> products;

    public OrderDTO( Order order){
        this.orderId = order.getOrderId();
        this.orderDate = order.getOrderDate();
        this.payment = order.getPayment();
        this.products = new ArrayList<>();
        for (Product product: order.getProducts()
        ) {
            this.products.add(new ProductDTO(product));
        }
    }

}
