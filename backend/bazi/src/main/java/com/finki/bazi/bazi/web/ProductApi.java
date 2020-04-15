package com.finki.bazi.bazi.web;

import com.finki.bazi.bazi.dto.ProductDTO;
import com.finki.bazi.bazi.model.Product;
import com.finki.bazi.bazi.model.Review;
import com.finki.bazi.bazi.service.ProductService;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/products", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ProductApi {

    private final ProductService service;

    public ProductApi(ProductService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public List<Product> getAll(){
        return service.getAllProducts();
    }

    @GetMapping("/allDTO")
    public List<ProductDTO> getAllDTO(){return service.getAllProductsDTO();}

    @GetMapping("/{id}")
    public ProductDTO getProduct(@PathVariable int id) {
        return this.service.getByIdDTO(id);
    }



    @PostMapping
    public void addProduct(@RequestParam("id") Integer id, @RequestParam("name") String name, @RequestParam("quantity") Integer quantity, @RequestParam("price") Double price, @RequestParam("brand") String brand, @RequestParam("description") String description,@RequestParam("type") String type,@RequestParam("image") String image/*, @RequestParam("reviews") List<Review> reviews*/){
        service.addProduct(id, name, quantity, price, brand, description, type, image/*, reviews*/);
    }

    @PatchMapping("/{id}")
    public void updateProduct(@PathVariable Integer id, @RequestParam("name") String name, @RequestParam("quantity") Integer quantity, @RequestParam("price") Double price, @RequestParam("brand") String brand, @RequestParam("description") String description,@RequestParam("type") String type,@RequestParam("image") String image){
        service.updateProduct(id, name, quantity, price, brand, type, image);
    }
    @DeleteMapping("/{id}")
    public void removeProduct(@PathVariable int id) {
        this.service.deleteProduct(id);
    }
}
