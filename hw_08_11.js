function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
// initial and result arrays
var arr = [], arrFaces = [];

//temporary arrays
var topTemp = [], bottom = [], left = [], right = [];

var ARR_SIZE = 8;

//fill the initial array
for (var i = 0; i < ARR_SIZE; i++) {
	arr[i] = [];
	for (var j = 0; j < ARR_SIZE; j++) {
		arr[i][j] = rand(11, 99);
	}
}

//check
console.table(arr);

//EVIL ALGORITHM:)

for (var i = 0; i < ARR_SIZE; i++) {
	for (var j = 0; j < ARR_SIZE; j++) {
		if (i === 0) {
			topTemp.push(arr[i][j]);
			arr[i][j] = 0;  // reset the elements for clarity
		} else if (i === ARR_SIZE-1) {
			bottom.push(arr[i][j]);
			arr[i][j] = 0;
		} else if ((i > 0) && (i <= ARR_SIZE-2)) {
			if (j === 0) {
				left.push(arr[i][j]);
				arr[i][j] = 0;
			} else if (j === ARR_SIZE-1) {
				right.push(arr[i][j]);
				arr[i][j] = 0;
			}
		}
	}
}

//check the filling
// console.log(topTemp);
// console.log(right);
// console.log(bottom);
// console.log(left);

arrFaces = topTemp.concat(right.concat(bottom.reverse().concat(left.reverse())));

console.log(arrFaces);
console.table(arr);
//from which class we begin to do something worthwhile? :)
