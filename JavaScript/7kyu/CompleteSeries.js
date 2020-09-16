// You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.
//
//     If the numbers in the sequence provided are not in order you should order them,
//     but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:
//
// inputs        outputs
//     [2,1]     ->  [0,1,2]
//     [1,4,4,6] ->  [0]

function completeSeries(arr) {

    let originalArrayLength = arr.length;
    let filteredArrayLength = arr.filter(el=>arr.indexOf(el)===arr.lastIndexOf(el)).length;
    if(originalArrayLength !==filteredArrayLength) return [0];
    else
    {
        let max = Math.max(...arr);
        let ret = [];
        for(let i=0;i<=max;i++)
            ret.push(i);

        return ret;
    }
}