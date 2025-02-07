import axios from "axios";

export default class NetworkClient {


  backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://api.remnity.com/api'

  async getUserJournals(email) {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL ?? "No backend url provided")
    return axios.get(`${this.backendUrl}/journal-entries`, {
      headers: {
        Authorization: `Bearer ${email}`, // Sending email in the header
      },
    });
  }

  async getJournalEntryText(date, email) {
    return axios.get(
      `${this.backendUrl}/journal-entry-text?date=${date}`,
      {
        headers: {
          Authorization: `Bearer ${email}`, // Sending email in the header
        },
      }
    );
  }

  async getJournalEntryMedia(date, email) {
    return axios.get(
      `${this.backendUrl}/journal-entry-media?date=${date}`,
      {
        headers: {
          Authorization: `Bearer ${email}`, // Sending email in the header
        },
      }
    );
  }

  async deleteAudio(key) {
    return axios.delete(
      `${this.backendUrl}/audio`, {
        params: { key }
      }
    )
  }

  async deleteImage(key) {
    return axios.delete(
      `${this.backendUrl}/image`, {
        params: { key }
      }
    )
  }

  async writeJournalEntry(formData) {
    return axios.post(
      `${this.backendUrl}/write-journal`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the right content type for file upload
        },
      }
    );
  }

  async clearCache(email) {
    return axios.post(`${this.backendUrl}/clear-cache`, {
      email: email,
    });
  }
}
