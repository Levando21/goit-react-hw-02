/** @format */
import { useState } from "react";
const Button = function App() {
	const [counter, setCounter] = useState(0);
	const handleIncrement = () => {
		setCounter(counter + 2);
		console.log("iNCREMENTED", counter);
	};

	const handleDecrement = () => {
		setCounter(counter - 2);
		console.log("Decremented", counter);
	};

	return (
		<div>
			<button onClick={handleIncrement}>Increment</button>
			<p>{counter}</p>
			<button onClick={handleDecrement}>Decrement</button>
			<p>{counter}</p>
		</div>
	);
};

export default Button;
