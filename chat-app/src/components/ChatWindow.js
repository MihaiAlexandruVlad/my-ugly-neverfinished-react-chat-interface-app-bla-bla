import React from "react";
import MessageBubble from "./MessageBubble";
import TopNav from "./TopNav";
import TypeBox from "./TypeBox";

function ChatWindow(props) {
	const messages  = props.messages;
	const renderedMessages = messages.map( message => {
		console.log(message)
		return ( <MessageBubble message={message.messageContent}  />);
	})

	return(
		<div className="chat-window col-md-10">
			<TopNav />
			{renderedMessages}
			<TypeBox 
				renderMessage={props.renderMessage} 
				handleMessageInput={props.handleMessageInput}
				onSubmitMessage={props.onSubmitMessage}
				messageInput={props.messageInput}
			/>
		</div>
	)
}


export default ChatWindow;