function reverse(arr) {
    arr = Array.isArray(arr)
    for (let i = 0, j = arr.length; i < arr.length; i = i + 1, j = j - 1) {
        arr[i] = arr[j]
    }
    return arr
}