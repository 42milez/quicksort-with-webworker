RecursiveQuickSort = {
    sort: function (ary, l_idx, r_idx) {
        var pivot_idx;
        if (r_idx > l_idx) {
            pivot_idx = this.partition(ary, l_idx, r_idx);
            this.sort(ary, l_idx, pivot_idx - 1);
            this.sort(ary, pivot_idx + 1, r_idx);
        }
    },
    partition: function (ary, l_idx, r_idx) {
        var pivot_item = ary[l_idx];
        var tmp_l_idx = l_idx;
        var tmp_r_idx = r_idx;
        while (tmp_l_idx < tmp_r_idx) {
            while (ary[tmp_l_idx] <= pivot_item) {
                tmp_l_idx++;
            }
            while (ary[tmp_r_idx] > pivot_item) {
                tmp_r_idx--;
            }
            if (tmp_l_idx < tmp_r_idx) {
                var t = ary[tmp_l_idx];
                ary[tmp_l_idx] = ary[tmp_r_idx];
                ary[tmp_r_idx] = t;
            }
        }
        ary[l_idx] = ary[tmp_r_idx];
        ary[tmp_r_idx] = pivot_item;
        return tmp_r_idx;
    }
};
