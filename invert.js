function invert(obj){
    const retobj = {};
    Object.keys(obj).forEach(key =>{
        ret[obj[key]]=key;
    })
    return retobj;
}