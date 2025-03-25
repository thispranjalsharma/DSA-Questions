package DSA.Array;

import java.util.HashSet;

public class ContainDuplicateOrNot {
    static boolean  cDuplicate(int []nums ){
        int n = nums.length;
        HashSet<Integer> set = new HashSet<>();
        for(Integer num:nums){
            set.add(num);
        }

        return n != set.size();
    }
    public static void main(String[] args){
        int []nums = {1,21,4,23,2};
        System.out.println(cDuplicate(nums));

    }
}
