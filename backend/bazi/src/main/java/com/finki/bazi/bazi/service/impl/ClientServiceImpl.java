package com.finki.bazi.bazi.service.impl;

import com.finki.bazi.bazi.dto.ClientDTO;
import com.finki.bazi.bazi.dto.ProductDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import com.finki.bazi.bazi.model.exceptions.InvalidClientIdException;
import com.finki.bazi.bazi.repository.ClientsRepository;
import com.finki.bazi.bazi.service.ClientService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientsRepository repository;

    public ClientServiceImpl(ClientsRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Client> getAllClients() {
        return repository.findAll();
    }

    @Override
    public List<ClientDTO> getAllClientsDTO() {
        List<Client> clients = repository.findAll();
        List<ClientDTO> clientsDTO = new ArrayList<>();
        for (Client client:clients
        ) {
            clientsDTO.add(new ClientDTO(client));
        }

        return clientsDTO;
    }

    @Override
    public ClientDTO getById(Long id) {
        return new ClientDTO(repository.findById(id).orElseThrow(InvalidClientIdException::new));
    }

    @Override
    public ClientDTO findByClientEmail(String email){
        return new ClientDTO(repository.findByClientEmail(email).orElseThrow(InvalidClientIdException::new));
    }


    @Override
    public void deleteClient(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void addClient(Long id, String firstname, String lastname, String email, String password, String type) {
        Client client = new Client(id, firstname, lastname, email, password, type);
        repository.save(client);
    }
}
