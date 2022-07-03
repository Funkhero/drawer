import Brush from './brush';

export default class Eraser extends Brush {
	draw(x, y) {
		this.ctx.strokeStyle = 'white';
		this.ctx.lineTo(x, y);
		this.ctx.stroke();
	}
}
