function threeSum(nums) {
    const target = 0;
    nums.sort((a, b) => a - b);
    const uniqueTriplets = new Set();
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                uniqueTriplets.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }

    uniqueTriplets.forEach(triplet => {
        output.push(JSON.parse(triplet));
    });

    return output;
}


