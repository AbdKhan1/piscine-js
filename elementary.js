function multiply(a, b) {
    if (b < 0 && a < 0) {
        let newInt = a
        for (let i = 0; i >= b; i--) {
            a -= newInt
        }
        return a
    } else if (b > 0) {
        let newInt = a
        for (let i = 1; i < b; i++) {
            a += newInt
        }
        return a
    } else {
        if (b || a == 0) {
            if (b || a < 0) {
                return -0
            }
            return 0
        }
    }
}

function divide(a, b) {
    let newInt = 0;
    if (a > 0 && b > 0) {
        for (let i = a; i >= b;i= i - b) {
            newInt+= 1;
        }
        return newInt;
    } else if (a < 0 && b>0) {
        for (let i = a; i <= -b;i= i + b) {
            newInt -= 1;
        }
        return newInt
    } else if (b < 0 && a >0) {
        for (let i = a; i >= -b;i= i + b) {
            newInt -= 1
        }
        return newInt;
    } else {
        return 0;
    }
}

function modulo(a, b){
    let newInt = divide(a,b);
    let secondInt = multiply(newInt,b);
    let int = a - secondInt
    return int;
}
console.log(modulo(5,3))