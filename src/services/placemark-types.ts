export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	_id: string;
}

export interface LoggedInUser {
	email: string;
	token: string;
	_id: string;
}

export interface Placemark {
	userid: string;
	name: string;
	categoryid: string;
	description: string;
	location: string;
	weather: string;
	image: string;
	_id: string;
}

export interface Category {
	name: string;
	count: number;
	_id: string;
}