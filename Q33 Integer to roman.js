var intToRoman = function(num) {
        const m = [
            [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
            [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
            [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
        ];

        let roman = '';
        let i = 0;

        while (num > 0) {
            while (num >= m[i][0]) {
                roman += m[i][1];
                num -= m[i][0];
            }
            i++;
        }

        return roman;
};

