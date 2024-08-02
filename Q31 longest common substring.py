class Solution:
    def longestCommonPrefix(self, arr):
        if not arr:
            return ""

        arr.sort()
        a = arr[0]
        b = arr[-1]
        i = 0
        ans = []

        while i < len(a):
            if a[i] == b[i]:
                ans.append(a[i])
                i += 1
            else:
                break

        return ''.join(ans)
