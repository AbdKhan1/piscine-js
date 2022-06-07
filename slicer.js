function slice(arr, start, end) {
    let newArr = []
    let counter = 0

    if (start > arr.length) {
        return newArr
    } else if (start < 0 && end >= 0) {
        if (counter < end) {
            for (let i = start + arr.length, j = 0; i < arr.length; i = i + 1, j = j + 1) {
                newArr[j] = arr[i]
                counter++
            }
        }
        return newArr
    } else if ((start < 0 && end <= 0)) {
        counter = arr.length + end
        if (counter < end) {
            for (let i = arr.length + start, j = 0; i < arr.length; i = i + 1, j = j + 1) {
                newArr[j] = arr[i]
                counter++
            }
        }
        return newArr
    } else if ((start >= 0 || start == undefined) && (end >= 0 && end <= arr.length)) {
        if (counter < end) {
            for (let i = start, j = 0; i < arr.length; i = i + 1, j = j + 1) {
                newArr[j] = arr[i]
                counter++
            }
        }
        return newArr
    }
}
console.log(slice(('abcdef', 2)))