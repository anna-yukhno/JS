var scheme = {
	name: 'Gate',
	type: 'XOR',

	children: [{
		name: 'Gate',
		type: 'NOT',
		children: [{
			name: 'Switch',
			type: 'OFF',
			state: 0
		}]
	}, {
		name: 'Gate',
		type: 'OR',
		children: [{
			name: 'Gate',
			type: 'OR',
			children: [{
				name: 'Switch',
				type: 'OFF',
				state: 0
			}, {
				name: 'Gate',
				type: 'AND',
				children: [{
					name: 'Switch',
					type: 'OFF',
					state: 0
				}, {
					name: 'Switch',
					type: 'ON',
					state: 1
				}]
			}]
		}, {
			name: 'Switch',
			type: 'OFF',
			state: 0
		}]
	}]
};

var gates = {
	AND: function(arr) {
		return arr[0] && arr[1];
	},
	OR: function(arr) {
		return arr[0] || arr[1];
	},
	XOR: function(arr) {
		return arr[0] ^ arr[1];
	},
	NOT: function(arr) {
		return !arr[0]; //привести?
	}
}

function tester(obj) {
//debugger;
	var state;
	switch (obj.name) {
		case 'Switch':
			state = obj.state;
			break;
		case 'Gate':
			var statesHolder = [];

			for (var i = 0; i < obj.children.length; i++) {
				statesHolder.push(tester(obj.children[i]));
			}
			state = gates[obj.type](statesHolder);
			break;
	}
	// debugger;
	return state;
}

console.log(tester(scheme));