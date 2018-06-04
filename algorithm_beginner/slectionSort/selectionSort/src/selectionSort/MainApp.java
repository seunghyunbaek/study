package selectionSort;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub\
		int[] arr = {9, 8, 4, 7, 2, 1, 6, 3, 5, 0};
		for(int i =0; i<arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
		
		System.out.println();
		
		SelectSort minSort = new SelectSort(arr);
		minSort.minSort();
		for(int i =0; i<arr.length; i++) {
			System.out.print(arr[i]+ " ");
		}
	}

}
