package com.finki.bazi.bazi.repository;

import com.finki.bazi.bazi.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Review, Integer> {
}
