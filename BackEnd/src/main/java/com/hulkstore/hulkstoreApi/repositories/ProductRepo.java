package com.hulkstore.hulkstoreApi.repositories;

import com.hulkstore.hulkstoreApi.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Luis Martinez
 *
 */

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
    //Optional<Product> findByNameProduct(String np);
    //boolean existsByNameProduct(String np);
}
