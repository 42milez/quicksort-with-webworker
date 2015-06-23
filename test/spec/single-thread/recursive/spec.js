describe("RecursiveQuickSort", function () {
    it("should sort an array in ascending order", function () {
        var conf = {n: 10, randMax: 100, verbose: false};
        var queryStrings = location.search.substring(1).split("&");
        for (var i = 0, len = queryStrings.length; i < len; i++) {
            if (queryStrings[i] !== "") {
                var query = queryStrings[i].split("=");
                if (query[0] === "n") conf.n = parseInt(query[1]);
                if (query[0] === "randmax") conf.randMax = parseInt(query[1]);
                if (query[0] === "verbose") conf.verbose = query[1];
            }
        }
        var ary = new Array(conf.n);

        // generate the values
        for (var i = 0, count = conf.n; i < count; i++) {
            ary[i] = Math.floor(Math.random() * conf.randMax);
        }

        // ------------------------------
        //  start sorting
        // ------------------------------
        console.log("n: " + conf.n);
        if (conf.verbose) console.log("original array: " + ary);
        if (conf.verbose) console.log("len: " + ary.length);
        console.time("Time");

        RecursiveQuickSort.sort(ary, 0, ary.length - 1);

        console.log("------------------------------");
        console.timeEnd("Time");
        if (conf.verbose) console.log("sorted array: " + ary);
        if (conf.verbose) console.log("len: " + ary.length);

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
