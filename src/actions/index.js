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

export function trainClassifier(text, category) {
	return {
		type: types.TRAIN_CLASSIFIER,
		text,
		category
	};
}

export function applyMode() {
	return {
		type: types.APPLY_MODE
	};
}

export function applyFetch(query) {
	const applyUrl = `${ROOT_URL}?query=${query}&rows=100`;
	const applyrequest = axios.get(applyUrl);
	return {
		type: types.APPLY_FETCH,
		payload: applyrequest
	}
}