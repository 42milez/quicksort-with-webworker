NonRecursiveQuickSort = {
    sort: function (ary) {
        // size: size of stack
        // lStack: the stack for the left section index
        // rStack: the stack for the right section index
        // p: stack pointer
        var size = Math.floor(Math.LOG2E * Math.log(ary.length)) + 1;
        var lStack = new Array(size);
        var rStack = new Array(size);
        var p = 1;

        lStack[0] = 0;
        rStack[0] = ary.length - 1;

        // comparison function
        function isLessThan(a, b) {
            if (a === b) return false;
            else return a < b;
        }

        while (p > 0) {
            p--;
            var left = lStack[p];    // an index of the left end of a section
            var right = rStack[p];   // an index of the right end of a section

            // swap the values until a left end index and a right end index crosses
            while (left < right) {
                var idx = Math.floor((left + right) / 2);   // consider the value of the center index of a section as the pivot
                var pivot = ary[idx];
                var i = left;
                var j = right;

                // ------------------------------
                //  swap the values
                // ------------------------------
                while (1) {
                    while (isLessThan(ary[i], pivot)) i++;   // set the index forward if a value is less than the pivot
                    while (isLessThan(pivot, ary[j])) j--;   // set the index forward if a value is greater than the pivot
                    if (j <= i) {
                        break;
                    }
                    else {
                        var t = ary[i];
                        ary[i] = ary[j];
                        ary[j] = t;
                        i++;
                        j--;
                    }
                }

                // ------------------------------
                //  determine the next section which will be sorted
                // ------------------------------
                // process the longer section next
                if (i - left < right - j) {
                    // give priority to the left section
                    if (left < i) {
                        // stack the index of a right section
                        // this section will be processed after sorting the left section
                        lStack[p] = i;
                        rStack[p] = right;
                        p++;
                    }
                    right = i - 1;   // update a right section index
                }
                else {
                    // give priority to the right section
                    if (j < right) {
                        lStack[p] = left;
                        rStack[p] = j;
                        p++;
                    }
                    left = j + 1;
                }
            }
        }
    }
};
