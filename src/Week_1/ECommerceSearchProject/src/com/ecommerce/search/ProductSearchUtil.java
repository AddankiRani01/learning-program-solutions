package com.ecommerce.search;
import java.util.Arrays;
import java.util.Comparator;

public class ProductSearchUtil {
	 public static Product linearSearch(Product[] products, String name) {
	        
	        for (Product p : products) {
	            
	            if (p.productName.equalsIgnoreCase(name)) {
	                return p;  // Product found
	            }
	        }
	        return null;  // Product not found
	    }
	  public static Product binarySearch(Product[] products, String name) {

	        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

	        int left = 0;                  
	        int right = products.length - 1;  

	       
	        while (left <= right) {
	            int mid = left + (right - left) / 2;  
	            int cmp = name.compareToIgnoreCase(products[mid].productName);

	            if (cmp == 0) {
	                return products[mid];  // Product found
	            } else if (cmp < 0) {
	                right = mid - 1;       // Search in the left half
	            } else {
	                left = mid + 1;        // Search in the right half
	            }
	        }

	        return null;  // Product not found
	    }
	}

