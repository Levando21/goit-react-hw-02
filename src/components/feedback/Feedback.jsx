/** @format */

import Notification from "../notification/Notification";
import { useEffect } from "react";

const Feedback = ({ feedback }) => {
	const { good, neutral, bad } = feedback;

	const totalFeedback = good + neutral + bad;
	const positiveRate = totalFeedback
		? Math.round((good / totalFeedback) * 100)
		: 0;

	useEffect(() => {
		const newFeed = document.querySelector(".feed-list");
		if (totalFeedback === 0) {
			newFeed.style.display = "none";
		} else {
			newFeed.style.display = "block";
		}
	}, [totalFeedback]);

	return (
		<div
			className="feedback"
			id="myList">
			<Notification text="No feedback yet" />

			<ul className="feed-list">
				<li>Good: {good}</li>
				<li>Neutral: {neutral}</li>
				<li>Bad: {bad}</li>
				<li>Total: {totalFeedback}</li>
				<li>Positivity Rate: {positiveRate}%</li>
			</ul>
		</div>
	);
};

export default Feedback;
