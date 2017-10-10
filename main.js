var array1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var array2 = [-1,-8,-2];
var array3 = [1,7,3];
var array4 = [1,undefined,3,5,-3];
var array5 = [1,NaN,3,5,-3];

 //min
function getMinValue(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}
console.log ('arrayMin',getMinValue( array1));
console.log ('arrayMin',getMinValue( array2));
console.log ('arrayMin',getMinValue( array3));
console.log ('arrayMin',getMinValue( array4));
console.log ('arrayMin',getMinValue( array5));



//max
function getMaxValue (array) {
var max = array [0];
for (var i = 0; i < array.length; i++){
if (max < array [i]) max = array[i];
    }
return max;
    }
console.log ('arrayMax',getMaxValue(array1));
console.log ('arrayMax',getMaxValue(array2));
console.log ('arrayMax',getMaxValue(array3));
console.log ('arrayMax',getMaxValue(array4));
console.log ('arrayMax',getMaxValue(array5));


//sum
function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
    }
return sum;
}
console.log('arraySum', arraySum( array1));
console.log('arraySum', arraySum( array2));
console.log('arraySum', arraySum( array3));
console.log('arraySum', arraySum( array4));
console.log('arraySum', arraySum( array5));
