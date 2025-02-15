package com.hulkstore.hulkstoreApi.controllers;

import com.hulkstore.hulkstoreApi.dtos.Message;
import com.hulkstore.hulkstoreApi.entities.Product;
import com.hulkstore.hulkstoreApi.services.ProductService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

/**
 * @author Luis Martinez
 *
 */

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    ProductService productService;
    @GetMapping("/list")
    public ResponseEntity<List<Product>> getList(){
        List<Product> list = productService.getAll();
        return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity getOne(@PathVariable Long id){
        if(!productService.existsById(id))
            return new ResponseEntity(new Message("not exist that product"), HttpStatus.NOT_FOUND);
        Product product = productService.getById(id).get();
        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @PostMapping("new")
    public ResponseEntity<?> create(@RequestBody Product product){
        if(StringUtils.isBlank(product.getName()))
            return new ResponseEntity<>(new Message("name is required"), HttpStatus.BAD_REQUEST);
        if(product.getPrice() == 0)
            return new ResponseEntity<>(new Message("price is required"), HttpStatus.BAD_REQUEST);
//        if(productService.existsByName(product.getName()))
//            return new ResponseEntity<>(new Message("that name already exists"), HttpStatus.BAD_REQUEST);
        productService.save(product);
        return new ResponseEntity<>(new Message("product saved"), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Product product, @PathVariable("id") Long id){
        if(!productService.existsById(id))
            return new ResponseEntity<>(new Message("not exist that product"), HttpStatus.NOT_FOUND);
        if(StringUtils.isBlank(product.getName()))
            return new ResponseEntity<>(new Message("name is required"), HttpStatus.BAD_REQUEST);
        if(product.getPrice() == 0)
            return new ResponseEntity<>(new Message("price is required"), HttpStatus.BAD_REQUEST);
        if(product.getAmount() == 0)
            return new ResponseEntity<>(new Message("There is no stock for the product"), HttpStatus.BAD_REQUEST);
//        if(productService.existsByName(product.getName()) &&
//                !Objects.equals(productService.getByName(product.getName()).get().getId(), id))
//            return new ResponseEntity<>(new Message("that name already exists"), HttpStatus.BAD_REQUEST);

        Product prodUpdate = productService.getById(id).get();
        prodUpdate.setName(product.getName());
        prodUpdate.setPrice(product.getPrice());
        prodUpdate.setAmount(product.getAmount());
        prodUpdate.setDescription(product.getDescription());
        prodUpdate.setImg(product.getImg());
        productService.save(prodUpdate);
        return new ResponseEntity<>(new Message("product Updated"), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if(!productService.existsById(id))
            return new ResponseEntity<>(new Message("not exist that product"), HttpStatus.NOT_FOUND);
        productService.delete(id);
        return new ResponseEntity<>(new Message("product deleted"), HttpStatus.OK);
    }

}
