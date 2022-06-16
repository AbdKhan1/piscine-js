const adder = (array, n = 0) => array.reduce(((accumulator, currentValue) => accumulator + currentValue), n)

const sumOrMul=(array,num=0)=>array.reduce(((a,b)=>{
    if (b%2===0){
        return a*b
    }else{
        return a+b
    }
    }), num)

    const funcExec = (arrFunc,n=0) => arrFunc.reduce((a,b)=>b(a),n);