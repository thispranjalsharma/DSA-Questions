package DSA.Sorting;

public class Selection {
    public static void main(String[] args) {
        int[] arr = {9, 4, 12, 2, 40, 32};
        int n = arr.length;

//        selection_Sort(arr, n);
//        Bubble_Sort(arr, n);
        selection_Sort(arr,n);
        for(int num:arr){
            System.out.print(num+" ");
        }
    }

    static void insertion_Sort(int [] arr, int n ){
        for (int i = 0; i < n; i++) {
            int j = i;
            while (j-->0 &(arr[j]<arr[j-1])){
                int temp = arr[j-1];
                arr[j-1]= arr[j];
                arr[j] = temp;
            }
        }
    }

    static void Bubble_Sort(int [] arr, int n ){
        for(int i= n-1;i>=0;i--){
            int didSwap = 0;
            for (int j = 0 ; j <i ; j++) {
                if(arr[j] >arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j]= temp;
                    didSwap = 1;

                }
            }
            if (didSwap==0) break; // this is when we don't swap anything the first iteration
        }
    }


    static void selection_Sort(int[] arr, int n) {
        for (int i = 0; i < n - 1; i++) {
            int mini = i;
            for (int j = i; j <n ; j++) {
                if (arr[j] < arr[mini]) {
                    mini = j;
                }
            }
            int temp = arr[mini];
            arr[mini] = arr[i];
            arr[i] = temp;
        }
    }

}
