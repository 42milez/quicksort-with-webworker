describe("NonRecursiveQuickSort", function () {
    it("should sort an array in ascending order", function () {
        var n = 10;
        var ary = new Array(n);
        var result = new Array(ary.length);
        var firstPivotIdx = 0;
        var numWorker = 2;
        var w1 = new Worker(window.location.origin + "/quicksort/src/worker/non-recursive/worker.js");
        var w2 = new Worker(window.location.origin + "/quicksort/src/worker/non-recursive/worker.js");

        // message handler
        w1.onmessage = w2.onmessage = function (event) {
            console.log("------------------------------");
            numWorker--;
            var ary = event.data;

            // merge the array
            if (ary.length > 0) {
                if (result[firstPivotIdx] <= ary[0]) {
                    console.time("merge arrays");
                    for (var i = firstPivotIdx + 1, j = 0, len = ary.length; j < len; i++, j++) {
                        result[i] = ary[j];
                    }
                    console.timeEnd("merge arrays");
                }
                else {
                    console.time("merge arrays");
                    for (var i = 0, len = ary.length; i < len; i++) {
                        result[i] = ary[i];
                    }
                    console.timeEnd("merge arrays");
                }
            }

            // すべての Worker からデータを受け取り次第、併合処理を終了
            if (numWorker <= 0) {
                console.log("------------------------------");
                console.timeEnd("Time");
                console.log("sorted array: " + result);
                console.log("len: " + result.length);
            }
        };

        // generate the values
        for (var i = 0; i < n; i++) {
            ary[i] = Math.floor(Math.random() * 100);
        }

        console.log("n: " + n);
        console.log("original array: " + ary);
        console.log("len: " + ary.length);

        // divide an array
        function partition(ary, lIdx, rIdx) {
            var pivot_item = ary[lIdx];
            var tmp_lIdx = lIdx;
            var tmp_rIdx = rIdx;
            while (tmp_lIdx < tmp_rIdx) {
                while (ary[tmp_lIdx] <= pivot_item) {
                    tmp_lIdx++;
                }
                while (ary[tmp_rIdx] > pivot_item) {
                    tmp_rIdx--;
                }
                if (tmp_lIdx < tmp_rIdx) {
                    var t = ary[tmp_lIdx];
                    ary[tmp_lIdx] = ary[tmp_rIdx];
                    ary[tmp_rIdx] = t;
                }
            }
            ary[lIdx] = ary[tmp_rIdx];
            ary[tmp_rIdx] = pivot_item;
            return tmp_rIdx;
        }

        // ------------------------------
        //  start sorting
        // ------------------------------
        {
            console.log("------------------------------");
            console.time("Time");
        }
        firstPivotIdx = partition(ary, 0, ary.length - 1);
        result[firstPivotIdx] = ary[firstPivotIdx];
        {
            console.time("create a sliced array");
        }
        var data1 = ary.slice(0, firstPivotIdx);
        {
            console.timeEnd("create a sliced array");
            console.time("create a sliced array");
        }
        var data2 = ary.slice(firstPivotIdx + 1, ary.length);
        {
            console.timeEnd("create a sliced array");
        }
        w1.postMessage(data1);
        w2.postMessage(data2);

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
