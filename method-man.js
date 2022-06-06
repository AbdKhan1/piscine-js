function words(str){
    str = str.split(" ");
    return str 
}

function sentence(arr){
    arr = arr.join(' ');
    return arr 
}

function yell(str){
   str = str.toUpperCase()
    return str 
}

function whisper(str){
    str = words(str)
    str = str.unshift("*")
    str = str.push("*")
    str = sentece(str)
    str = str.toLowerCase()
    return str 
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}