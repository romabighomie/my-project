import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetchCarsApi() {
	const [carData, setCarData] = useState([]);
	
	useEffect(()=> {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://65db52f53ea883a152918606.mockapi.io/api/v1/cars");
				setCarData(response.data);
			}
			catch(error) {
				console.error(error);
			}
		}
		
		fetchData();
	}, []);
	
	return {carData};
};