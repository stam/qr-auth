import axios from 'axios';

class Api {
  registerMedication(name: string) {
    return axios.post('/api/medication', { name });
  }
}

const api = new Api();

export default api;
