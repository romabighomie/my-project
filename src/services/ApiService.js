import axios from "axios";

const ApiService = {
	baseUrl: "https://65db52f53ea883a152918606.mockapi.io/api/v1/",
	
	get(endpoint) {
		return axios.get(`${this.baseUrl}/${endpoint}`);
	}
}

export default ApiService;