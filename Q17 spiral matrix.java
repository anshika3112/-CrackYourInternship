
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> ans = new ArrayList<>();
        int m = matrix.length;
        int n = matrix[0].length;
        if (m == 0) return ans; 
        int total = m * n;

        int startingRow = 0;
        int endingCol = n - 1;
        int endingRow = m - 1;
        int startingCol = 0;
        int count = 0;
        while (count < total) {
            // starting row
            for (int i = startingCol; i <= endingCol && count < total; i++) {
                ans.add(matrix[startingRow][i]);
                count++;
            }
            startingRow++;
            // ending column
            for (int i = startingRow; i <= endingRow && count < total; i++) {
                ans.add(matrix[i][endingCol]);
                count++;
            }
            endingCol--;
            // ending row
            for (int i = endingCol; i >= startingCol && count < total; i--) {
                ans.add(matrix[endingRow][i]);
                count++;
            }
            endingRow--;
            // starting column
            for (int i = endingRow; i >= startingRow && count < total; i--) {
                ans.add(matrix[i][startingCol]);
                count++;
            }
            startingCol++;
        }
        return ans;
    }
}

