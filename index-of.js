function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return true
        } else {
            return false
        }
    }
}

function lastIndexOf(arr, ele) {
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] == ele) {
            return i
        }
    }
}

function indexOf(arr, ele, index) {
    if (index  != null) {
        for (let i = index; i < arr.length; i++) {
            if (arr[i] == ele) {
                return i
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ele) {
                return i
            }
        }
    }
}
console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))