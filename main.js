 //min
var array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
function getMinValue(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
console.log ('arrayMin',getMinValue(array))  //-12\


//max
var array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
function getMaxValue (array) {
var max = array [0];
for (var i = 0; i < array.length; i++){
if (max < array [i]) max = array[i];
    }
return max;
    }
console.log ('arrayMax',getMaxValue(array))  //44\


//sum
var arr = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
console.log('arraySum', arraySum(arr)); //32\

 //min
var array = [-1,-8,-2];
function getMinValue(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
console.log ('arrayMin',getMinValue(array))  //-8\

 //max
var array = [-1,-8,-2];
function getMaxValue (array) {
var max = array [0];
for (var i = 0; i < array.length; i++){
if (max < array [i]) max = array[i];
    }
return max;
    }
console.log ('arrayMax',getMaxValue(array))  //-1\


 //sum
var arr = [-1,-8,-2];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
console.log('arraySum',arraySum(arr)); //-11\


//min
var array = [1,7,3];
function getMinValue(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
console.log ('arrayMin',getMinValue(array))  //1\

//max
var array = [1,7,3];
function getMaxValue (array) {
var max = array [0];
for (var i = 0; i < array.length; i++){
if (max < array [i]) max = array[i];
    }
return max;
    }
console.log ('arrayMax',getMaxValue(array)) //7\

//sum
var arr = [1,7,3];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
console.log('arraySum',arraySum(arr)) //11\


//min
var array = [1,undefined,3,5,-3];
function getMinValue(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
console.log ('arrayMin',getMinValue(array))

//max

var array = [1,undefined,3,5,-3];
function getMaxValue (array) {
var max = array [0];
for (var i = 0; i < array.length; i++){
if (max < array [i]) max = array[i];
    }
return max;
    }
console.log ('arrayMax',getMaxValue(array))  //5\


//sum
var arr = [1,undefined,3,5,-3];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
console.log('arraySum',arraySum(arr))  // NaN\


//min
var array = [1,NaN,3,5,-3];
function getMinValue(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
console.log ('arrayMin',getMinValue(array)) //-3\


//max
var array = [1,NaN,3,5,-3];
function getMaxValue (array) {
var max = array [0];
for (var i = 0; i < array.length; i++){
if (max < array [i]) max = array[i];
    }
return max;
    }
console.log ('arrayMax',getMaxValue(array)) //5\


//sum
var arr = [1,NaN,3,5,-3];
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
console.log('arraySum',arraySum(arr)) // NaN
