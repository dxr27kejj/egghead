"use strict";
// /**
//  * Determine if two strings are anagram
//  */
exports.__esModule = true;
function areAnagrams(s1, s2) {
    // s1 = s1.split('').sort().join('');
    // s2 = s2.split('').sort().join('');
    // return s1 === s2;
    var charCount = new Map();
    for (var _i = 0, _a = s1.split(''); _i < _a.length; _i++) {
        var char = _a[_i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (var _b = 0, _c = s2.split(''); _b < _c.length; _b++) {
        var char = _c[_b];
        if (!charCount.has(char))
            return false;
        charCount.set(char, charCount.get(char) - 1);
    }
    return Array.from(charCount.values()).every(function (val) { return val === 0; });
}
exports.areAnagrams = areAnagrams;
