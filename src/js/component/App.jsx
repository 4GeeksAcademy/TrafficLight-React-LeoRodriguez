import React from "react";
import { useState } from "react";

const App = () => {

	const [ color, setColor ] = useState("");

	return (
		<div>
			<div className="top-traffic-light"></div>
			<div className="traffic-light">
			<div 
				onClick={() => setColor("red-light")}
				className={"red-light"+ ((color === "red-light") ? " selected" : "")}>

			</div>
			<div 
				onClick={() => setColor("yellow-light")}
				className={"yellow-light"+ ((color === "yellow-light") ? " selected" : "")}>

			</div>
			<div
				onClick={() => setColor("green-light")}
				className={"green-light"+ ((color === "green-light") ? " selected" : "")}>

			</div>
			</div>
		</div>
		
		
	);
}

export default App;
