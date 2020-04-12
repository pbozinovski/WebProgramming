package com.finki.bazi.bazi.service;

import com.finki.bazi.bazi.dto.OrderDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Order;
import com.finki.bazi.bazi.model.Payment;
import com.finki.bazi.bazi.model.Product;

import java.util.Date;
import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();
    List<OrderDTO> getAllOrdersDTO();
    OrderDTO getById(Long id);
    void addOrder(Long id, String date, List<Product> products, Client client, Payment payment);
}
