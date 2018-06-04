package selectionSort;

public class SelectSort {
	private int[] int_arr;
	private int min;
	
	public SelectSort() {
		int_arr = new int[0];
	}
	public SelectSort(int[] int_arr) {
		this.int_arr = int_arr;
	}
	
	public int[] minSort() {
		int k=0;
		for(int i = 0; i<int_arr.length; i++) {
			min = i;
			for(int j=i; j<int_arr.length; j++) {
				if(int_arr[j] < int_arr[min]) min = j;
			}
			k = int_arr[i];
			int_arr[i] = int_arr[min]; // ÃÖ¼Ò °ª
			int_arr[min] = k;
		}
		
		return int_arr;
	}
}