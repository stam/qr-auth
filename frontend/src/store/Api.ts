import axios from 'axios';

class Api {
  registerMedication(name: string) {
    return axios.post('/api/medication', { name });
  }

  verifyMedication(id: string) {
    return axios.put(`/api/medication/${id}`);
  }
}

const api = new Api();

export default api;
