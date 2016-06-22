/**
 * Solution One
 */

function FirstReverse(str) {
  let reverse = '',
      len = str.length;
  for (let i = (len - 1); i >= 0; i--) reverse += str.charAt(i);

  return reverse;
 }

 /**
  * Solution Two
  */

  function FirstReverse(str) {
     let reverse = [],
         len = str.length;
   // code goes here
   for (let i = (len - 1); i >= 0; i--) reverse.push(str.charAt(i));

   return reverse;

 }
