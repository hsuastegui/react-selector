const options = [
	{id: 1, title:"Tension", name:"tension", fields:[
		{id:11, filter: "tension", text: "Soft", type: "radio"},
		{id:12, filter: "tension", text: "Medium", type: "radio"},
		{id:13, filter: "tension", text: "Firm", type: "radio"}
	]},
	{id: 2, title:"Type of Support", name:"support", fields:[
		{id: 21, filter: "support", text: "Pocket Sprung", type: "radio"},
		{id: 22, filter: "support", text: "Responsive Latex", type: "radio"},
		{id: 23, filter: "support", text: "Pocket Sprung & Memory Foam", type: "radio"},
		{id: 24, filter: "support", text: "Pocket Sprung & Reponsive Latex", type: "radio"},
	]},
	{id: 3, title:"Other Options", name:"option", fields:[
		{id: 31, filter: "hypo_allergenic", text: "Hypo-allergenic", type: "checkbox"},
		{id: 32, filter: "temperature_regulating", text: "Temperature Regulating", type: "checkbox"},
		{id: 33, filter: "chemical_free", text: "Chemical Free", type: "checkbox"},
		{id: 34, filter: "no_turn", text: "No Turn", type: "checkbox"},
	]},
	{id: 4, title:"Spring Options", name:"spring", fields:[
		{id: 41, filter: "hand_teased", text: "Hand Teased", type: "checkbox"},
		{id: 42, filter: "hand_tied_springs", text: "Hand Tied Springs", type: "checkbox"},
		{id: 43, filter: "anti_roll_binary_springs", text: "Anti-roll Binary Springs", type: "checkbox"},
	]}
];
export default options;