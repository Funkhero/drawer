import React from 'react';
import '../styles/toolbar.scss';

import toolState from '../store/tools';
import canvasState from '../store/canvas';

import Brush from '../tools/brush';
import Rect from '../tools/rect';

const Toolbar = () => {
	function changeColor(event) {
	}
	return (
		<div className="toolbar">
			<button className="toolbar__btn brush" onClick={ () => toolState.setTool(new Brush(canvasState.canvas)) } />
			<button className="toolbar__btn rect" onClick={ () => toolState.setTool(new Rect(canvasState.canvas)) } />
			<button className="toolbar__btn circle" />
			<button className="toolbar__btn eraser" />
			<button className="toolbar__btn line" />
			<input onChange={e => changeColor(e)} style={{ marginLeft:10 }} type="color" />
			<button className="toolbar__btn undo" />
			<button className="toolbar__btn redo" />
			<button className="toolbar__btn save" />
		</div>
	);
};

export default Toolbar;
