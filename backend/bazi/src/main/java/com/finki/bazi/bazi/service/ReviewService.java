package com.finki.bazi.bazi.service;

import com.finki.bazi.bazi.dto.ReviewDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;

import java.util.Date;
import java.util.List;

public interface ReviewService {

    List<Review> getAllReviews();
    Review getById(Integer id);
    void deleteReview(Integer id);
    void addReview(Integer id, String text, String date, Product product, Long client);
    List<ReviewDTO> getAllReviewsDTO();
}
