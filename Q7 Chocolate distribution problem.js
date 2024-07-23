
class Solution{
    findMinDiff(arr,n,m){
        //code here
        arr.sort((a,b)=>a-b);
        let minDiff = Infinity;

        // Traverse the sorted list and find the minimum difference between the maximum and minimum of m elements
        for (let i = 0; i + m - 1 < n; i++) {
            let diff = arr[i + m - 1] - arr[i];
            if (diff < minDiff) {
                minDiff = diff;
            }
        }

        return minDiff;
    }
}
