function RNA(str){
    for (let i=0; i < str.length;i++){
        if (str[i] === 'G'){
            str[i] = 'C'
        }else if (str[i]==='C'){
            str[i] = 'G'
        }else if(str[i]==='T'){
            str[i] ='A'
        }else if (str[i]==='A'){
            str[i] = 'U'
        }else{
            return str 
        }
    }
    return str 
}

function DNA(str){
    for (let i=0; i < str.length;i++){
        if (str[i] === 'C'){
            str[i] = 'G'
        }else if (str[i]==='G'){
            str[i] = 'C'
        }else if(str[i]==='A'){
            str[i] ='T'
        }else if (str[i]==='U'){
            str[i] = 'A'
        }else{
            return str 
        }
    }
    return str 
}