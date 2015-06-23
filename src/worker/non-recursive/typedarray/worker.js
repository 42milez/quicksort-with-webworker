importScripts("../../../non-recursive.js");
onmessage = function (event) {
    var ary = event.data;

    // start sorting
    if (ary.length > 0)
        NonRecursiveQuickSort.sort(ary);

    // send the sorted array to main thread
    postMessage(ary, [ary.buffer]);
};
