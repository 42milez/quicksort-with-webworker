describe("NonRecursiveQuickSort", function () {
    it("should sort an array in ascending order", function () {
        var n = 10;
        var ary = new Array(n);
        var result = new Array(ary.length);
        var w = new Worker(window.location.origin + "/quicksort/src/worker/non-recursive/worker.js");

        // message handler
        w.onmessage = function (event) {
            console.log("------------------------------");
            console.timeEnd("Time");
            var ary = event.data;
            for (var i = 0, len = ary.length; i < len; i++) {
                result[i] = ary[i];
            }
            console.log("sorted array: " + result);
            console.log("len: " + result.length);
        };

        // generate the values
        for (var i = 0; i < n; i++) {
            ary[i] = Math.floor(Math.random() * 100);
        }

        console.log("n: " + n);
        console.log("original array: " + ary);
        console.log("len: " + ary.length);

        // ------------------------------
        //  start sorting
        // ------------------------------
        console.time("Time");
        w.postMessage(ary);

        // ------------------------------
        //  check the result
        // ------------------------------
        var isAscendingOrder = true;
        if (result.length > 0) {
            for (var i = 0, len = result.length; i + 1 < len; i++) {
                if (result[i] > result[i + 1]) {
                    isAscendingOrder = false;
                    break;
                }
            }
        }
        else {
            isAscendingOrder = false;
        }
        expect(isAscendingOrder).toEqual(true);
    });
});
