import axios from 'axios';

export default class NetworkClient {
  async writeJournalEntry(formData: FormData) {
    return axios.post(`/api/journal`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure the right content type for file upload
      },
    });
  }

  async sendEmail(formData: FormData) {
    return axios.post(`/api/email`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure the right content type for file upload
      },
    });
  }
}
