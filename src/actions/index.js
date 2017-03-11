import * as types from './types';
import axios from 'axios';

const ROOT_URL = "http://api.crossref.org/works";

export function fetchResults(query) {
	const url = `${ROOT_URL}?query=${query}&rows=10`;
	const request = axios.get(url);
	return {
		type: types.FETCH_RESULTS,
		payload: request
	};
}

export function fetchMoreResults(query, page) {
	const url = `${ROOT_URL}?query=${query}&rows=10&offset=${10*(page-1)}`;
	const request = axios.get(url);
	return {
		type: types.FETCH_MORE_RESULTS,
		payload: request
	};
}

export function trainClassifier(data) {
	return {
		type: types.TRAIN_CLASSIFIER,
		data
	};
}