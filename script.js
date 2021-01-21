function printTriangle(n) {
  let arr = Array(n).fill(' ');

  while ( n > 0 ) {
    n--;
    arr.splice(n, 1, "# ")
    console.log(arr.join(''));
  }
}
printTriangle(5)
// console =>

//     #
//    # #
//   # # #
//  # # # #
// # # # # #