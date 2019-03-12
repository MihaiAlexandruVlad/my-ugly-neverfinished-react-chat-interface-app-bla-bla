import React from "react";

function Person(props) {

	return(
		<div className="person">
			<div className="image-wrapper">
				<img className="img-responsive"src={props.photo}/>
			</div>
			<span>{props.name}</span>
		</div>
	)

}


export default Person;