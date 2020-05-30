import { KEYS } from './keys';


export const ENDPOINTS = {
  ENDPOINT_CEP: {
    baseUrl: "https:/viacep.com.br/ws",
    search: {
      route: (cep: string) => `/${cep}/json/`,
      method: 'get',
    }
  },
  ENDPOINT_GEOCODE: {
    baseUrl: "https://maps.googleapis.com/maps/api/geocode/json?",
    searchKey: `&key=${KEYS.google_key}`,
    search: {
      route: (cep: string) => `address=${cep}`,
      method: 'get',
    }
  }
}
