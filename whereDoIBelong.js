function where(arr, num) {
    // sort arr
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    // console.log(arr);
    // iterate over sorted arr
    for (var i=0, l=arr.length; i<l; i++) {
        // - if num is larger, then continue
        // - if num is smaller, then return index
        if (isGreater(num, arr[i])) {
            console.log(i);
            return i;
        }
    }
    // - if num is smaller than last index, return incremented i
    return i;

    function isGreater(control, candidate) {
        // compare num to item at index
        return control <= candidate;
    }
}

console.log(where([10, 20, 30, 40, 50], 35) == 3);
console.log(where([10, 20, 30, 40, 50], 30) == 2);
console.log(where([40, 60, 30], 50) == 2);
console.log(where([3, 10, 5], 3) == 0);
console.log(where([2, 5, 10], 15) == 3);
