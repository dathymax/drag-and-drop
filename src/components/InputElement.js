import React from "react";
import { useDrag } from "react-dnd";

const InputElement = ({ id, title }) => {
	const [, drag] = useDrag(() => ({
		type: "input",
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div id={id} ref={drag}>
			{title ? "Input element" : <input type="text" />}
		</div>
	);
};

export default InputElement;
