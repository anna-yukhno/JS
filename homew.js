var a = 1,
	b = 2,
	c = 3,
	d = 4;
var v2= a;
var v1, v3, v4;

(b < a) ? v3 = b : v1 = b;

if ((c < b ) && (c < a)) {
	v4 = c;
} else  if ((c < b) && (c > a)) {
	v2 = c;
	v3 = a;
	} else if ((c < a) && (c > b)) {
		v3 = c;
		v4 = b;
		} else if ((c > b) && (c > a)) {
		v1 = c;
			if (a > b) {
			v2 = a;
			v3 = b;
			} else {
			v2 = b;
			v3 = a;
		}
	}
