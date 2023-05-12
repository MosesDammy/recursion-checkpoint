function isPalindrome(word) {
    // Remove any non-alphanumeric characters from the string
    word = word.replace(/[^0-9 a-z]/gi, '').toLowerCase();
    //  i am Checking if the string is equal to its reverse
    return word === word.split("").reverse().join("");
  }
  console.log(isPalindrome("gag"));   
console.log(isPalindrome("kayak")); 
console.log(isPalindrome("php"));   
console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello"));  
