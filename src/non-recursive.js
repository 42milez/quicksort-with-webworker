NonRecursiveQuickSort = {
    sort: function (ary) {
        // size: スタックサイズ
        // lStack: 左区間インデックス用スタック
        // rStack: 右区間インデックス用スタック
        // p: スタックポインタ
        var size = Math.floor(Math.LOG2E * Math.log(ary.length)) + 1;
        var lStack = new Array(size);
        var rStack = new Array(size);
        var p = 1;

        lStack[0] = 0;
        rStack[0] = ary.length - 1;

        // 比較関数
        function isLessThan(a, b) {
            if (a === b) return false;
            else return a < b;
        }

        while (p > 0) {
            p--;
            var left = lStack[p];    // 区間左端インデックス
            var right = rStack[p];   // 区間右端インデックス

            // 左端インデックスと右端インデックスが交差した時点で当該区間におけるソートは完了
            while (left < right) {
                var idx = Math.floor((left + right) / 2);   // 区間中央インデックスの値をピボットとする
                var pivot = ary[idx];
                var i = left;
                var j = right;

                // ------------------------------
                //  値の交換
                // ------------------------------
                while (1) {
                    while (isLessThan(ary[i], pivot)) i++;   // ピボットより小さければ、インデックスを進める
                    while (isLessThan(pivot, ary[j])) j--;   // ピボットより大きければ、インデックスを進める
                    if (j <= i) {
                        // 左端インデックスと右端インデックスが交差した時点で当該区間におけるソートは完了
                        break;
                    }
                    else {
                        // 値を交換する
                        var t = ary[i];
                        ary[i] = ary[j];
                        ary[j] = t;
                        i++;
                        j--;
                    }
                }

                // ------------------------------
                //  次回ソート区間の決定
                // ------------------------------
                // ピボットに分割された区間の長い方を先に処理する
                if (i - left < right - j) {
                    // 左区間のソートを優先する
                    if (left < i) {
                        // 後ほどソートする右区間のインデックス情報を保持する
                        lStack[p] = i;
                        rStack[p] = right;
                        p++;
                    }
                    right = i - 1;   // 左区間の右端インデックスを更新する
                }
                else {
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
