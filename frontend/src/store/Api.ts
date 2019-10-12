import axios from 'axios';

class Api {
  registerMedication(name: string) {
    return axios.post('/api/medication', { name });
  }

  verifyMedication(id: string) {
    return axios.post(`/api/medication/${id}/verify`);
  }

  getMedication() {
    return axios.get(`/api/medication`);
  }
}

const api = new Api();

export default api;
