/** @format */

const Option = (props) => {
	return (
		<div>
			<button onClick={props.handlePushGood}>Good</button>
			<button onClick={props.handlePushNeutral}>Neutral</button>
			<button onClick={props.handlePushBad}>Bad</button>
			<button onClick={props.handlePushReset}>Reset</button>
		</div>
	);
};

export default Option;
