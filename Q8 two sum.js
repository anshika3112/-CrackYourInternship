var twoSum = function(nums, target) {
    let ans = [];
    for( i=0;i<nums.length;i++){
        var complement=target-nums[i];
        for(var j=i+1;j<nums.length;j++){
            if(nums[j]==complement){
                ans[0]=i;
                ans[1]=j;
                return ans;
            }
        }
       
    }
     return [];
};
