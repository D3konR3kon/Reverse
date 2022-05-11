// function reverseString(str) {

//     // return a new array of strings
//     const arrayStrings = str.split("");
   
//     // reverse the new created array elements
//     const reverseArray = arrayStrings.reverse();
 
//     // join all elements of the array into a string
//     const joinArray = reverseArray.join("");
    
//     // return the reversed string
//     return joinArray;
// }
 
// // take input from the user
// const string = "alid oyuv"

// const result = reverseString(string);
// console.log(result);

function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }
  
  console.log(reverse1("vuyo dila"));