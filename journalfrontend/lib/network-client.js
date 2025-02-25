import axios from 'axios';

export default class NetworkClient {
  backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://api.remnity.com/api';

  async getUserJournals(email) {
    return axios.get(`/api/journal/entries`, {
      headers: {
        Authorization: `Bearer ${email}`, // Sending email in the header
      },
    });
  }

  async getJournalEntryText(date, email) {
    return axios.get(`/api/journal/text/${date}`, {
      headers: {
        Authorization: `Bearer ${email}`, // Sending email in the header
      },
    });
  }

  async getJournalEntryMedia(date, email) {
    return axios.get(`/api/journal/media/${date}`, {
      headers: {
        Authorization: `Bearer ${email}`, // Sending email in the header
      },
    });
  }

  async getJournalEntryCount(email) {
    return axios.get(`/api/stats/journal`, {
      headers: {
        Authorization: `Bearer ${email}`, // Sending email in the header
      },
    });
  }

  async getPhotoCount(email) {
    return axios.get(`/api/stats/photo`, {
      headers: {
        Authorization: `Bearer ${email}`, // Sending email in the header
      },
    });
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

  async deleteJournalEntry(date, email) {
    return axios.delete('/api/journal', {
      params: {
        date,
        email,
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
}
