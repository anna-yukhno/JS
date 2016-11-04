var tmp, i, j;
var arr = [1, 4, 3, 6, 2, 5];

console.log('number combination: ' + arr);

for (var i = 0; i <= arr.length - 1; i++) {
	for ( j = i+1; j <= (arr.length - 1); j++) {
		if (arr[i] < arr[j]) {
		tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
		}
	}
}
console.log(arr);
console.log(arr[0] *= 1000);
console.log(arr[1] *= 100);
console.log(arr[2] *= 10);