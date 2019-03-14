function printPattern(n) {
    var n = document.getElementById("txtInputLevels").value;

    for (let i = 1; i <= n; i++) {
      let str = ' '.repeat(n - i);
      let str2 = '*'.repeat(i * 2 - 1)

      console.log(str + str2 + str);
    }
  }
// var stars = prompt("Enter the number of levels");
 
// for (var i = 1; i <= stars; i++) {
// for (var j = stars - 1; j >= i; j--) {
// document.writeln("&nbsp;");
 
// }
// for (var k = 1; k <= i; k++) {
// document.writeln("*");
// }
// document.write("<br/>");
// }