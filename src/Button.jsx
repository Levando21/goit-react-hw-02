/** @format */

const Button = function App() {
	let counter = 0;
	const handleIncrement = () => {
		counter++;
		console.log("iNCREMENTED", counter);
	};

	const handleDecrement = () => {
		counter--;
		console.log("Decremented", counter);
	};

	return (
		<div>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};

export default Button;
