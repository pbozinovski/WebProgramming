package com.finki.bazi.bazi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name="clients")
public class Client {

    @Id
    private Long clientId;
    private String clientFirstname;
    private String clientLastname;
    private String clientEmail;
    private String clientPassword;
    private String clientType;

    @JsonIgnore
    @OneToMany(mappedBy = "client")
    private List<Review> reviews;


    @OneToMany(mappedBy = "client")
    private List<Order> orders;

    public Client(Long clientId, String clientFirstname, String clientLastname, String clientEmail, String clientPassword, String clientType) {
        this.clientId = clientId;
        this.clientFirstname = clientFirstname;
        this.clientLastname = clientLastname;
        this.clientEmail = clientEmail;
        this.clientPassword = clientPassword;
        this.clientType = clientType;
    }


}
