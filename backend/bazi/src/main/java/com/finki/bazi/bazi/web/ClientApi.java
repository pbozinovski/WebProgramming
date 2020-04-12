package com.finki.bazi.bazi.web;


import com.finki.bazi.bazi.dto.ClientDTO;
import com.finki.bazi.bazi.model.Client;
import com.finki.bazi.bazi.model.Review;
import com.finki.bazi.bazi.service.ClientService;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/clients", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ClientApi {
    private final ClientService service;

    public ClientApi(ClientService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public List<Client> getAll(){
        return service.getAllClients();
    }

    @GetMapping("/allDTO")
    public List<ClientDTO> getAllDTO(){
        return service.getAllClientsDTO();
    }

    @GetMapping("/{id}")
    public ClientDTO getClient(@PathVariable Long id) {
        return this.service.getById(id);
    }

    @GetMapping("/email/{email}")
    public ClientDTO getClientByEmail(@PathVariable String email){
        return this.service.findByClientEmail(email);
    }

   @PostMapping
    public void addClient(@RequestParam("id") Long id, @RequestParam("firstname") String firstname, @RequestParam("lastname") String lastname, @RequestParam("email") String email, @RequestParam("password") String password, @RequestParam("type") String type){
        service.addClient(id, firstname, lastname, email, password, type);
    }

    @DeleteMapping("/{id}")
    public void removeClient(@PathVariable Long id) {
        this.service.deleteClient(id);
    }
}
