package TressSetAsG.Demo;

import java.util.*;

class Employee implements Comparable<Employee> {
    private String employeeName;
    private int employeeId;
    private String employeeDp;

    public Employee(String employeeName, int employeeId, String employeeDp) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeDp = employeeDp;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public String getEmployeeDp() {
        return employeeDp;
    }

    public int compareTo(Employee e){
//        int m1 = (this.employeeName>e.employeeName) ? -1:1;
        return getEmployeeName().compareTo(e.employeeName);
    }
    @Override
    public String toString() {
        return "Employee{" +
                "employeeName='" + employeeName + '\'' +
                ", employeeId=" + employeeId +
                ", employeeDp='" + employeeDp + '\'' +
                '}';
    }

//    @Override
//    public boolean equals(Object o) {
//        if (o == null || getClass() != o.getClass()) return false;
//        List.Employee employee = (List.Employee) o;
//        return employeeId == employee.employeeId;
//    }

//    public boolean equals(Employee e){
//        return this.employeeId==e.employeeId && this.employeeName.equals(e.employeeName)&&this.employeeDp.equals(e.employeeDp);
//    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeId);
    }
}

public class DemoE1 {
    public static void main(String[] args) {

        Employee employee1 = new Employee("ram", 101, "sale");
        Employee employee2 = new Employee("balram", 102, "it");
        Employee employee3 = new Employee("aam", 101, "sale");

        Set<Employee> employees = new TreeSet<Employee>();
        employees.add(employee1);
        employees.add(employee2);
        employees.add(employee3);

        System.out.println("employees = " + employees);
//        Collections.sort(employees); // yaha yee automatic sorting karta hai...
    }
}
