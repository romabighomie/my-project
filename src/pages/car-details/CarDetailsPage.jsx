import {useParams} from "react-router";

export default function CarDetailsPage() {
	const {carName} = useParams();
	
	return(
		<>
			<h3>Car details {carName}</h3>
		</>
	)
}