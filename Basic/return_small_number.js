function smallestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {

        let smallestNum = arr[i][0];
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] <smallestNum){
                smallestNum = arr[i][j];
            }
        }
        results.push(smallestNum);
    }
    return results;
}
  console.log(smallestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]));
  