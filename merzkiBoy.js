function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getSeaBattle(size) {

	var seaBattle =  {

		createField: function(size) {
			var field = [];
			for (var i = 0; i < size; i++) {
				field[i] = [];
				for (var j = 0; j < size; j++) {
					field[i][j] = {
					ship: false,
					opened: false,
					msg: "missed!"
					}
				}
			}
			return field;
		},

		shoot: function (x, y) {
			var message = '';
			if (!this.validate(x, y)) {
				alert('Петрович! Ты че краев не видишь?');
			} else {
				var cell = this.field[x][y];
				if (cell.opened) {
					console.log("already opened");
				} else {
					cell.opened = true;
					console.log(cell.msg);
					}
				}
		},

		validate: function(x, y) {
			return ( (x < size) || (y < size) )? true : false;
		},

		setMessage: function(x, y, message) { ///yfabuf jyf ye;yf ytgjyznyj
			this.field[x][y].msg = message;
		},

		putShip: function(x, y) {
			this.field[x][y].ship = true;
			this.field[x][y].msg = "drowned:(";
		}
	};
	seaBattle.field = seaBattle.createField(size);
	return seaBattle;
};

console.table(getSeaBattle(10).field);

var sb = getSeaBattle(10);
sb.putShip(0, 0);
sb.putShip(0, 9);
sb.putShip(9, 0);
sb.putShip(9, 9);

// sb.shoot(10, 10);

var timer = 20;

function selfPlay () {
	--timer;
	sb.shoot( rand(0, 9), rand(0, 9) );
	if(timer === 0) {
		console.log('Game Over');
		clearInterval(timerId);
	}
}

var timerId = setInterval(selfPlay, 2000);