class Solution {
    public static ArrayList<ArrayList<Integer>> uniquePerms(ArrayList<Integer> arr, int n) {
        Collections.sort(arr);
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        do {
            result.add(new ArrayList<>(arr));
        } while (nextPermutation(arr));
        return result;
    }

    private static boolean nextPermutation(ArrayList<Integer> arr) {
        int n = arr.size();
        int i = n - 2;
        while (i >= 0 && arr.get(i) >= arr.get(i + 1)) {
            i--;
        }
        if (i == -1) {
            Collections.reverse(arr);
            return false;
        }
        int j = n - 1;
        while (arr.get(j) <= arr.get(i)) {
            j--;
        }
        Collections.swap(arr, i, j);
        Collections.reverse(arr.subList(i + 1, n));
        return true;
    }
};
