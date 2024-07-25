class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        int n=nums.size();
        int sum=0;
        int count=0;
        map<int, int> m;
        m[0] = 1;
        for(int i=0;i<n;i++){
            sum+=nums[i];
            int mod=sum%k;
            if(mod<0)
             mod+=k;
            if(m.find(mod)!=m.end()) {
                count+=m[mod];
            }            
           m[mod]++; 
        }
        return count;
    }
};
