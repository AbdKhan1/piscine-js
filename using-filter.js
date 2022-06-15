function filterShortStateName(arr) {
    return arr.filter(word => word.length < 7);
}


function filterStartVowel(arr) {
    return arr.filter(element => /^[aeiou]/i.test(element))
}

const filter5Vowels = array => array.filter(word => word.match(/[aeiouAEIOU]/g).length >= 5)

const filter1DistinctVowel = array => array.filter(word => {
    let arr = word.match(/[aeiouAEIOU]/g)// only cities with vowels
    return arr.every(v => v.toLowerCase() === arr[0].toLowerCase())//make sure all vowels are equial and compare values
})

const multiFilter = array => array.filter(obj => {
    return (filterStartVowel(obj.name) === 0) && (obj.capital.length >= 8) && (obj.tag.match(/[aeiouAEIOU]/g).length >= 1) && (obj.region != 'South')
})