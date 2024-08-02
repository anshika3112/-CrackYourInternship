var minSwaps = function(nums) {
    let k = nums.reduce((acc, num) => acc + num, 0);
    let n = nums.length;
    let cnt = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
    let mx = cnt;
    for (let i = k; i < n + k; ++i) {
        cnt += nums[i % n] - nums[(i - k + n) % n];
        mx = Math.max(mx, cnt);
    }
    return k - mx;
};

// Example usage
console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]));  // Output: 1
