import axios from 'axios';

export default class NetworkClient {
  async getUserJournals() {
    return axios.get(`/api/journal/entries`, {});
  }

  async getJournalEntryText(date) {
    return axios.get(`/api/journal/text/${date}`, {});
  }

  async getJournalEntryMedia(date) {
    return axios.get(`/api/journal/media/${date}`, {});
  }

  async getJournalEntryCount() {
    return axios.get('/api/stats/journal', {});
  }

  async getStreakCount(date) {
    return axios.get(`/api/stats/streak/${date}`, {});
  }

  async getPhotoCount() {
    return axios.get(`/api/stats/photo`, {});
  }

  async deleteAudio(key) {
    return axios.delete(`/api/journal/media/audio`, {
      params: { key },
    });
  }

  async deleteImage(key) {
    return axios.delete(`/api/journal/media/image`, {
      params: { key },
    });
  }

  async deleteJournalEntry(date) {
    return axios.delete('/api/journal', {
      params: {
        date,
      },
    });
  }

  async writeJournalEntry(formData) {
    return axios.post(`/api/journal`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure the right content type for file upload
      },
    });
  }

  async sendEmail(formData) {
    return axios.post(`/api/email`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure the right content type for file upload
      },
    });
  }

  async getDailyPublicJournals(date) {
    return axios.get(`/api/browse/${date}`);
  }
}
