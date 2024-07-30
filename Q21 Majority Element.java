class Solution {
    public int majorityElement(int[] nums) {
        int n = nums.length;
        int key = nums[0], count = 0;
        for (int i = 0; i < n; i++) {
            if (count == 0) {
                key = nums[i];
            }
            if (nums[i] == key) {
                count++;
            } else {
                count--;
            }
        }
        return key;
    }
}
