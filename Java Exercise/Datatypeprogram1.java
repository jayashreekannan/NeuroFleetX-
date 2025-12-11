package Javaexercises;
import java.util.*;
class Datatypeprogram1{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        double d=sc.nextDouble();
        sc.nextLine();
        String name=sc.nextLine();
        char ch=sc.next().charAt(0);
        System.out.println(a+" "+d+" "+name+" "+ch);
        sc.close();
    }
}