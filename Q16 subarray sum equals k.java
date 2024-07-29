import java.util.HashMap;

class Solution {
    public int subarraySum(int[] nums, int k) {
        int n = nums.length;
        int count = 0;
        int sum = 0;
        HashMap<Integer, Integer> mp = new HashMap<>();
        mp.put(0, 1);
        
        for (int i = 0; i < n; i++) {
            sum += nums[i];
            int remove = sum - k;
            if (mp.containsKey(remove)) {
                count += mp.get(remove);
            }
            mp.put(sum, mp.getOrDefault(sum, 0) + 1);
        }
        
        return count;
    }
}
