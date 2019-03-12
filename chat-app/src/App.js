import React from 'react';

// Import Components
import SideNav from "./components/SideNav";
import ChatWindow from "./components/ChatWindow";


class App extends React.Component {

	constructor() {
		super();

		this.state = {
			allPeople: [],
			messages: [],
			messageInput: '',
		}

		this.renderMessage = this.renderMessage.bind(this);
		this.handleMessageInput = this.handleMessageInput.bind(this);
		this.onSubmitMessage = this.onSubmitMessage.bind(this);

	}

	componentDidMount() {
		fetch("https://uifaces.co/api", {
				headers: {
				 	'X-API-KEY': '9ef9c5a04696dabb2ca39334622739'
				}
			}
		)
		.then(responce => responce.json())
		.then( people => {
			this.setState({ allPeople: people})
		})
	}


	// This renders the message
	renderMessage(messageContent) {
		// return ( <MessageBubble message="merge"/> );
		// this.setState({message: message})
		// const {messageBubble} = <MessageBubble/>
		// this.setState
		// this.setState(({ messages }) => ({
	 //    messages: messages.concat({ // concat returns a new array
	 //      message
	 //    })

	 	messageContent !== "" && this.setState( ({messages}) => {
			return {
				messages: messages.concat({
					messageContent
				})
			}
		});
	}


	// this handle the messgae input
	handleMessageInput(event) {
		this.setState({ messageInput: event.target.value})
	}

	// This handle the messge after it was submited
	onSubmitMessage(event) {
		event.preventDefault();
		// console.log(this.state.messageInput);
		this.setState( { messageInput: "" });
		this.renderMessage(this.state.messageInput);
	} 


	render() {

		return(	
			<div className="chat-app">
				<div className="container-fluid">
					<div className="row ">
						<SideNav 
							allPeople={this.state.allPeople}
						/>
						<ChatWindow 
							messages={this.state.messages}
							renderMessage={this.renderMessage}
							handleMessageInput={this.handleMessageInput}
							onSubmitMessage={this.onSubmitMessage}
							messageInput={this.state.messageInput}
						/>
					</div>
				</div>
			</div>
			
		)
	}

}


export default App;