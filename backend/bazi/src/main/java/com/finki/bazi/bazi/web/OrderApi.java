package com.finki.bazi.bazi.web;

import com.finki.bazi.bazi.dto.ClientDTO;
import com.finki.bazi.bazi.dto.OrderDTO;
import com.finki.bazi.bazi.dto.ProductDTO;
import com.finki.bazi.bazi.model.Order;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.service.OrderService;

import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/orders", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class OrderApi {

    private final OrderService orderService;

    public OrderApi(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/all")
    public List<Order> getAll(){
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public OrderDTO getOrderById(@PathVariable Long id) {
        return this.orderService.getById(id);
    }


    @GetMapping("/allDTO")
    public List<OrderDTO> getAllDTO(){
        return orderService.getAllOrdersDTO();
    }
//@RequestParam("id") Long id, @RequestParam("date") Date date,
    @PostMapping
    public void addOrder(@RequestBody Order order) {
        orderService.addOrder(order.getOrderDate(), order.getProducts(), order.getClient(), order.getPayment());
    }
}
