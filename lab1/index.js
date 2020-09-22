"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorters_1 = require("./sorters");
var arrayGenerator_1 = require("./arrayGenerator");
function main() {
    console.log(new Date().toLocaleTimeString());
    var bs = new sorters_1.BubbleSorter();
    var ms = new sorters_1.MergeSorter();
    var cs = new sorters_1.CountingSorter();
    for (var _i = 0, _a = [bs, ms, cs]; _i < _a.length; _i++) {
        var sorter = _a[_i];
        console.log(sorter.toString());
        for (var _b = 0, _c = [1000, 10000, 100000]; _b < _c.length; _b++) {
            var size = _c[_b];
            console.log(size + " elements");
            console.log("forward array");
            sorter.sort(arrayGenerator_1.GenerateForwardArray(size));
            sorter.showStats();
            console.log("random array");
            sorter.sort(arrayGenerator_1.GenerateRandomArray(size));
            sorter.showStats();
            console.log("reverse array");
            sorter.sort(arrayGenerator_1.GenerateReverseArray(size));
            sorter.showStats();
        }
    }
    console.log(new Date().toLocaleTimeString());
}
main();
