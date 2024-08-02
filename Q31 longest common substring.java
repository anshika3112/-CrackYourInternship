

class Solution {
    public String longestCommonPrefix(String[] arr) {
        if (arr == null || arr.length == 0) {
            return "";
        }

        Arrays.sort(arr);
        String a = arr[0];
        String b = arr[arr.length - 1];
        int i = 0;
        StringBuilder ans = new StringBuilder();

        while (i < a.length()) {
            if (a.charAt(i) == b.charAt(i)) {
                ans.append(a.charAt(i));
                i++;
            } else {
                break;
            }
        }

        return ans.toString();
    }

  
}
