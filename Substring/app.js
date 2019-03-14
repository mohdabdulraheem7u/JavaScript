// var count = 0;
// var string = "foofoofoo",
//     substring = "oo";
//  if(string.indexOf(substring) !== -1) {
//     count++;
//     console.log(count);
// }

function subString(string) {
// if(string!=null){
    var string = document.getElementById("txtInputString").value,
        searchFor = document.getElementById("txtSearchString").value,
        count = 0,
        position = string.indexOf(searchFor);

    while (position > -1) {
        ++count;
        position = string.indexOf(searchFor, ++position);
    }

    console.log(count);
}

// else{
    // alert('Please enter the string');
// }}
