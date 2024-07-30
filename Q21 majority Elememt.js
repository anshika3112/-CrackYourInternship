/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let n = nums.length;
        let key = nums[0];
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (count === 0) {
                key = nums[i];
            }
            if (nums[i] === key) {
                count++;
            } else {
                count--;
            }
        }
        return key;
    }
