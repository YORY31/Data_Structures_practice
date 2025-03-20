function largestOfFou(arr){
    const results = [];//empty array for storing larger numbers 

    for (let i = 0; i <arr.length; i++){
        let largestNum = arr[i][0];//set the first number in the array as the largest number
        for(let y = 1; y < arr [i].length; y++){
           if(arr[i][y]>largestNum){
               largestNum = arr[i][y];
           }

        }
        results.push(largestNum);//push the largest number into the results array
    }
    return results;

}

console.log(largestOfFour([
    [4, 5, 1, 3,56,67,989],
    [16, 27, 18, 30],
    [32, 45, 37, 50],
    [1000, 1001, 857, 130]
  ]));