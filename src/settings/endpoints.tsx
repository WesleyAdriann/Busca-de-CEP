export const ENDPOINTS = {
  ENDPOINT_CEP: {
    baseUrl: "https:/viacep.com.br/ws",
    search: {
      route: (cep: string) => `/${cep}/json/`,
      method: 'get',
    }
  }
}
