//smallest difference when a pair consists of one item from one array and one from the other array.
function smallestDifference(arr1, arr2){
    arr1.sort();
    arr2.sort();
    let i = 0;
    let x = 0;
    let smallestDiff = Number.MAX_SAFE_INTEGER;
 
    while (i < arr1.length && x < arr2.length)
    {
        if (Math.abs(arr1[i] - arr2[x]) < smallestDiff)
            smallestDiff = Math.abs(arr1[i] - arr2[x])

        if (arr1[i] < arr2[x])
            i++;
        else
            x++;
    }
    return smallestDiff;
};



//smallest difference all inclusive
function smallestDifference(arr1, arr2){
    myArr = arr1.concat(arr2);
    myArr.sort();
    let smallestDiff = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < myArr.length; i++){
        if(Math.abs(myArr[i] - myArr[i+1]) < smallestDiff){
            smallestDiff = Math.abs(myArr[i] - myArr[i+1]);
        };
    };
    return smallestDiff;
};

let arrayOne = [10, 20, 14, 16, 18];
let arrayTwo = [30, 23, 54, 33, 96];
console.log(smallestDifference(arrayOne, arrayTwo));