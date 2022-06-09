function get(src, path) {
    for (let key in src) {
        if (src.hasOwnProperty(key)) {
            path = src[key]
            return path
        }
    }
}
get({ nested: { key: 'value' } }, 'nested.key') === 'value'