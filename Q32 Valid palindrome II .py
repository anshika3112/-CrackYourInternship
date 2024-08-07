class Solution:
    def palin(self, s, i, j):
        while j >= i:
            if s[i] != s[j]:
                return False
            else:
                i += 1
                j -= 1
        return True

    def validPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1
        while j >= i:
            if s[i] != s[j]:
                return self.palin(s, i + 1, j) or self.palin(s, i, j - 1)
            else:
                i += 1
                j -= 1
        return True

