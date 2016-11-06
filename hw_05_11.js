function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arr = [];
var arr2 = [];

for (var i = 0; i < 30 ; i++) {
	if ((i%2) === 0) {
		arr.push(rand(0, 100));
	} else {
		arr.push(rand(-100, 0));
	}
}
console.log(arr);

for (var i = 0; i <= arr.length ; i++) {
	if ((i != 0) && (i % 5) === 0) {
		arr2.push(arr[i-1]);
	}
}
console.log(arr2);