class Solution:
    def spiralOrder(self, matrix) :
        ans = []
        m = len(matrix)
        n = len(matrix[0])
        if m == 0:
            return ans
        total = m * n

        starting_row = 0
        ending_col = n - 1
        ending_row = m - 1
        starting_col = 0
        count = 0
        while count < total:
            # starting row
            for i in range(starting_col, ending_col + 1):
                if count < total:
                    ans.append(matrix[starting_row][i])
                    count += 1
            starting_row += 1
            # ending column
            for i in range(starting_row, ending_row + 1):
                if count < total:
                    ans.append(matrix[i][ending_col])
                    count += 1
            ending_col -= 1
            # ending row
            for i in range(ending_col, starting_col - 1, -1):
                if count < total:
                    ans.append(matrix[ending_row][i])
                    count += 1
            ending_row -= 1
            # starting column
            for i in range(ending_row, starting_row - 1, -1):
                if count < total:
                    ans.append(matrix[i][starting_col])
                    count += 1
            starting_col += 1
        return ans

