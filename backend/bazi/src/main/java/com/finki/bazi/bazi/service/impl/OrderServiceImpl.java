package com.finki.bazi.bazi.service.impl;

import com.finki.bazi.bazi.dto.ClientDTO;
import com.finki.bazi.bazi.dto.OrderDTO;
import com.finki.bazi.bazi.dto.ProductDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Order;
import com.finki.bazi.bazi.model.Payment;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.exceptions.InvalidOrderIdException;
import com.finki.bazi.bazi.model.exceptions.InvalidProductIdException;
import com.finki.bazi.bazi.repository.OrdersRepository;
import com.finki.bazi.bazi.service.OrderService;
import org.springframework.stereotype.Service;
import sun.util.calendar.LocalGregorianCalendar;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrdersRepository repository;

    public OrderServiceImpl(OrdersRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @Override
    public List<OrderDTO> getAllOrdersDTO() {
        List<Order> orders = repository.findAll();
        List<OrderDTO> ordersDTO = new ArrayList<>();

        for (Order order:orders
        ) {
            OrderDTO orderDTO = new OrderDTO(order);
            for (ProductDTO product: orderDTO.getProducts()
                 ) {
                product.setReviews(null);
            }
            ordersDTO.add(orderDTO);
        }

        return ordersDTO;
    }
    @Override
    public OrderDTO getById(Long id) {
            return new OrderDTO(repository.findById(id).orElseThrow(InvalidOrderIdException::new));
    }

    @Override
    public void addOrder(Long id, String date, List<Product> products, Client client, Payment payment) {
        Order order = new Order(id, date, products, client, payment);
        repository.save(order);
    }
}
