/**
 * 
 */
package com.hulkstore.controller;

/**
 * @author Luis Martinez
 *
 */

import com.hulkstore.DTO.Mensaje;
import com.hulkstore.entity.Producto;
import com.hulkstore.service.ProductoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    @Autowired
    ProductoService productoService;

    @GetMapping("/lista")
    public ResponseEntity<List<Producto>> getLista(){
        List<Producto> lista = productoService.obtenerTodos();
        return new ResponseEntity<List<Producto>>(lista, HttpStatus.OK);
    }

    @GetMapping("/detalle/{id}")
    public ResponseEntity<Producto> getOne(@PathVariable Long id){
        if(!productoService.existePorId(id))
            return new ResponseEntity(new Mensaje("no existe ese producto"), HttpStatus.NOT_FOUND);
        Producto producto = productoService.obtenerPorId(id).get();
        return new ResponseEntity<Producto>(producto, HttpStatus.OK);
    }

    @PostMapping("nuevo")
    public ResponseEntity<?> create(@RequestBody Producto producto){
        if(StringUtils.isBlank(producto.getNombreProducto()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if((Integer)producto.getPrecio() == null || producto.getPrecio()==0)
            return new ResponseEntity(new Mensaje("el precio es obligatorio"), HttpStatus.BAD_REQUEST);
        if(productoService.existePorNombre(producto.getNombreProducto()))
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        productoService.guardar(producto);
        return new ResponseEntity(new Mensaje("producto guardado"), HttpStatus.CREATED);
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<?> update(@RequestBody Producto producto, @PathVariable("id") Long id){
        if(!productoService.existePorId(id))
            return new ResponseEntity(new Mensaje("no existe ese producto"), HttpStatus.NOT_FOUND);
        if(StringUtils.isBlank(producto.getNombreProducto()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if((Integer)producto.getPrecio() == null || producto.getPrecio()==0)
            return new ResponseEntity(new Mensaje("el precio es obligatorio"), HttpStatus.BAD_REQUEST);
        if((Integer)producto.getCantidad() == null || producto.getCantidad()==0)
            return new ResponseEntity(new Mensaje("No hay stock para el producto"), HttpStatus.BAD_REQUEST);
        if(productoService.existePorNombre(producto.getNombreProducto()) &&
                productoService.obtenerPorNombre(producto.getNombreProducto()).get().getId() != id)
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        
        Producto prodUpdate = productoService.obtenerPorId(id).get();
        prodUpdate.setNombreProducto(producto.getNombreProducto());
        prodUpdate.setPrecio(producto.getPrecio());
        prodUpdate.setCantidad(producto.getCantidad());
        prodUpdate.setDescripcion(producto.getDescripcion());
        prodUpdate.setImg(producto.getImg());
        productoService.guardar(prodUpdate);
        return new ResponseEntity(new Mensaje("producto actualizado"), HttpStatus.CREATED);
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if(!productoService.existePorId(id))
            return new ResponseEntity(new Mensaje("no existe ese producto"), HttpStatus.NOT_FOUND);
        productoService.borrar(id);
        return new ResponseEntity(new Mensaje("producto eliminado"), HttpStatus.OK);
    }

}
