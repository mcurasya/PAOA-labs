"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRandomArray = exports.GenerateReverseArray = exports.GenerateForwardArray = void 0;
function GenerateForwardArray(size) {
    var res = Array(size);
    for (var index = 0; index < size; index++) {
        res[index] = index;
    }
    return res;
}
exports.GenerateForwardArray = GenerateForwardArray;
function GenerateReverseArray(size) {
    var res = Array(size);
    for (var index = 0; index < size; index++) {
        res[index] = size - 1 - index;
    }
    return res;
}
exports.GenerateReverseArray = GenerateReverseArray;
function GenerateRandomArray(size) {
    var res = Array(size);
    for (var index = 0; index < size; index++) {
        res[index] = Math.floor(Math.random() * size);
    }
    return res;
}
exports.GenerateRandomArray = GenerateRandomArray;
