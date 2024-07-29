var spiralOrder = function(matrix) {
    let ans = [];
    let m = matrix.length;
    let n = matrix[0].length;
    if (m === 0) return ans;
    let total = m * n;

    let startingRow = 0;
    let endingCol = n - 1;
    let endingRow = m - 1;
    let startingCol = 0;
    let count = 0;
    while (count < total) {
        // starting row
        for (let i = startingCol; i <= endingCol && count < total; i++) {
            ans.push(matrix[startingRow][i]);
            count++;
        }
        startingRow++;
        // ending column
        for (let i = startingRow; i <= endingRow && count < total; i++) {
            ans.push(matrix[i][endingCol]);
            count++;
        }
        endingCol--;
        // ending row
        for (let i = endingCol; i >= startingCol && count < total; i--) {
            ans.push(matrix[endingRow][i]);
            count++;
        }
        endingRow--;
        // starting column
        for (let i = endingRow; i >= startingRow && count < total; i--) {
            ans.push(matrix[i][startingCol]);
            count++;
        }
        startingCol++;
    }
    return ans;
};

