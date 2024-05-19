/** @format */

const Feedback = ({ feedback }) => {
	const { good, neutral, bad } = feedback;

	const allZero = good === 0 && neutral === 0 && bad === 0;

	return (
		<div
			className="feedback"
			id="myList">
			{allZero ? (
				<p>No feedback yet</p>
			) : (
				<ul>
					<li>Good: {good}</li>
					<li>Neutral: {neutral}</li>
					<li>Bad: {bad}</li>
					<li>Total: {good + bad + neutral}</li>
					<li>Relativness: {Math.round((good / (good + bad + neutral)) * 100)}%</li>
				</ul>
			)}
		</div>
	);
};

export default Feedback;
