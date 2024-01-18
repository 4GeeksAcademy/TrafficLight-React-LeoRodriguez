import React from "react";
import { useState } from "react";

const Home = () => {
	const [ color, setColor ] = useState("");


	return (
		<div>
			<div className="top-traffic-light"></div>
			<div className="traffic-light">
			<div className="red-light" onClick={() => setColor("selected")}>{color}</div>
			<div className="yellow-light" onClick={() => setColor("selected")}>{color}</div>
			<div className="green-light" onClick={() => setColor("selected")}>{color}</div>
			</div>
		</div>
		
		
	);

}



export default Home;
