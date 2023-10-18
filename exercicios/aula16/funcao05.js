/* Fatorial de maneira recursiva, quando uma função cha ela mesma */
function fatorial(n) {
/* 5! = 5x4x3x2x1
   5! = 5 x 4!
   n! = n x (n-1)!
   1! = 1  */

   if(n==1) {
    return 1
   } else {
    return n * fatorial(n-1)
   }// função fatorial tem uma chamada para ela mesma é recursividade.

}

console.log(fatorial(5))
