class ArrayUtils{

    isEmpty(array){
        if (array.length == 0) {
            return true;
        }
        return false;
    }

    append(original, value){
        original.push(value);
        return original;
    }

    clone(original){
        newArray = [...original];
        return newArray;
    }

    subArray(original, from, to){
        newArray = new Array();
        for (let i=from; i<=to; i++) {
            newArray.push(original[i]);
        }
        return newArray;
    }

    equals(arr1, arr2){
        if (arr1.length !== arr2.length) {
            return false;
        }
        else {
            for (let i=0; i<arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    fill(original, value){
        for (let i=0; i<original.length; i++) {
            original[i] = value;
        }
        return;
    }

    indexOf(original, value){
        for (let i=0; i<original.length; i++) {
            original[i] === value;
            return i;
        }
        return -1;
    }

    remove(original, value){
        newArray = [...original];
        for (let i=0; i<original.length; i++) {
            if (newArray[i] === value) {
                newArray.splice(i, 1);
                return newArray;
            }
        }
    }

    reverse(original){
        newArray = new Array();
        for (let i=(original.length-1); i>=0; i--) {
            newArray.push(original[i]);
        }
        return newArray;
    }
    
}