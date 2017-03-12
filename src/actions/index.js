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

export function fetchResultsThunk(query) {
	return (dispatch, getState) => {
		const applyUrl = `${ROOT_URL}?query=${query}&rows=100`;
		const { classifier } = getState();
		return axios.get(applyUrl).then(
			response => dispatch(classifyResults(response, classifier))
		);
	}
}

export function classifyResults(data, classifier) {
	return {
		type: types.CLASSIFY_RESULTS,
		payload: data,
		classifier
	};
}

export function selectCategory(category) {
	return {
		type: types.DISPLAY_CATEGORY,
		category
	};
}