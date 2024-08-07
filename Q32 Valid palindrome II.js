
    var function palin(s, i, j) {
        while (j >= i) {
            if (s[i] !== s[j]) {
                return false;
            } else {
                i++;
                j--;
            }
        }
        return true;
    }

    var function validPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while (j >= i) {
            if (s[i] !== s[j]) {
                return this.palin(s, i + 1, j) || this.palin(s, i, j - 1);
            } else {
                i++;
                j--;
            }
        }
        return true;
    }

