// Mutation: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    var candidates = arr[1].toLowerCase().split("");
    var control = arr[0].toLowerCase();

    for (var i=0, l=candidates.length; i<l; i++) {
        if (control.indexOf(candidates[i]) === -1) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);
