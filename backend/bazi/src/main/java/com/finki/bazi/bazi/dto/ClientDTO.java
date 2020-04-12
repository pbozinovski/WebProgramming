package com.finki.bazi.bazi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Order;
import com.finki.bazi.bazi.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
public class ClientDTO {

    private Long clientId;
    private String clientFirstname;
    private String clientLastname;
    private String clientEmail;
    private String clientPassword;
    private String clientType;

    private List<OrderDTO> orders;

    public ClientDTO(Client client) {
        this.clientId = client.getClientId();
        this.clientFirstname = client.getClientFirstname();
        this.clientLastname = client.getClientLastname();
        this.clientEmail = client.getClientEmail();
        this.clientPassword = client.getClientPassword();
        this.clientType = client.getClientType();
        this.orders = new ArrayList<>();
        for (Order order: client.getOrders()
        ) {
            this.orders.add(new OrderDTO(order));
        }

    }


}
