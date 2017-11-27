
function reverseString(str) {
  
  //split strings into characters
  var strings = str.split('');
  
  //reverse those characters
  var reversedStrings = strings.reverse();
  
  //join the characters together
  var joinedStrings = reversedStrings.join('');
  
  return strings;
}

reverseString("hello");
