package com.finki.bazi.bazi.web;

import com.finki.bazi.bazi.service.PaymentService;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/payments", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class PaymentApi {

    private final PaymentService service;

    public PaymentApi(PaymentService service) {
        this.service = service;
    }

    @PostMapping
    public void addPayment(@RequestParam("id") Long id, @RequestParam("price") Integer price) {
        service.addPayment(id, price);
    }
}

