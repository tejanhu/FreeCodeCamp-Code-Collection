
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.
// var previousVal;
// var currentVal;

// for(var i=0; i<array.length; i++){
//   for(var j=1; j<i; j++){
//      previousVal=array[i];
//      currentVal=array[j];
//   }
 
// }

singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
}, 0);
