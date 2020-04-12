package com.finki.bazi.bazi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@NoArgsConstructor
@Data

public class ReviewDTO {
    private Integer reviewId;
    private String reviewText;
    private String reviewDate;
    private String firstName;
    private String lastName;

    public ReviewDTO(Review review){
        this.reviewId = review.getReviewId();
        this.reviewText = review.getReviewText();
        this.reviewDate = review.getReviewDate();
        this.firstName = review.getClient().getClientFirstname();
        this.lastName = review.getClient().getClientLastname();
    }
    public ReviewDTO data(){
        ReviewDTO reviewDTO = new ReviewDTO();
        reviewDTO.setReviewId(this.reviewId);
        reviewDTO.setReviewText(this.reviewText);
        reviewDTO.setReviewDate(this.reviewDate);
        return reviewDTO;
    }

}

