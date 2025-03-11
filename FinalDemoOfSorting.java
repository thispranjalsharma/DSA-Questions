package TressSetAsG.Demo;

import java.util.Comparator;

class Employe implements Comparable <Employe>, Comparator <Employe>{
    private String eName;
    private int eId;
    private Double eSalary;

    @Override
    public String toString() {
        return "Employe{" +
                "eName='" + eName + '\'' +
                ", eId=" + eId +
                ", eSalary=" + eSalary +
                '}';
    }

    public String geteName() {
        return eName;
    }

    public int geteId() {
        return eId;
    }

    public Double geteSalary() {
        return eSalary;
    }

    public Employe(String eName, int eId, Double eSalary) {
        this.eName = eName;
        this.eId = eId;
        this.eSalary = eSalary;
    }
    @Override
    public int compare(Employe e ,Employe j ){
//        int m1 = (j.getEmployeeName() < e.getEmployeeName()) ? -1:1;
        return j.geteName().compareTo(e.geteName());
    }

    @Override
    public  int compareTo(Employe e){
        return (this.eId>e.eId) ? 1:-1;
    }
}

public class FinalDemoOfSorting {
    public static void main(String[] args) {

    }
}
