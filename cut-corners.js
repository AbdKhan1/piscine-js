function multiply(a, b) {
    if (b == 0 || a == 0) {
        return 0
    } else if (a > 0 && b > 0) {
        let newInt = a
        for (let i = 1; i < b; i++) {
            a += newInt
        }
        return a
    } else if (b < 0 && a < 0) {
        let newInt = a
        for (let i = 1; i > b; i--) {
            a -= newInt
        }
        return a
    } else if (b < 0 && a > 0) {
        let newInt = a
        for (let i = -1; i > b; i = i - 1) {
            a += newInt
        }
        return -a
    } else if (b > 0 && a < 0) {
        let newInt = a
        for (let i = 1; i < b; i++) {
            a += newInt
        }
        return a
    }
}

function divide(a, b) {
    let newInt = 0;
    if (a > 0 && b > 0) {
        for (let i = a; i >= b; i = i - b) {
            newInt += 1;
        }
        return newInt;
    } else if (a < 0 && b > 0) {
        for (let i = a; i <= -b; i = i + b) {
            newInt -= 1;
        }
        return newInt
    } else if (b < 0 && a > 0) {
        for (let i = a; i >= -b; i = i + b) {
            newInt -= 1
        }
        return newInt;
    } else if (b < 0 && a < 0) {
        for (let i = a; i <= b; i = i - b) {
            newInt += 1
        }
        return newInt
    }
    else {
        return 0;
    }
}

function modulo(a, b) {
    let newInt = divide(a, b);
    let secondInt = multiply(newInt, b);
    let int = a - secondInt
    return int;
}

function round(num) {
    if (num == Number.POSITIVE_INFINITY || num == Number.NEGATIVE_INFINITY || num == 0) {
        return num;
    } else if (num >= 0) {
        let remainder = modulo(num, 1)
        let remainx10 = multiply(remainder, 10)
        if (remainx10 >= 5) {
            num = num + 1
        } else if (remainx10 < 5 && remainx10 >= 1) {
            return trunc(num)
        } else if (remainx10 >= 0) {
            return trunc(num)
        }
        return num - remainder
    } else if (num <= 0) {
        let remainder = modulo(num, 1)
        let remainx10 = multiply(remainder, 10)
        if (remainx10 > -5) {
            return trunc(num)
        } else if (remainx10 <= -5) {
            num = num - 1
            return trunc(num)
        }
    }
}
console.log(round(-3.45))

function floor(num) {
    if (num == Number.POSITIVE_INFINITY || num == Number.NEGATIVE_INFINITY || num == 0) {
        return num;
    } else {
        let remainder = modulo(num, 1)
        if (num < 0) {
            return (num = num - 1) - remainder
        }
        return (num - remainder)
    }
}

function ceil(num) {
    if (num == Number.POSITIVE_INFINITY || num == Number.NEGATIVE_INFINITY || num == 0) {
        return num;
    } else {
        let remainder = modulo(num, 1)
        let remainderx10 = multiply(remainder, 1)
        if (num < 0) {
            return num - remainder
        } else if (remainderx10 > 0) {
            return (num + 1) - remainder
        } else {
            return num
        }
    }
}

function trunc(num) {
    if (num==Number.POSITIVE_INFINITY || num==Number.NEGATIVE_INFINITY ||num==0){
        return num;
    }else if (num>=0xfffffffff){
        let newNum=num-0xfffffffff;
        let remainder=modulo(newNum,1);
        let newNum2=newNum-remainder;
      let result=0xfffffffff+newNum2;
      return result; 
    }else if (num > 0) {
        let remainder = modulo(num, 1)
        return num - remainder
    } else if (num < 0) {
        let remainder = modulo(num, -1)
        return num - remainder
    }
}