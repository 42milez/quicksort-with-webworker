describe("NonRecursiveQuickSort", function () {
    it("should sort an array in ascending order", function () {
        var conf = {n: 10, randMax: 100, verbose: false};
        var queryStrings = location.search.substring(1).split("&");
        for (var i = 0, len = queryStrings.length; i < len; i++) {
            if (queryStrings[i] !== "") {
                var query = queryStrings[i].split("=");
                if (query[0] === "n") conf.n = parseInt(query[1]);
                if (query[0] === "randmax") conf.randMax = parseInt(query[1]);
            }
        }
        var ary = new Array(conf.n);
        var result = new Array(ary.length);
        var firstPivotIdx = 0;
        var numWorker = 2;
        var w1 = new Worker(window.location.origin + "/quicksort/src/worker/non-recursive/worker.js");
        var w2 = new Worker(window.location.origin + "/quicksort/src/worker/non-recursive/worker.js");

        // message handler
        w1.onmessage = w2.onmessage = function (event) {

            /* CONSOLE */ { console.log("------------------------------"); }

            numWorker--;
            var ary = event.data;

            // merge the array
            if (ary.length > 0) {
                if (result[firstPivotIdx] <= ary[0]) {

                    /* CONSOLE */ { console.time("merge arrays"); }

                    for (var i = firstPivotIdx + 1, j = 0, len = ary.length; j < len; i++, j++) {
                        result[i] = ary[j];
                    }

                    /* CONSOLE */ { console.timeEnd("merge arrays");}
                }
                else {

                    /* CONSOLE */ { console.time("merge arrays"); }

                    for (var i = 0, len = ary.length; i < len; i++) {
                        result[i] = ary[i];
                    }

                    /* CONSOLE */ { console.timeEnd("merge arrays"); }
                }
            }

            // すべての Worker からデータを受け取り次第、併合処理を終了
            if (numWorker <= 0) {

                /* CONSOLE */ {
                    console.log("------------------------------");
                    console.timeEnd("Time");
                    if (conf.verbose) console.log("sorted array: " + result);
                    if (conf.verbose) console.log("len: " + result.length);
                }
            }
        };

        // generate the values
        for (var i = 0, count = conf.n; i < count; i++) {
            ary[i] = Math.floor(Math.random() * conf.randMax);
        }

        /* CONSOLE */ {
            console.log("n: " + conf.n);
            if (conf.verbose) console.log("original array: " + ary);
            if (conf.verbose) console.log("len: " + ary.length);
        }

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

        /* CONSOLE */ {
            console.log("------------------------------");
            console.time("Time");
        }

        firstPivotIdx = partition(ary, 0, ary.length - 1);
        result[firstPivotIdx] = ary[firstPivotIdx];

        /* CONSOLE */ { console.time("create a sliced array"); }

        var data1 = ary.slice(0, firstPivotIdx);

        /* CONSOLE */ {
            console.timeEnd("create a sliced array");
            console.time("create a sliced array");
        }

        var data2 = ary.slice(firstPivotIdx + 1, ary.length);

        /* CONSOLE */ { console.timeEnd("create a sliced array"); }

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
