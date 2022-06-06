const escapeStr = "\`\\\\/\"\'";
const arr = [4, '2'];


const obj ={
str :"abc",
num : 123,
bool : true, 
undef : undefined,
};


const nested = {
    arr: [4,undefined,'2'],
    obj:{
        str:"xyz",
        num:456,
        bool: false,
    }
}
Object.freeze(nested);
Object.freeze(nested.arr)
Object.freeze(nested.obj)