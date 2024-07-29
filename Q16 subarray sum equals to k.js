var subarraySum = function(nums, k) {
    let n = nums.length;
    let count = 0;
    let sum = 0;
    let mp = new Map();
    mp.set(0, 1);
    
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        let remove = sum - k;
        if (mp.has(remove)) {
            count += mp.get(remove);
        }
        if (mp.has(sum)) {
            mp.set(sum, mp.get(sum) + 1);
        } else {
            mp.set(sum, 1);
        }
    }
    
    return count;
};
