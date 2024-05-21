/** @format */

//import { useState } from "react";

import "./App.css";

import Description from "./components/description/Description";
import Options from "./components/options/Options";

function App() {
	return (
		<div className="app-style">
			<Description />
			<Options />
		</div>
	);
}

export default App;
