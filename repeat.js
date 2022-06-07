function repeat(str,num){
    let newStr = ""     
    for (let i = 1; i <= num; i++){
        newStr += str 
    } 
    return newStr
}
console.log(repeat("test",3))