import './App.css';
import { JournalEntries } from './read_journal/journal_entries';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { JournalEntry } from './read_journal/journal_entry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JournalEntries />} />
        <Route path="/entry/:date" element={<JournalEntry/>} />
      </Routes>
    </Router>
  )
}

export default App;
