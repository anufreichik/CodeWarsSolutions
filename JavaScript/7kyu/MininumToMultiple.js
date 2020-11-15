//Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.
// minimum(10, 6)  //= 2
//
// 10+2 = 12 which is a multiple of 6

function minimum(a, x) {
    // your solution here
    if(a===0 || a%x===0) return 0;
    let num1=a;
    let num2=a;
    let result = 0;
    while(num1%x!==0 && num2%x!==0)
    {
        num1=num1+1;
        num2=num2-1;
        result++;
        if(num1%x===0 || num2%x===0) return result;
    }
}