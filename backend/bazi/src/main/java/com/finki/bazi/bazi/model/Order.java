package com.finki.bazi.bazi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@NoArgsConstructor
@Data
@Table(name="orders")
public class Order {

    @Id
    private Long orderId;
    //imav problemi so date, zatoa cuvam string
    private String orderDate;


    @ManyToMany(fetch = FetchType.EAGER)
    private List<Product> products;


    @ManyToOne
    private Client client;

    @OneToOne
    private Payment payment;

    public Order( Long orderId, String orderDate, List<Product> products, Client client, Payment payment){
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.products = products;
        this.client = client;
        this.payment = payment;
    }

}
