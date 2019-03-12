import React from "react";

function TypeBox(props) {


	return(
		<div className="type-box" onSubmit={props.onSubmitMessage}>
			<form>
				<input 
					type="text"
					name="message"
					placeholder="Your Message"
					value={props.messageInput}
					onChange={props.handleMessageInput}
				/>
			</form>
		</div>
	)
}


export default TypeBox;