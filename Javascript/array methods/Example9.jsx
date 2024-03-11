function concatArrays(arr, depth) {
    if (depth === 0) {
      return arr;
    }
  
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        return acc.concat(concatArrays(val, depth - 1));
      } else {
        return acc.concat(val);
      }
    }, []);
  }
  
  
  let nestedArray = [1, [2, [3, 4], 5], [6, 7]];
  
  
  let result = concatArrays(nestedArray, 2);
  console.log(result); 