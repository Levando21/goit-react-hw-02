/** @format */
import { useState } from "react";
import Feedback from "../feedback/Feedback";

const Option = () => {
	const [feed, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });
	const handlePushGood = () => {
		setFeedback({ ...feed, good: feed.good + 1 });
	};
	const handlePushNeutral = () => {
		setFeedback({ ...feed, neutral: feed.neutral + 1 });
	};
	const handlePushBad = () => {
		setFeedback({ ...feed, bad: feed.bad + 1 });
	};
	const handlePushReset = () => {
		setFeedback({ good: 0, bad: 0, neutral: 0 });
	};
	return (
		<div>
			<button onClick={handlePushGood}>Good</button>
			<button onClick={handlePushNeutral}>Neutral</button>
			<button onClick={handlePushBad}>Bad</button>
			<button onClick={handlePushReset}>Reset</button>

			<Feedback feedback={feed} />
		</div>
	);
};

export default Option;
