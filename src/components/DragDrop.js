import React, { useState } from "react";
import Box from "./Box";
import { useDrop } from "react-dnd";

const boxList = [
	{
		id: 1,
		box: <div>Box 1</div>,
	},
	{
		id: 2,
		box: <div>Box 2</div>,
	},
	{
		id: 3,
		box: <div>Box 3</div>,
	},
];

function DragDrop() {
	const [board, setBoard] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: "box",
		drop: (item) => addBox(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addBox = (id) => {
		console.log(id);
		const listBox = boxList.filter((box) => id === box.id);
		setBoard((board) => [...board, listBox[0]]);
	};

	return (
		<>
			<div className="pictures">
				{boxList.map((box) => {
					return (
						<Box key={box.id} id={box.id}>
							{box.box}
						</Box>
					);
				})}
			</div>
			<div className="board" ref={drop}>
				{board.map((box) => {
					return (
						<Box key={box.id} id={box.id}>
							{box.box}
						</Box>
					);
				})}
			</div>
		</>
	);
}

export default DragDrop;
