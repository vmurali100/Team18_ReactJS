
function mappingFunction(element) {
    return element * 2; 
  }
  let originalArray = [1, 2, 3, 4, 5];
  let mappedArray = originalArray.map(mappingFunction);
  let flattenedArray = mappedArray.flat();
  console.log(flattenedArray); 
  