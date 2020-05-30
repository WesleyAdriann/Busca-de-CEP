import axios, { AxiosResponse, AxiosError } from 'axios';

import { ENDPOINTS } from '../settings';

export const getCep = (cep: string) => {
  const endpoint = ENDPOINTS.ENDPOINT_CEP;
  const route = endpoint.baseUrl + endpoint.search.route(cep);

  return new Promise<AxiosResponse>((resolve, reject) => {
    axios.get(route)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  })
}
