import { ResponseData } from "@/type";

export const parseResponseBody = <T>(resp: Response) => {
	try {
		if (!resp.ok) {
			throw new Error('Failed to fetch data');
		}
		return resp.json() as Promise<T>;
	} catch (error) {
		console.error(error);
		return Promise.resolve({ responseData: undefined, error: { error } } as T);
	}
};