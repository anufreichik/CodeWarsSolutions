// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b.
//
// arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
    let newarr=a;
    for(let el of b)
        newarr = newarr.filter(item=>item !==el);
    return newarr;
}