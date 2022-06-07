function cutFirst(str){
    let newStr = ""
    for (let i=2; i<str.length;i++){
        newStr +=str[i] 
    }
    return newStr
}

function cutLast(str){
    let newStr = ""
    for (let i=0; i < str.length-2; i++){
        newStr += str[i]
    }
    return newStr
}
console.log(cutLast('abcdef'))
function cutFirstLast(str){
    let cut1 = cutFirst(str)
    let cut2 = cutLast(str)
    let newStr = cut1 + cut2 
    return newStr
}

function KeepFirst(str){
    let newStr = ""
    for (let i=0;i<2;i++){
        newStr = str[i]
    }
    return newStr
}

function KeepLast(str){
    let newStr = ""
    for (let i=str.length;i>str.length-2;i--){
        newStr = str[i]
    }
    return newStr
}

function KeepFirstLast(str){
    let cut1 = KeepFirst(str)
    let cut2 = KeepLast(str)
    let newStr = cut1 + cut2 
    return newStr
}