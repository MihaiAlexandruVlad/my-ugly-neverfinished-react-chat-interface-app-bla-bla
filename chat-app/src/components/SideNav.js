import React from "react";
import Person from "./Person";

function SideNav(props) {

	// console.log("nav",props.allPeople);

	const allPeople = props.allPeople;

	// console.warn(allPeople);

	const person = allPeople.map( person => {
		return (
			<Person
				key={person.name}
				photo={person.photo}
				name={person.name}
			/>
		)
	})

	return(
		<aside className="side-nav col-md-2">	
			{person}
		</aside>
	)


}


export default SideNav;