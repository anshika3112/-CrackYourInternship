/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums.sort((a, b) => a - b); 
    var a = [];
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            a.push(nums[i]);
        }
    }
    return a;
};
