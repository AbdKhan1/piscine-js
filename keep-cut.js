function cutFirst(str) {
    let newStr = ""
    for (let i = 2; i < str.length; i++) {
        newStr += str[i]
    }
    return newStr
}

function cutLast(str) {
    let newStr = ""
    for (let i = 0; i < str.length - 2; i++) {
        newStr += str[i]
    }
    return newStr
}

function cutFirstLast(str) {
    let newStr = ""
    for (let i = 2; i < str.length - 2; i++) {
        newStr += str[i]
    }
    return newStr
}

function KeepFirst(str) {
    let newStr = ""
    for (let i = 0; i <=2; i++) {
        newStr += str[i]
    }
    return newStr
}

function KeepLast(str) {
    let newStr = ""
    let length = str.length-2
    for (let i = length; i <= str.length; i++) {
        newStr += str[i]
    }
    return newStr
}

function KeepFirstLast(str) {
    let newStr =""
    let cut1 = KeepFirst(str)
    let cut2 = KeepLast(str)
    newStr += cut1 + cut2
    return newStr
}
console.log(KeepFirstLast('abdef'))