package com.finki.bazi.bazi.service;

import com.finki.bazi.bazi.dto.ClientDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Review;

import java.util.List;

public interface ClientService {

    List<Client> getAllClients();
    List<ClientDTO> getAllClientsDTO();
    ClientDTO getById(Long id);
    ClientDTO findByClientEmail(String email);
    void deleteClient(Long id);
    void addClient(Long id, String firstname, String lastname, String email, String password, String type);
}
