describe("RecursiveQuickSort", function () {
    it("should sort an array in ascending order", function () {
        var n = 10;
        var ary = new Array(n);

        // generate the values
        for (var i = 0; i < n; i++) {
            ary[i] = Math.floor(Math.random() * 100);
        }

        // ------------------------------
        //  start sorting
        // ------------------------------
        console.log("n: " + n);
        console.log("original array: " + ary);
        console.log("len: " + ary.length);
        console.time("Time");

        RecursiveQuickSort.sort(ary, 0, ary.length - 1);

        console.log("------------------------------");
        console.timeEnd("Time");
        console.log("sorted array: " + ary);
        console.log("len: " + ary.length);

        // ------------------------------
        //  check the result
        // ------------------------------
        var isAscendingOrder = true;
        for (var i = 0, len = ary.length; i + 1 < len; i++) {
            if (ary[i] > ary[i + 1]) {
                isAscendingOrder = false;
                break;
            }
        }
        expect(isAscendingOrder).toEqual(true);
    });
});
