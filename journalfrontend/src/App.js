import './App.css';
import { JournalEntries } from './read_journal/journal_entries';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { JournalEntry } from './read_journal/journal_entry';
import { HomePage } from './Home'
import WriteJournal from './write_journal/write_journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/write-journal' element={<WriteJournal />} />
        <Route path="/entries" element={<JournalEntries />} />
        <Route path="/entry/:date" element={<JournalEntry/>} />
      </Routes>
    </Router>
  )
}

export default App;
