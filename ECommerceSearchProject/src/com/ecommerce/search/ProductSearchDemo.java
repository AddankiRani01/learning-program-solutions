package com.ecommerce.search;

public class ProductSearchDemo {

    public static void main(String[] args) {
        // Sample array of products
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Watch", "Accessories"),
            new Product(104, "Mobile", "Electronics"),
            new Product(105, "T-shirt", "Clothing")
        };

        String searchName = "Watch";

        // Linear Search Test
        Product result1 = ProductSearchUtil.linearSearch(products, searchName);
        if (result1 != null) {
            System.out.println("Linear Search Found: " + result1);
        } else {
            System.out.println("Linear Search: Product not found");
        }

        // Binary Search Test
        Product result2 = ProductSearchUtil.binarySearch(products, searchName);
        if (result2 != null) {
            System.out.println("Binary Search Found: " + result2);
        } else {
            System.out.println("Binary Search: Product not found");
        }
    }
}
