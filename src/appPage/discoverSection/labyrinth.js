/**
 * Draw labyrinth walkthrough in canvas
 */

class LabyrinthDrawer {
	constructor(isMobile=false) {
		this.isMobile = isMobile;
		this.__config = {
			speed: 40,

			lineColorFrom: '#000851',
			lineColorTo: '#ff3b00',

			streetWidth: 20,
			streetWidthMobile: 10,
			mapOutColor: 'rgba(0,6,74,.6)',
			mapInColor: 'rgba(255,255,255,.6)',

			shopColor: 'rgba(255,255,255,.2)',
			activeShopColor: '#ff3b00',
			shopBoxSize: 60,
			shopBoxSizeMobile: 40,
			locationImage: null
		};
		this.clear();
		this.draw();
	}

	clear() {
		this.ref = null;
		this.canvas = null;
		this.ctx = null;
	}

	equip(ref) {
		this.ref = ref;
	}

	executeRef() {
		if(!this.canvas && this.ref && this.ref.current) {
			this.canvas = this.ref.current;
			this.ctx = this.ref.current.getContext('2d');
		}
	}

	/**
	 * Box size (temporary stub)
	 * @param  {Number} wid canvas width
	 * @param  {Number} hei canvas height
	 */
	drawStub(wid, hei) {
		this.ctx.save();
			this.ctx.strokeStyle = 'red';
			this.ctx.lineWidth = 2;
			this.ctx.beginPath();
			this.ctx.moveTo(0,0);
			this.ctx.lineTo(wid,hei);
			this.ctx.moveTo(wid,0);
			this.ctx.lineTo(0,hei);
			this.ctx.stroke();
			this.ctx.closePath();
		this.ctx.restore();		
	}

	/**
	 * Create map road gradient for roads
	 * @param  {Number} wid map width
	 * @param  {Number} hei map height
	 * @return {CanvasGradient} Radial gradient
	 */
	getMapGradient(wid, hei) {
		const name = `__mapGradient_${wid}x${hei}`;

		if(!this[name]) {
			const r1 = Math.round(0.2*wid/2);
			const r2 = Math.round(0.8*wid/2);
			const cx = Math.round(wid/2);
			const cy = Math.round(hei/2);

			this[name] = this.ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
			this[name].addColorStop(0, this.config.mapInColor);
			this[name].addColorStop(0.9, this.config.mapOutColor);
		}

		return this[name];
	}

	/**
	 * Create map road gradient for roads
	 * @param  {Number} wid map width
	 * @param  {Number} hei map height
	 * @return {CanvasGradient} Radial gradient
	 */
	getClientLineGradient(wid, hei) {
		const name = `__clientLineGradient_${wid}x${hei}`;

		if(!this[name]) {
			const r1 = Math.round(0.8*wid/2);
			const r2 = Math.round(0.95*wid/2);
			const cx = Math.round(wid/2);
			const cy = Math.round(hei/2);

			this[name] = this.ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
			this[name].addColorStop(0, this.config.lineColorTo);
			this[name].addColorStop(0.9, this.config.lineColorFrom);
		}

		return this[name];
	}

	/**
	 * Get shop size
	 * @return {Number} Value
	 */
	get shopBoxSize() {
		return this.isMobile ? this.config.shopBoxSizeMobile : this.config.shopBoxSize;
	}

	/**
	 * Draw shop box 
	 * @param  {Number} x Shop center
	 * @param  {Number} y Shop center y
	 * @param  {Boolean} main Active shope
	 */
	drawShop(x, y, main = false) {

		const ox = Math.round(x-this.shopBoxSize/2);
		const oy = Math.round(y-this.shopBoxSize/2);
		const r = Math.round(this.shopBoxSize/10);
		const h = this.shopBoxSize;
		const w = this.shopBoxSize;

		this.ctx.fillStyle = main ? this.config.activeShopColor : this.config.shopColor;
		this.ctx.beginPath();
		this.ctx.moveTo(ox+r, oy);
		this.ctx.arcTo(ox+w,oy,ox+w,oy+h,r);
		this.ctx.arcTo(ox+w,oy+h,ox,oy+h,r);
		this.ctx.arcTo(ox,oy+h,ox,oy,r);
		this.ctx.arcTo(ox,oy,ox+w,oy,r);
		this.ctx.closePath();
		this.ctx.fill();

		// loads image
		if(this.config.locationImage && !this.__locationImage) {
			const img = new Image;

			img.src=this.config.locationImage;
			this.__locationImage = true;
			img.onload = () => {
				this.__locationImage = img;
			}
		}

		if(this.__locationImage && typeof this.__locationImage != 'boolean') {
			const liWidth = this.__locationImage.width;
			const liHeight = this.__locationImage.height;
			const lix = x-Math.round(liWidth/2);
			const liy = y-Math.round(liHeight/2);
			this.ctx.save();
			this.ctx.globalAlpha = main ? 1 : 0.5;
			this.ctx.drawImage(this.__locationImage, lix, liy, liWidth, liHeight);
			this.ctx.restore();
		}
	}

