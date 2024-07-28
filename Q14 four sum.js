var fourSum = function(nums, target) {
    const ans = [];
    nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            let c = b + 1;
            let d = n - 1;
            while (c < d) {
                const sum = BigInt(nums[a]) + BigInt(nums[b]) + BigInt(nums[c]) + BigInt(nums[d]);
                if (sum < BigInt(target)) {
                    c++;
                } else if (sum > BigInt(target)) {
                    d--;
                } else {
                    const quad = [nums[a], nums[b], nums[c], nums[d]];
                    if (!ans.some(x => JSON.stringify(x) === JSON.stringify(quad))) {
                        ans.push(quad);
                    }
                    c++;
                    d--;
                }
            }
        }
    }
    return ans;
};
