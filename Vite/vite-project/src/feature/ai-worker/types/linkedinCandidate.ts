export interface LinkedinInfo {
	id: number;
	public_identifier: string;
	linkedin_profile_url: null | string;
	first_name: null | string;
	last_name: null | string;
	occupation: null | string;
	country: null | string;
	country_full_name: null | string;
	city: null | string;
	state: null | string;
	email: null | string;
	mobile_number: null | string;
	utc_date_created: null | string;
	utc_date_updated: null | string;
	isScored?: boolean;
}