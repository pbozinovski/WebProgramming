package com.finki.bazi.bazi.web;

import com.finki.bazi.bazi.dto.ReviewDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import com.finki.bazi.bazi.service.ClientService;
import com.finki.bazi.bazi.service.ReviewService;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/reviews", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ReviewApi {

        private final ReviewService service;

        public ReviewApi(ReviewService service) {
            this.service = service;
        }

        @GetMapping("/all")
        public List<Review> getAll(){
            return service.getAllReviews();
        }

        @GetMapping("/allDTO")
        public List<ReviewDTO> getAllDTO(){
        return service.getAllReviewsDTO();
    }

        @GetMapping("/{id}")
        public Review getReview(@PathVariable Integer id) {
            return this.service.getById(id);
        }

//        @GetMapping("/email/{email}")
//        public Client getClientByEmail(@PathVariable String email){
//            return this.service.findByClientEmail(email);
//        }
        @PostMapping
        public void addReview(@RequestParam("id") Integer id, @RequestParam("text") String text, @RequestParam("date") String date, @RequestParam("product") Product product, @RequestParam("client") Long client){
            service.addReview(id, text, date, product, client);
        }
//    @PostMapping
//    public void addClient(@RequestParam("id") Long id, @RequestParam("firstname") String firstname, @RequestParam("lastname") String lastname, @RequestParam("email") String email, @RequestParam("password") String password, @RequestParam("type") String type, @RequestParam("reviews") List<Review> reviews){
//        service.addClient(id, firstname, lastname, email, password, type, reviews);
//    }

        @DeleteMapping("/{id}")
        public void removeClient(@PathVariable Integer id) {
            this.service.deleteReview(id);
        }
    }

