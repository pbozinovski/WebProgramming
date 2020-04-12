package com.finki.bazi.bazi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table(name="payments")
public class Payment {

    @Id
    private Long paymentId;
    private Integer paymentPrice;
    @JsonIgnore
    @OneToOne(mappedBy = "payment")
    private Order order;

    public Payment(Long id, Integer price){
        this.paymentId = id;
        this.paymentPrice = price;
    }
}
