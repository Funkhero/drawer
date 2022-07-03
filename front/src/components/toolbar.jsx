import React from 'react';
import '../styles/toolbar.scss';

import toolState from '../store/tools';
import canvasState from '../store/canvas';

import Brush from '../tools/brush';
import Rect from '../tools/rect';
import Circle from '../tools/circle';
import Eraser from '../tools/eraser';
import Line from '../tools/line';

const Toolbar = () => {
	const changeColor = e => {
		toolState.setStrokeColor(e.target.value);
		toolState.setFillColor(e.target.value);
	}

	const download = () => {
		const dataUrl = canvasState.canvas.toDataURL();
		const a = document.createElement('a');
		a.href = dataUrl;
		a.download = `${new Date().getDate()}.jpg`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	return (
		<div className="toolbar">
			<button className="toolbar__btn brush" onClick={ () => toolState.setTool(new Brush(canvasState.canvas)) } />
			<button className="toolbar__btn rect" onClick={ () => toolState.setTool(new Rect(canvasState.canvas)) } />
			<button className="toolbar__btn circle" onClick={ () => toolState.setTool(new Circle(canvasState.canvas)) } />
			<button className="toolbar__btn eraser" onClick={ () => toolState.setTool(new Eraser(canvasState.canvas)) } />
			<button className="toolbar__btn line" onClick={ () => toolState.setTool(new Line(canvasState.canvas)) } />
			<input onChange={ e => changeColor(e) } style={{ marginLeft:10 }} type="color" />
			<button className="toolbar__btn undo" onClick={ () => canvasState.undo() }/>
			<button className="toolbar__btn redo" onClick={ () => canvasState.redo() }/>
			<button className="toolbar__btn save" onClick={ () => download() } />
		</div>
	);
};

export default Toolbar;
