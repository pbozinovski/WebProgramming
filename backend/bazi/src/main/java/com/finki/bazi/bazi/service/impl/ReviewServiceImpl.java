package com.finki.bazi.bazi.service.impl;

import com.finki.bazi.bazi.dto.ReviewDTO;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import com.finki.bazi.bazi.model.exceptions.InvalidClientIdException;
import com.finki.bazi.bazi.model.exceptions.InvalidReviewIdException;
import com.finki.bazi.bazi.repository.ClientsRepository;
import com.finki.bazi.bazi.repository.ReviewsRepository;
import com.finki.bazi.bazi.service.ReviewService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ReviewServiceImpl implements ReviewService {

    private final ReviewsRepository repository;
    private final ClientsRepository clientsRepository;

    public ReviewServiceImpl(ReviewsRepository repository, ClientsRepository clientsRepository) {
        this.repository = repository;
        this.clientsRepository = clientsRepository;
    }

    @Override
    public List<Review> getAllReviews() {
        return repository.findAll();
    }

    @Override
    public Review getById(Integer id) {
        return repository.findById(id).orElseThrow(InvalidReviewIdException::new);
    }

    @Override
    public void deleteReview(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void addReview(Integer id, String text, String date, Product product, Long client) {
        Review review = new Review(id, text, date, product, clientsRepository.findById(client).orElseThrow(InvalidClientIdException::new));
        repository.save(review);
    }

    @Override
    public List<ReviewDTO> getAllReviewsDTO() {
        List<Review> reviews = repository.findAll();
        List<ReviewDTO> reviewsDTO = new ArrayList<>();
        for (Review review:reviews
        ) {
            reviewsDTO.add(new ReviewDTO(review));
        }

        return reviewsDTO;
    }
}
