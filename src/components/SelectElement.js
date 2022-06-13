import React from "react";
import { useDrag } from "react-dnd";

const SelectElement = ({ id, title }) => {
	const [, drag] = useDrag(() => ({
		type: "select",
		item: { id: id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div id={id} ref={drag}>
			{title ? (
				"Select element"
			) : (
				<select name="" id="">
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
				</select>
			)}
		</div>
	);
};

export default SelectElement;
