import { useState } from "react";
import axios from "axios";
import './write_journal.css'


export default function WriteJournal() {
    
    const [entry, setEntry] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
      setEntry(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (entry.trim() === '') {
        alert('Please enter a journal entry.');
        return;
      }

      setIsSubmitting(true); // Disable button to show loading state

      try {
        const response = await axios.post('http://localhost:8000/write-journal', {
          entry: entry,
        });
        console.log('Journal entry submitted:', response.data);
        setEntry(''); // Clear the textarea after submitting
      } catch (err) {
        console.error('Error submitting journal entry:', err);
        setError('Failed to submit your journal entry.');
      } finally {
        setIsSubmitting(false); // Re-enable the button
      }

    };
  
  return (
    <div className="journal-entry-box">
      <h2>New Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={handleChange}
          placeholder="Write your journal entry here..."
          rows="6"
          className="journal-textarea"
        />
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}