import { ApiResponse } from '@/types';

const fetcher = async (url: string, config: RequestInit = {}): Promise<ApiResponse> => {
  return await fetch(url, config)
    .then((resp) => {
      if (resp.status == 504) {
        throw new Error('Request timed out');
      }
      return resp.json();
    })
    .then(handleResponse)
    .catch((err) => {
      console.error('Error occurred while fetching data: ' + err.message);
      return {
        status: 'error',
        message: err.message ? err.message : 'Error processing request'
      } as ApiResponse;
    });
};

const handleResponse = (resp: ApiResponse): ApiResponse => {
  if (resp === null || resp === undefined) {
    throw new Error('Body is null or undefined');
  }

  if (!resp.status && !resp.message) {
    throw new Error('Unknown error occurred');
  }

  return resp as ApiResponse;
};

export default fetcher;
