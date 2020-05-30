import axios, { AxiosResponse, AxiosError } from 'axios';

import { ENDPOINTS } from '../settings';

export const getCep = (cep: string) => {
  const route = ENDPOINTS.ENDPOINT_CEP.baseUrl + ENDPOINTS.ENDPOINT_CEP.search.route(cep);

  return new Promise<AxiosResponse>((resolve, reject) => {
    axios.get(route)
      .then((response: AxiosResponse) => resolve(response))
      .catch((error: AxiosError) => reject(error));
  })
}
