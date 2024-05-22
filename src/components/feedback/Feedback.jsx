/** @format */

const Feedback = (give) => {
	return (
		<div
			className="feedback"
			id="myList">
			<ul className="feed-list">
				<li>Good:{give.goodButton} </li>
				<li>Neutral:{give.neutralButton} </li>
				<li>Bad: {give.badButton}</li>
				<li>Total:{give.totalProps}</li>
				<li>Positivity Rate: {give.relative}</li>
			</ul>
		</div>
	);
};

export default Feedback;
