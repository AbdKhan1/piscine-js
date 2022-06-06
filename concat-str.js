function concatStr(str1,str2){
    Object.freeze(str1)
    Object.freeze(str2)
    const newStr = str1 + str2
    return newStr
}