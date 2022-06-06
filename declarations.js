const escapeStr = "\`\\\\/\"\'";
const arr = [4, '2'];
Object.freeze(arr)

const obj ={
str :"abc",
num : 123,
bool : true, 
undef : undefined,
};
Object.freeze(obj);

const nested = {
    arr2: [4,undefined,'2'],
    obj2:{
        str:"xyz",
        num:456,
        bool: false,
    }
}
Object.freeze(nested)