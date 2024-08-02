class Solution:
    def strStr(self, haystack, needle) :
        n = len(haystack)
        if n == 0 and not needle:
            return 0

        m = len(needle)
        for i in range(n - m + 1):
            for j in range(m):
                if haystack[i + j] != needle[j]:
                    break
                if j == m - 1:
                    return i
        return -1

