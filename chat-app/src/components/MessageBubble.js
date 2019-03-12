import React from "react";

function MessageBubble(props) {
	return (
		<div className="message-bubble-wrapper">
			<div className="image">
				<img src={null}/>
			</div>
			<div className="message-bubble">{props.message}</div>
		</div>
	);
}

export default MessageBubble;