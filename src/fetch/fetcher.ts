

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

const fetcher = async (input: RequestInfo | URL, init?: RequestInit, internal?: boolean, autoContent?: boolean) => {
	const apiUrl = internal && process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : API_URL;
	const baseUrl = typeof input === 'string' && input.startsWith('http') ? '' : apiUrl;
	const inputWithBaseUrl = typeof input === 'string' ? baseUrl + input : input;

	const _init: RequestInit = {
		credentials: 'same-origin',
		...init,
		headers: {
			Accept: 'application/json, text/plain, */*',
			...(!autoContent ? { 'Content-Type': 'application/json' } : {}),
			...init?.headers,
		},
	};

	return fetch(inputWithBaseUrl, _init).then((res) => {
		return res;
	});
};

export default fetcher;
