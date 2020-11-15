//Count how often sign changes in array.
const catchSignChange = arr =>
{
    console.log(arr)
    let count = 0;
    let isPreviousPlus=(arr[0]>=0)?true:false;

    for(let i=1;i<arr.length;i++)
    {
        let isCurrentPlus = arr[i]>=0?true:false;
        console.log(isPreviousPlus, isCurrentPlus)
        if(isPreviousPlus!==isCurrentPlus) count++;
        isPreviousPlus=isCurrentPlus;
    }
    return count;
}