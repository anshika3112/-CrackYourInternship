class Solution {
    public int strStr(String haystack, String needle) {
        int n = haystack.length();
        if (n == 0 && needle.isEmpty()) {
            return 0;
        }

        int m = needle.length();
        for (int i = 0; i <= n - m; i++) {
            for (int j = 0; j < m; j++) {
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    break;
                }
                if (j == m - 1) {
                    return i;
                }
            }
        }
        return -1;
    }
}
