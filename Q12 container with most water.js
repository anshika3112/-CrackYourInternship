/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        // Calculate the area
        let area = Math.min(height[left], height[right]) * (right - left);
        // Update the maximum area found so far
        maxArea = Math.max(maxArea, area);
        
        // Move the pointers
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};
