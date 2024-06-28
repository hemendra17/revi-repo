
class Position {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Move to one or more vectors
	 * @param  {...Vector} force A couple of forces
	 */
	toString() {
		return `${this.x}x${this.y}`;
	}
}

class Vector {
	/**
	 * Create vector
	 * @param  {Number} dir    Vector direction (0 - on 12 o'clock)
	 * @param  {Number} length Vector length 0..Infinite
	 * @param  {Function} evolution Evolution function - decrease/increase vector every call
	 * @return {Vector}        Instance
	 */
	constructor(dir = Math.PI / 2, length = 1, evolution = value => value - 0.05) {
		this.dir = (dir) % (2*Math.PI);
		this.length = length;
		this.evolutionFunction = evolution;
	}

	/**
	 * Vector evolution: every call change length
	 * @param  {Number} value Evolution value
	 */
	evolution() {
		if(this.length > 0) {
			const value = this.evolutionFunction(this.length);

			this.length = Math.max(0, value);			
		}
	}

	/**
	 * Calc next pos from current by vector
	 * @param  {Position} pos Init pos
	 * @return {Position}     Moved pos
	 */
	getNextPos(pos) {
		const x = Math.round(pos.x + Math.cos(this.dir - Math.PI/2) * this.length);
		const y = Math.round(pos.y + Math.sin(this.dir - Math.PI/2) * this.length);

		this.evolution();

		return new Position(x,y);
	}

	toString() {
		return `Angle ${Math.round(180*this.dir/Math.PI)}, length ${this.length}`;
	}

	valueOf() {
		return this.toString()
	}
}

function GRAVITY() {
	const len = 0.001 + Math.random() * 0.01;

	return new Vector(Math.PI, 1, value => Math.max(1, 0.01 + value));
}

function RANDOM_VEC() {
	// const angle = (3*Math.PI/2) * Math.random() - 3 * Math.PI / 4;
	const angle = 2*Math.PI * Math.random();
	const length = Math.max(15, Math.round(40* Math.random()));
	const regress = Math.random();
	const evolution = (value) => value - regress;

	return new Vector(angle, length, evolution);
}

function INIT_POS() {
	const x = Math.round(innerWidth/2 + (Math.random() > 0.5 ? 1 : -1) * (innerWidth / 10)*Math.random());
	const y = Math.round(innerHeight/2 + (Math.random() > 0.5 ? 1 : -1) * (innerHeight / 8)*Math.random());

	return new Position(x,y);
}

function STOP_FACTOR(item) {
	return item.pos.y > innerHeight || item.pos.y < -100 || item.pos.x < -100 || item.pos.x > innerWidth + 100 || !item.moving;
}

class Item {
	constructor(initPos, vectors = [], img = null, stopFactor = STOP_FACTOR) {
		const scaleSizes = [0.3, 0.6, 1];

		this.img = img;
		this.pos = initPos;
		this.vectors = vectors;
		this.stopFactor = stopFactor;
		this.rotate = 0;
		this.scale = scaleSizes[Math.min(2, Math.floor(Math.random() * 10) % 3)];
		this.skew = 1;
		this.stepRotate = Math.random() * Math.PI / 10;

		this.width = this.img ? (this.img.width || this.img.naturalWidth || 100) : Math.round(Math.random() * 25); 
		this.height = this.img ? (this.img.height || this.img.naturalHeight || 50) : Math.round(Math.random() * 25);

		this.active = true;
	}

	move() {
		// а что делать, если все векторы стали 0?
		this.vectors.forEach(vec => this.pos = vec.getNextPos(this.pos));
		this.active = !this.stopFactor(this);
		// update states
		this.rotate += this.stepRotate;
	}

	draw(ctx) {
			this.move();
			// draw this
			ctx.save();
			ctx.translate(this.pos.x, this.pos.y);
			ctx.rotate(this.rotate);
			ctx.scale(this.scale, this.scale);
			if(this.img) {
				ctx.drawImage(this.img, -Math.round(this.width / 2), -Math.round(this.height / 2), this.width, this.height);
			} else {
				ctx.fillRect(-Math.round(this.width / 2), -Math.round(this.height / 2), this.width, this.height)
			}
			ctx.restore();			
	}

	get moving() {
		return this.vectors.some(vec => vec.length > 0)
	}

	drop() {
		delete this.img;
	}
}

/// New item
export default function(image) {
	return new Item(INIT_POS(), [RANDOM_VEC(), GRAVITY()], image);
}


// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// const count = 1000;

// function pop() {
// 	const items = [];

// 	for(let i=0; i<count; i++) {
// 		items.push(new Item(INIT_POS(), [RANDOM_VEC(), GRAVITY()]));
// 	}

// 	canvas.setAttribute('width', innerWidth);
// 	canvas.setAttribute('height', innerHeight);

// 	function draw() {
// 		let active = false;

// 		ctx.clearRect(0,0, innerWidth, innerHeight);
// 		items.forEach(item => {
// 			item.draw(ctx);
// 			active = active || item.active;
// 		});

// 		if(active) {
// 			requestAnimationFrame(draw);
// 		} else {
// 			console.log('END');
// 			pop()
// 		}
// 	}

// 	draw();
// }

// pop()


