
function isEven(num) {
    return num % 2 === 0;
  }
  

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
  let filteredNumbers = numbers.filter(isEven);
  
  console.log(filteredNumbers); 
  