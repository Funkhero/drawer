import Rect from './rect';

export default class Circle extends Rect {
	mouseMoveHandler(e) {
		if (this.mouseDown) {
			const currentX = e.pageX - e.target.offsetLeft;
			const currentY = e.pageY - e.target.offsetTop;
			this.width = currentX - this.startX;
			this.height = currentY - this.startY;
			let r = Math.sqrt(this.width ** 2 + this.height ** 2);
			this.draw(this.startX, this.startY, r);
		}
	}

	draw(x, y, r) {
		const img = new Image();
		img.src = this.saved;
		img.onload = () => {
			this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
			this.ctx.beginPath();
			this.ctx.arc(x, y, r, 0, 2 * Math.PI);
			this.ctx.fill();
			this.ctx.stroke();
		}
	}
}