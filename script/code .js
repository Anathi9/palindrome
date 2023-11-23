
function isPalindrome(madam) {

 madam == madam.split("").reverse().join("");
 if (madam == 'Madam') {
    
     return 'madam is a palindrome'
 }else{
    return 'Ayoo'
 }
}

isPalindrome('Madam')
console.log(isPalindrome('Madam')); 