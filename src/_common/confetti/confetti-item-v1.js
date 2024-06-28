class Item {
	constructor(img) {
		const VERTICAL = 200;
		const STEPS = 50;
		const traectories = ['linear', 'sin', 'cos', 'random'];

		this.img = img;
		// init data
		this.state = 0;
		// this.x = Math.round(innerWidth/2 + this.rand() * (innerWidth / 8));
		this.x = Math.round(innerWidth/2);
		this.y = VERTICAL + this.rand() * Math.round(VERTICAL / 10);
		this.scale = 1;
		this.rotate = 0;

		// params for start
		this.toUpperPoint = {
			fromX: this.x,
			fromY: this.y,
			toX: Math.max(0, Math.min(innerWidth, this.x + this.rand() * Math.round(Math.random() * innerWidth/4))),
			toY: this.y - Math.round(VERTICAL * Math.random()),
			steps: Math.max(1, Math.round(Math.random() * STEPS))
		};		
		// params for start
		this.toStartPoint = {
			fromX: this.toUpperPoint.toX,
			fromY: this.toUpperPoint.toY,
			toX: Math.max(0, Math.min(innerWidth, this.toUpperPoint.toX + this.rand() * Math.round(Math.random() * innerWidth/2))),
			toY: this.y,
			steps: 2*Math.max(5, Math.round(Math.random() * STEPS))
		};
		// falling params
		
		this.falling = {
			steps: 5*Math.max(1, Math.round(Math.random() * STEPS)),
			traectory: traectories[Math.round((traectories.length-1)*Math.random())],
			speed: 2 + Math.round(10*Math.random()),
			amplitude: Math.round(30*Math.random()),
		};
	}

	rand() {
		return Math.random() > 0.5 ? 1 : -1;
	}

	moveMiddlePoint(params, next = () => {}) {
		// init step
		if(!('step' in params)) {
			params.step = 0;
		}

		const t = params.step/params.steps;

		this.x = Math.round(params.fromX + (params.toX - params.fromX)*t);
		this.y = Math.round(params.fromY + (params.toY - params.fromY)*t);
		params.step++;

		return params.steps <= params.step;
	}

	moveTraectory(item) {
		const angle = Math.PI*6*this.y/innerHeight;

		// пока будут спускаться по линейке
		this.y += item.speed;
		switch(item.traectory) {
			case 'sin': 
				this.x = item.initX + item.amplitude * Math.sin(angle);
				break;
			case 'cos': 
				this.x = item.initX + item.amplitude * Math.cos(angle);
				break;
			case 'random': 
				this.x += (Math.random() > 0.5 ? 1 : -1) * item.amplitude/10;
				break;
		}
		this.x = Math.round(this.x);
		this.scale = Math.max(0.5, this.scale - 0.01);
		this.rotate = this.rotate + angle/100;
	}

	draw(ctx) {
		if(this.img) {
			switch (this.state) {
				// go to upper point
				case 0:
					if(this.moveMiddlePoint(this.toUpperPoint)) {
						this.state = 1;
					}
					break;
				// go to start point
				case 1:
					if(this.moveMiddlePoint(this.toStartPoint)) {
						this.state = 2;
					}
					break;
				// start to falling
				case 2:
					if(!('initX' in this.falling)) {
						this.falling.initX = this.x;
					}
					this.moveTraectory(this.falling);
					break;
			}
	
			// draw
			const width = this.img.width || this.img.naturalWidth || 100;
			const height = this.img.height || this.img.naturalHeight || 50;
			// draw this
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.rotate);
			ctx.scale(this.scale, this.scale);
			ctx.drawImage(this.img, -Math.round(width / 2), -Math.round(height / 2), width, height);
			ctx.restore();		
		}
	}

	drop() {
		delete this.img;
	}

	get active() {
		return this.y < (innerHeight + 50);
	}
}


/// Export of new item
export default function(image) {
	return new Item(image);
}