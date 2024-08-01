
    uniquePerms(arr, n) {
        arr.sort((a, b) => a - b);
        let result = [];
        do {
            result.push([...arr]);
        } while (this.nextPermutation(arr));
        return result;
    }

    nextPermutation(arr) {
        let i = arr.length - 2;
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }
        if (i === -1) {
            arr.reverse();
            return false;
        }
        let j = arr.length - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        return true;
    }

