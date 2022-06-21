function filter(arr, fun) {
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        tempArr.push(fun(arr[i], i, arr))
    }
    return tempArr
}


