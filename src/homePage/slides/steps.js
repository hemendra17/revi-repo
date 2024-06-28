const topSlidesCount = 10;
const firstSlidesHeight = 858;
const lastSlideHeight = 1815;

const output = {};

for(let i=0; i < topSlidesCount; i++) {
	output[`slide${i < 9 ? 0 : ''}${i+1}`] = [
		i == 0 ? 0 : i*firstSlidesHeight + 1, 
		i == topSlidesCount-1 ? i*firstSlidesHeight + lastSlideHeight : (i+1)*firstSlidesHeight
	];
}

export default output;