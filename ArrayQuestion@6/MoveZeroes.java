
import java.util.Arrays;

public class MoveZeroes {

    public static int[] Zeroe(int nums[]) {
        int c = 0;
        for (int i = 0; i < nums.length; i++) {
            if (0 != nums[i]) {
                nums[c++] = nums[i];

            }
        }
        for (int i = c; i < nums.length; i++) {
            nums[i] = 0;
        }
        return nums;
        // List<Integer> l = Arrays.asList(nums);

    }

    public static void main(String args[]) {
        int[] nums = {1, 2, 0, 2, 0, 4, 50};

        // Zeroe(nums);
        int[] result = Zeroe(nums);

        // for (Integer num : nums) {
        //     System.out.println(num);
        // }
        System.out.println(Arrays.toString(result));
        System.out.println(Arrays.toString(nums));

    }
}
