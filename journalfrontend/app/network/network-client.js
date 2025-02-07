import axios from "axios";

export default class NetworkClient {


  backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://journal-backend-1175592937.us-west-2.elb.amazonaws.com/api/'

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

  async writeJournalEntry(formData) {
    axios.post(
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
    axios.post(`${this.backendUrl}/clear-cache`, {
      email: email,
    });
  }
}
