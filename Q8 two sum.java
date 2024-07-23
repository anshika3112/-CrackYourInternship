class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] ans = new int[2];
        for (int i = 0; i < nums.length - 1; ++i) {
            int complement = target - nums[i];
            for (int j = i + 1; j < nums.length; ++j) {
                if (nums[j] == complement) {
                    ans[0] = i;
                    ans[1] = j;
                    return ans;
                }
            }
        }
        return new int[0]; // Return empty array if no pair found
    }
}
