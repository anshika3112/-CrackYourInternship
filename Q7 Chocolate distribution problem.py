class Solution:

    def findMinDiff(self, A, N, M):
        # Sort the array
        A.sort()

        # Initialize the minimum difference
        min_diff = float('inf')

        # Traverse the sorted list and find the minimum difference between the maximum and minimum of M elements
        for i in range(N - M + 1):
            diff = A[i + M - 1] - A[i]
            if diff < min_diff:
                min_diff = diff

   
