function invert(obj){
    const retobj = {};
    Object.keys(obj).forEach(key =>{
        retobj[obj[key]]=key;
    })
    return retobj;
}