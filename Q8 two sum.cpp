class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> ans;
        int i;
        for ( i = 0; i < nums.size() - 1; ++i) {
            int complement = target - nums[i];
            auto it = find(nums.begin() + i + 1, nums.end(), complement);
            
            if (it != nums.end()) {
                ans.push_back(i);
                ans.push_back(it - nums.begin());
                return ans;
            }
        }
        
        return ans; // Return empty vector if no pair found
    }
};

