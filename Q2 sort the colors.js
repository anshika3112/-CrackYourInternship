/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var n = nums.length;
    var index = 0;
    var left = 0;
    var right = n - 1; 

    while (index <= right) {
        if (nums[index] === 0) {
            var temp = nums[index];
            nums[index] = nums[left];
            nums[left] = temp;
            left++;
            index++;
        } else if (nums[index] === 2) {
            var temp = nums[index];
            nums[index] = nums[right];
            nums[right] = temp;
            right--;
        } else {
            index++;
        }
    }
};