	/**
	 * Draw map 
	 * @param  {Number} wid map width
	 * @param  {Number} hei map height
	 */
	drawMap(wid, hei) {
		const nodes = this.getNodes(wid, hei);
		const vLine = (x, offsetY) => {
			this.ctx.moveTo(x, offsetY);
			this.ctx.lineTo(x, hei - 2*offsetY);
		}

		this.ctx.save();
			this.ctx.lineWidth = this.isMobile ? this.config.streetWidthMobile : this.config.streetWidth;
			this.ctx.strokeStyle = this.getMapGradient(wid, hei);
			this.ctx.beginPath();
			// vertical lines
			vLine(nodes['1x1'].x, 20);
			vLine(nodes['2x1'].x, 10);
			vLine(nodes['3x1'].x, 10);
			vLine(nodes['4x1'].x, 10);

			// short left line
			this.ctx.moveTo(0, nodes['1x1'].y);
			this.ctx.lineTo(nodes['1x1'].x, nodes['1x1'].y);
			// longer right line
			this.ctx.moveTo(nodes['2x1'].x, nodes['2x1'].y);
			this.ctx.lineTo(wid, Math.round(hei/3));
			// long bottom line
			this.ctx.moveTo(0, nodes['1x2'].y);
			this.ctx.lineTo(wid, nodes['4x2'].y);
			this.ctx.closePath();
			// draw
			this.ctx.stroke();
		// restore canvas context
		this.ctx.restore();
	}

	/**
	 * Draw shops
	 * @param  {Number} wid canvas width
	 * @param  {Number} hei canvas height
	 * @param  {Number} progress Float percent progress 0..1
	 */
	drawShops(wid, hei, progress=0) {
		const nodes = this.getNodes(wid, hei);

		this.ctx.save();
			// draw shops
			this.drawShop(nodes.shop1.x, nodes.shop1.y);
			this.drawShop(nodes.shop2.x, nodes.shop2.y);
			this.drawShop(nodes.shop3.x, nodes.shop3.y);
			this.drawShop(nodes.shop4.x, nodes.shop4.y);
			this.drawShop(nodes.shopMain.x, nodes.shopMain.y, progress == 1);
		this.ctx.restore();
	}

	/**
	 * Draw customer line animation
	 * @param  {Number} wid canvas width
	 * @param  {Number} hei canvas height
	 * @return {float}      Percentage of animation finishing
	 */
	drawLine(wid, hei) {
		this.__lineProgress = this.__lineProgress || 0;

		const nodes = this.getNodes(wid, hei);
		const progress = this.__lineProgress;
		const line = (x1, y1, x2, y2, progress) => {
			const _progress = progress < 0 ? 0 : Math.min(1, progress);

			if(_progress > 0) {
				this.ctx.moveTo(x1,y1);
				this.ctx.lineTo(Math.round(x1 + (x2-x1)*_progress), Math.round(y1 + (y2-y1)*_progress));
			}
		};

		this.ctx.save();
			this.ctx.lineWidth = this.isMobile ? this.config.streetWidthMobile : this.config.streetWidth;
			this.ctx.lineCap = "round";
			this.ctx.strokeStyle = this.getClientLineGradient(wid, hei);
			this.ctx.beginPath();
			line(wid, nodes['4x2'].y, nodes['4x2'].x, nodes['4x2'].y, progress/10);
			line(nodes['4x2'].x, nodes['4x2'].y, nodes['4x1'].x, nodes['4x1'].y, (progress-10)/10);
			line(nodes['4x1'].x, nodes['4x1'].y, nodes['3x1'].x, nodes['3x1'].y, (progress-20)/10);
			line(nodes['3x1'].x, nodes['3x1'].y, nodes['2x1'].x, nodes['2x1'].y, (progress-30)/10);
			line(nodes['2x1'].x, nodes['2x1'].y, nodes['2x2'].x, nodes['2x2'].y, (progress-40)/10);
			line(nodes['2x2'].x, nodes['2x2'].y, nodes.shopMain.x, nodes['2x2'].y, (progress-50)/10);
			line(nodes.shopMain.x, nodes['2x2'].y, nodes.shopMain.x, nodes.shopMain.y, (progress-60)/10);
			this.ctx.closePath();
			this.ctx.stroke();
		this.ctx.restore();

		this.__lineProgress++;
		if(this.__lineProgress > 140) {
			this.__lineProgress = 0;
		}

		return Math.min(1, this.__lineProgress / 70);
	}

