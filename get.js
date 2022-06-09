function get(src, path) {
    let value = undefined
    let arr = [path.split(".")]
    for (let i = 0; i < arr.length; i++) {
        value = src[arr[i]]
        if (src[arr[i]] == undefined) {
            return undefined
        }
    }
    return value
}
console.log(get({ nested: { key: 'value' } }, 'nested.key') === 'value')