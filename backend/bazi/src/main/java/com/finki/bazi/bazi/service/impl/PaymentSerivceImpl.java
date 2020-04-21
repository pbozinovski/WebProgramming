package com.finki.bazi.bazi.service.impl;

import com.finki.bazi.bazi.model.Payment;
import com.finki.bazi.bazi.repository.PaymentRepository;
import com.finki.bazi.bazi.service.PaymentService;
import org.springframework.stereotype.Service;

@Service
public class PaymentSerivceImpl implements PaymentService {

    private final PaymentRepository repository;

    public PaymentSerivceImpl(PaymentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Payment addPayment(Integer price) {
        Payment payment = new Payment(price);
        return repository.save(payment);
    }
}
