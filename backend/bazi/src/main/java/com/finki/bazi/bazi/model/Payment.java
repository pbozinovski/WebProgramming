package com.finki.bazi.bazi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;
    private Integer paymentPrice;
    @JsonIgnore
    @OneToOne(mappedBy = "payment")
    private Order order;

    public Payment(Integer price){
        this.paymentPrice = price;
    }
}
