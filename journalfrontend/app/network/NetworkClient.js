import axios from "axios";

export default class NetworkClient {

    getUserJournals(email) {
        return axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/journal-entries`, 
          {
            headers: {
              Authorization: `Bearer ${email}`, // Sending email in the header
            },
          }
        )
    }

    getUserEntryText(date, email) {
        return axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/journal-entry-text?date=${date}`,
          {
            headers: {
              Authorization: `Bearer ${email}`, // Sending email in the header
            },
          }
        )
    }

    getUserEntryImages(date, email) {
      return axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/journal-entry-images?date=${date}`,
        {
          headers: {
            Authorization: `Bearer ${email}`, // Sending email in the header
          },
        }
      )
  }

    async writeJournalEntry(formData) {
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/write-journal`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',  // Ensure the right content type for file upload
            }
          });
    }

    async clearCache(email) {
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/clear-cache`, {
            email: email,
        });
    }
}