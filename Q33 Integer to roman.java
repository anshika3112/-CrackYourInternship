import java.util.*;

class Solution {
    public String intToRoman(int num) {
        List<int[]> m = Arrays.asList(
            new int[]{1000, "M".charAt(0)}, new int[]{900, "CM".charAt(0)}, new int[]{500, "D".charAt(0)}, new int[]{400, "CD".charAt(0)},
            new int[]{100, "C".charAt(0)}, new int[]{90, "XC".charAt(0)}, new int[]{50, "L".charAt(0)}, new int[]{40, "XL".charAt(0)},
            new int[]{10, "X".charAt(0)}, new int[]{9, "IX".charAt(0)}, new int[]{5, "V".charAt(0)}, new int[]{4, "IV".charAt(0)}, new int[]{1, "I".charAt(0)}
        );
        
        StringBuilder roman = new StringBuilder();
        int i = 0;
        while (num > 0) {
            while (num >= m.get(i)[0]) {
                roman.append(m.get(i)[1]);
                num -= m.get(i)[0];
            }
            i++;
        }
        return roman.toString();
    }
}
