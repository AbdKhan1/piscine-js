const longWords = arr => arr.every(x => {
    return typeof x === 'String' && x.length >= 5
});

const oneLongWord = arr => arr.some(x => {
    return x.length >= 10
});

const noLongWords = arr => arr.every(x => {
    return x.length < 7
});