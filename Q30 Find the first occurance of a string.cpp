class Solution {
public:
    int strStr(string haystack, string needle) {
        int n = haystack.size();
        if (n == 0 && needle.empty()) {
            return 0;
        }

        int m = needle.size();
        for (int i = 0; i <= n - m; i++) {
            for (int j = 0; j < m; j++) {
                if (haystack[i + j] != needle[j])
                    break;
                if (j == m - 1)
                    return i;
            }
        }
        return -1;
    }
};
