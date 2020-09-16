// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
    return  arr.filter((el,index)=>
        arr.indexOf(el)===arr.lastIndexOf(el)
    )[0]

}