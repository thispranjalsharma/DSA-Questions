package DSA.Array;
public class BinarySearch {

    public static int serach(int arr[], int target) {
        int left = 0;
        int right = arr.length / 2;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (target > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }

        }
        return -1;

    }

    public static void main(String args[]) {
        int[] arr = {1, 3, 5, 8, 12, 34, 35};

        System.out.println(serach(arr, 5));

        // System.out.println("hello");
    }

}
