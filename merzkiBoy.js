var seaFight = {
	field: [],
	shoot: function (x, y) {
		if (!this.validate(x, y)) {
			alert('Ты че краев не видишь?');
		} else {
			var cell = this.field[x][y];
			cell.opened = true;
			cell.msg = 'промазал! бугага!!!!';
			console.log(cell.msg);
		}
		// bla bla bla.......................................add logic
	},
	validate: function(x, y) {
		return ( (x < fieldSize) || (y < fieldSize) )? true : false;
	}
};

var	fieldSize = 10;


for (var i = 0; i < fieldSize; i++) {
	seaFight.field[i] = [];
	for (var j = 0; j < fieldSize; j++) {
		seaFight.field[i][j] = {
			ship: false,
			opened: false,
			msg: ""
		}
	}
}

console.table(seaFight.field);

seaFight.shoot(5, 5);