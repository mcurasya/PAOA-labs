"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountingSorter = exports.MergeSorter = exports.BubbleSorter = void 0;
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter() {
        this.swapsCount = 0;
        this.comparesCount = 0;
    }
    BubbleSorter.prototype.showStats = function () {
        console.table([
            {
                "amount of swaps": this.swapsCount,
                "amount of comparisons": this.comparesCount,
            },
        ]);
    };
    BubbleSorter.prototype.sort = function (arr) {
        this.swapsCount = 0;
        this.comparesCount = 0;
        var result = arr.slice();
        var changed = true;
        for (var i = 0; i < result.length && changed; ++i) {
            changed = false;
            for (var j = 0; j < result.length - 1 - i; j++) {
                this.comparesCount++;
                if (result[j] > result[j + 1]) {
                    changed = true;
                    this.swapsCount++;
                    var temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
        return result;
    };
    BubbleSorter.prototype.toString = function () {
        return "Bubble sort";
    };
    return BubbleSorter;
}());
exports.BubbleSorter = BubbleSorter;
var MergeSorter = /** @class */ (function () {
    function MergeSorter() {
        this.swapsCount = 0;
        this.comparesCount = 0;
    }
    MergeSorter.prototype.showStats = function () {
        console.table([
            {
                "amount of swaps": this.swapsCount,
                "amount of comparisons": this.comparesCount,
            },
        ]);
    };
    MergeSorter.prototype.sort = function (arr) {
        this.swapsCount = 0;
        this.comparesCount = 0;
        return this.__merge_sort(arr.slice());
    };
    MergeSorter.prototype.__merge_sort = function (vals) {
        if (vals.length > 1) {
            var middle = Math.floor(vals.length / 2);
            var left_subarr = vals.slice(0, middle);
            var right_subarr = vals.slice(middle, vals.length);
            left_subarr = this.__merge_sort(left_subarr);
            right_subarr = this.__merge_sort(right_subarr);
            vals = [];
            while (left_subarr.length > 0 && right_subarr.length > 0) {
                this.comparesCount++;
                if (left_subarr[0] < right_subarr[0]) {
                    this.swapsCount++;
                    vals.push(left_subarr.shift());
                }
                else {
                    this.swapsCount++;
                    vals.push(right_subarr.shift());
                }
            }
            vals = vals.concat(left_subarr);
            this.swapsCount += left_subarr.length;
            vals = vals.concat(right_subarr);
            this.swapsCount += right_subarr.length;
        }
        return vals;
    };
    MergeSorter.prototype.toString = function () {
        return "Merge sort";
    };
    return MergeSorter;
}());
exports.MergeSorter = MergeSorter;
var CountingSorter = /** @class */ (function () {
    function CountingSorter() {
        this.swapsCount = 0;
        this.comparesCount = 0;
    }
    CountingSorter.prototype.showStats = function () {
        console.table([
            {
                "amount of copies": this.swapsCount,
                "amount of comparisons": this.comparesCount,
            },
        ]);
    };
    CountingSorter.prototype.sort = function (arr) {
        var _this = this;
        this.swapsCount = 0;
        var counter = Array(Math.max.apply(Math, arr) + 1);
        var result = [];
        for (var i = 0; i < counter.length; i++) {
            counter[i] = 0;
        }
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var elem = arr_1[_i];
            counter[elem]++;
        }
        counter.forEach(function (val, index) {
            _this.swapsCount += val;
            for (var i = 0; i < val; ++i) {
                result.push(index);
            }
        });
        return result;
    };
    CountingSorter.prototype.toString = function () {
        return "Counting sort";
    };
    return CountingSorter;
}());
exports.CountingSorter = CountingSorter;
