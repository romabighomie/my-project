import {useEffect, useState} from "react";
import ApiService from "services/ApiService";

export default function useFetchApi(url) {
	const [data, setData] = useState([]);
	
	useEffect(()=> {
		const fetchData = async () => {
			try {
				const response = await ApiService.get(url);
				setData(response.data);
			}
			catch(error) {
				console.error(error);
			}
		}
		
		fetchData();
	}, [url]);
	
	return {data};
};