package com.hulkstore.hulkstoreApi.services;

import com.hulkstore.hulkstoreApi.entities.Product;
import com.hulkstore.hulkstoreApi.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * @author Luis Martinez
 *
 */

@Service
@Transactional
public class ProductService {
    @Autowired
    ProductRepo productRepository;
    public List<Product> getAll(){
        return productRepository.findAll();
    }

    public Optional<Product> getById(Long id){
        return productRepository.findById(id);
    }

//    public Optional<Product> getByName(String np){
//        return productRepository.findByNameProduct(np);
//    }

    public void save(Product product){
        productRepository.save(product);
    }

    public void delete(Long id){
        productRepository.deleteById(id);
    }

//    public boolean existsByName(String np){
//        return productRepository.existsByNameProduct(np);
//    }

    public boolean existsById(Long id){
        return productRepository.existsById(id);
    }
}
