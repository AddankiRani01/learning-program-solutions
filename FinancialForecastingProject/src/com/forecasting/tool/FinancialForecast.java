package com.forecasting.tool;
	import java.util.Scanner;

	public class FinancialForecast {

	    
	    public static double futureValue(double presentValue, double rate, int years) {
	        if (years == 0) {
	            return presentValue; 
	        } else {
	            return futureValue(presentValue, rate, years - 1) * (1 + rate); 
	        }
	    }

	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);

	        
	        System.out.print("Enter Present Value (₹): ");
	        double pv = scanner.nextDouble();

	        System.out.print("Enter Annual Growth Rate (in %, e.g., 10 for 10%): ");
	        double ratePercent = scanner.nextDouble();
	        double rate = ratePercent / 100;  
	        System.out.print("Enter Number of Years: ");
	        int years = scanner.nextInt();

	        // Calculating future value using recursion
	        double fv = futureValue(pv, rate, years);

	        // Displaying result
	        System.out.printf("Future Value after %d years = ₹%.2f\n", years, fv);
	        
	        scanner.close();
	    }
	}



