package com.finki.bazi.bazi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
@Table(name="reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reviewId;
    private String reviewText;
    ///imav problemi so date, zatoa cuvam string
    private String reviewDate;

    @JsonIgnore
    @ManyToOne
    private Product product;


    @ManyToOne
    private Client client;

    public Review(Integer reviewId, String reviewText, String date, Product product, Client client) {
        this.reviewId = reviewId;
        this.reviewText = reviewText;
        this.reviewDate = date;
        this.product = product;
        this.client = client;
    }


}
