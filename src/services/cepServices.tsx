import axios from 'axios';

import { ENDPOINTS } from '../settings';

export const getCep = (cep: string) => {
  const route = ENDPOINTS.ENDPOINT_CEP.baseUrl + ENDPOINTS.ENDPOINT_CEP.search.route(cep);

  return new Promise<object>((resolve, reject) => {
    axios.get(route)
      .then((response: object) => resolve(response))
      .catch((error: object) => reject(error));
  })
}
