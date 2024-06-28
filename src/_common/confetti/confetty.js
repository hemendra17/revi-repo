import createItem from './confetti-item-v2.js';

/**
 * Class, provides confetty falling
 */
export default class Confetty {
	/**
	 * Create confetty handler
	 * @param  {Object} config Configuration
	 * @return {Confetty}        Instance
	 */
	constructor(config={}) {
		this.config = config;
		this.detachCanvas();
		// active vars
		this.images = [];
		this.data = [];
		this.traectories = ['linear', 'sin', 'cos', 'random'];
		// load data
		this.imgLoadedPromise = this.load();
	}

	/**
	 * Set active canvas
	 * @param  {HTMLCanvas} canvas Canvas element
	 */
	attachCanvas(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
	}

	/**
	 * Detach canvas and pause
	 */
	detachCanvas() {
		this.canvas = null;
		this.ctx = null;
	}

	/**
	 * Preload assets 
	 * @return {Promise} Images loading promise
	 */
	load() {
		const imgs = this.config.confetties.map(v=>{const img = new Image(); img.src = v; return img;});
		const imgsLoaded = imgs.map(v=>new Promise((res, rej) => {
			v.onload = function() {
				res(v);
			}
		}));

		// waiting for images will loaded
		return Promise.all(imgsLoaded).then(images => {
			this.images = images;
		});
	}

	/**
	 * Run confetty falling
	 */
	start() {
		this.imgLoadedPromise.then(() => setTimeout(() => this.draw(), this.config.delayBeforeConfetty || 0));
	}

	/**
	 * Get next image of confetti
	 * @return {HTMLImgElement} Image element
	 */
	getNextImage() {
		const totalImages = this.images.length;
		const currentImage = this.images.current || 0;

		this.images.current = currentImage + 1;
		if(this.images.current > this.images.length - 1) {
			this.images.current = 0;
		}

		return this.images[this.images.current];
	}

	/**
	 * Recursive drawing confetty
	 */
	draw() {
		if(this.data.length < Math.min(3, this.config.countOfConfeties/10)) {
			while(this.data.length < this.config.countOfConfeties) {
				this.data.push(createItem(this.getNextImage()));
			}
		}

		requestAnimationFrame(() => {
			// if canvas was detached - pause dtrawing
			if(this.ctx) {
				this.ctx.clearRect(0,0, innerWidth, innerHeight);
				this.data.forEach(item => {
					item.draw(this.ctx);
				});

				this.data.forEach(item => !item.active && item.drop());
				this.data = this.data.filter(item => item.active);
			}
			
			this.draw();
		});		
	}
}