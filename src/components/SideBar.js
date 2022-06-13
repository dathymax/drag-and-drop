import React from "react";
import InputElement from "./InputElement";
import SelectElement from "./SelectElement";

const boxList = [
	{
		id: 1,
		title: "Input element",
		element: <InputElement title />,
	},
	{
		id: 2,
		title: "Select element",
		element: <SelectElement title />,
	},
];

const SideBar = () => {
	return (
		<div>
			{boxList.map((box) => {
				return (
					<div key={box.id} id={box.id}>
						{box.element}
					</div>
				);
			})}
		</div>
	);
};

export default SideBar;
