import React, { useState } from "react";
import { useDrop } from "react-dnd";
import SideBar from "./SideBar";
import InputElement from "./InputElement";
import SelectElement from "./SelectElement";

const boxList = [
	{
		id: 1,
		title: "Input element",
		element: <InputElement />,
	},
	{
		id: 2,
		title: "Select element",
		element: <SelectElement />,
	},
];

function DragDrop() {
	const [board, setBoard] = useState([]);

	const [, drop] = useDrop(() => ({
		accept: ["input", "select", "box"],
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
			<div className="board" ref={drop}>
				{board.map((box) => {
					return (
						<div key={box.id} id={box.id}>
							{box?.element}
						</div>
					);
				})}
			</div>
			<SideBar />
		</>
	);
}

export default DragDrop;
