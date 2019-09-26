Note:- AP means Arun Prakash ( CEO of GUVI )
================================================================================

Question By AP:
    console.lgo(mul(2)(3)(4))
    //Expected Output: 24

Answer:

    function mul(n1) {
        return function(n2) {
            return function(n3) {
                return n1*n2*n3;
            }
        }
    }

================================================================================

Question By AP:
    var myconfusion = 1;
    
    var output = (function() {
                 delete myconfusion;
                 return myconfusion;
    }
    ) ();
    
    console.log(output); // What is the output of this code

Answer:
    1 /* cause delete checks only the functional block scope and returns true
even if it is not in the local scope */

Note:
    Cross check with MDN which specifies this behaviour.
================================================================================

Question By AP:
    var diffConfusion = { foo: 1}
    
    var output = ( function() {
                       delete diffConfusion.foo;
                       return diffConfusion.foo;
                   }
                 )
    console.log(output); // What is the output of this code

Answer:
    undefined // Since the delete removes the foo key from dictionary.

================================================================================

Question By AP:
    var z = 1, y = z = typeof y;
    console.log(y); // What is the output of this code

Answer:
    undefined /* since y is undefined at the time of resolving the typeof
returns a string called "undefined" which is stored in both z and y; */

================================================================================

Question By AP:
    /* What is the difference between declaring function in the formats listed
below? */
    var foo = function() { 
          // Some Code
    }

    function bar() {
      // Some Code
    }

/*
Answer:
   Nothing really much but the first one is called anonymous function and the
second declaration is called Named function

Note:
   They are useful because of higher order function. So, they need not to be
bothered about thinking about meaningful name for every argument functions.
*/
================================================================================

Question By AP:
    bar();
    (function abc() { console.log("Something") } ) ();
    function bar() { console.log("bar got called") }
    // What is the output of the code ?

Answer:
   bar got called
   Something
   /* The reason is because of hoisting since IIFE is an expression it is
executed or interpreted at the time of evaluation and not in time of hoisting. 
   */

================================================================================

Question By AP:
    var counterArray = { A:3, B: 4};
    counterArray["C"] = 1;
    console.log( Object.keys(counterArray).length );
    // What is the output of this code

Answer:
    3 /* The Object method returns array of keys and the length of the array
is printed in console. */

================================================================================


