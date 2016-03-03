// Falsy Bouncer
// Remove all falsy values from an array.
function bouncer(arr) {

    return arr.filter(isTruthy);

    function isTruthy(val){
        var result = false;
        if (val) { result = true; }
        return result;
    }
}

bouncer([7, "ate", "", false, 9]);
