import axios from '../utils/axios';
import { LINKEDIN_CANDIDATE_LIST } from '../config-global';

export const searchProxyCandidate = (body: { search: string; page_number: number; page_size?: number }) => {
	return new Promise(async (resolve, reject) => {
		await axios
			.post(`${LINKEDIN_CANDIDATE_LIST}/search_proxy_candidate`, body)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				console.error('#error: ', error);
				reject(error);
			});
	});
};