	/**
	 * Get main nodes (with caching)
	 * @param  {Number} wid map width
	 * @param  {Number} hei map height
	 * @return {Object} Nodes object data
	 */
	getNodes(wid, hei) {
		const checker = `${wid}x${hei}`;

		this.__nodes = this.__nodes && this.__nodes._check === checker
			? this.__nodes
			: {
				_check: checker,
				'1x1': {x: Math.round(wid/3.3), y: Math.round(hei/3)},
				'1x2': {x: Math.round(wid/3.3), y: Math.round(2*hei/3)},
				'2x1': {x: Math.round(wid/2.5), y: Math.round(hei/3)},
				'2x2': {x: Math.round(wid/2.5), y: Math.round(2*hei/3)},
				'3x1': {x: Math.round(wid/1.5), y: Math.round(hei/3)},
				'3x2': {x: Math.round(wid/1.5), y: Math.round(2*hei/3)},
				'4x1': {x: Math.round(wid/1.2), y: Math.round(hei/3)},
				'4x2': {x: Math.round(wid/1.2), y: Math.round(2*hei/3)},

				shop1: {
					x: Math.round(wid/3.3 - 1.2*this.shopBoxSize), 
					y: Math.round(hei/3 - 1.2*this.shopBoxSize)
				},
				shop2: {
					x: Math.round(wid/3.3 - 1.2*this.shopBoxSize), 
					y: Math.round(2*hei/3 + 1.2*this.shopBoxSize)
				},
				shop3: {
					x: Math.round(wid/2.5 + (wid/1.5-wid/2.5)/2), 
					y: Math.round(2*hei/3 + 1.8*this.shopBoxSize)
				},
				shop4: {
					x: Math.round(2*wid/3 + 1.2*this.shopBoxSize), 
					y: Math.round(2*hei/3 + 1.2*this.shopBoxSize)
				},
				shopMain: {
					x: Math.round(wid/2.5 + (wid/1.5-wid/2.5)/2),
					y: Math.round(hei/3 + hei/6)
				},

			};

		return this.__nodes;
	}

	/**
	 * Draw all animations
	 */
	draw() {
		// draw sync timer
		this.__syncTime = this.__syncTime || Date.now();
		// if canvas didn't install - install it
		this.executeRef();
		// if canvas missed - find it again
		if(this.canvas && !document.body.contains(this.canvas)) {
			this.clear();
		}
		// draw check
		if(this.ctx && (Date.now() - this.__syncTime >= this.config.speed)) {
			const wid = this.canvas.width;
			const hei = this.canvas.height;

			this.ctx.clearRect(0,0, wid, hei);
			this.drawMap(wid, hei);

			const progress = this.drawLine(wid, hei);
			this.drawShops(wid, hei, progress);
			// this.drawStub(wid, hei);
			this.__syncTime = 0;
		}

		requestAnimationFrame(this.draw.bind(this));
	}

	get config() {
		return this.__config;
	}

	set config(value) {
		Object.assign(this.__config, value);
	}
}

const labyrinth = new LabyrinthDrawer();

export default {
	install: function(ref, config, isMobile=false) {
		labyrinth.config = config;
		labyrinth.isMobile = Boolean(isMobile);
		labyrinth.equip(ref);
	}, 

	uninstall: function() {
		labyrinth.clear();
	}
}