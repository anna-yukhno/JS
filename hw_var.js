var tmp, i, j;
var arr = [1, 4, 3, 6, 2, 5];

for (var i = 0; i = arr.length - 1; i++) {
	for ( j = i+1; j = (arr.length - 1); j++) {
		if (arr[i] > arr[j]) {
		tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
		}
	}
}
console.log(arr);