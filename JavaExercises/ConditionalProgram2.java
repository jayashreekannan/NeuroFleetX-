package Javaexercises;

import java.util.Scanner;

public class ConditionalProgram2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt(); 
        int c = sc.nextInt();
        sc.close();
        if (a > b && a > c)
            System.out.println(a + " is largest");
        else if (b > c)
            System.out.println(b + " is largest");
        else
            System.out.println(c + " is largest");
    }
}
