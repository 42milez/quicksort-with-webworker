importScripts("../../recursive.js");
onmessage = function (event) {
    var ary = event.data;

    // start sorting
    if (ary.length > 0)
        RecursiveQuickSort.sort(ary);

    // send the sorted array to main thread
    postMessage(ary);
};
