from itertools import permutations

class Solution:
    def uniquePerms(self, arr, n):
        arr.sort()
        result = list(set(permutations(arr)))
        result.sort()
        return [list(perm) for perm in result]
