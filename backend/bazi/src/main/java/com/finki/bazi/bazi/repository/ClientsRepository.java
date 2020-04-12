package com.finki.bazi.bazi.repository;

import com.finki.bazi.bazi.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientsRepository extends JpaRepository<Client, Long> {

    Optional<Client> findByClientEmail(String email);
}
