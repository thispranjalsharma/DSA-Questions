package TressSetAsG.Demo;
import java.util.*;

class pranjalSort implements Comparator<Integer>{
    public int compare(Integer i , Integer j){
        return j-i; // coutimiz sorting
    }
}
public class ArrayListCombleDemo {
    public static void main(String[] args) {
    List<Integer > list = new ArrayList<Integer>();
    list.add(12);
    list.add(42);
    list.add(28);


        Collections.sort(list , new pranjalSort());
        System.out.println(list);
    }
}
