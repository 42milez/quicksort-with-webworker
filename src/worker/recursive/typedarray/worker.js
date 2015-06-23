importScripts("../../../recursive.js");
onmessage = function (event) {
    var ary = event.data;

    // ソートを実行
    if (ary.length > 0)
        RecursiveQuickSort.sort(ary);

    // ソート済み配列をメインスレッドへ転送
    postMessage(ary, [ary.buffer]);
};
