function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return true
        } else {
            return false
        }
    }
}

function lastIndexOf(arr, ele, index) {
    if (index >= 0) {
        for (let i = index; i > 0; i--) {
            if (arr[i] == ele) {
                return i
            }
        }
        return -1
    } else {
        for (let i = arr.length; i > 0; i--) {
            if (arr[i] == ele) {
                return i
            }
        }
        return -1
    }
}

function indexOf(arr, ele, index) {
    if (index >= 0) {
        for (let i = index; i < arr.length; i++) {
            if (arr[i] == ele) {
                return i
            }
        }
        return -1
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ele) {
                return i
            }
        }
        return -1
    }
}