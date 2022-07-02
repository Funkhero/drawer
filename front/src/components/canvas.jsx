import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import Brush from '../tools/brush';
import toolState from '../store/tools';
import canvasState from '../store/canvas';
import '../styles/canvas.scss';

const Canvas = observer(() => {
	const canvasRef = useRef();
	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasRef.current));
	}, []);

	return (
		<div className="canvas">
			<canvas
				ref={ canvasRef }
				width={ 600 }
				height={ 400 }
			/>
		</div>
	);
});

export default Canvas;
