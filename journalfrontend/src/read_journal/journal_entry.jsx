import { useLocation } from "react-router-dom"

export function JournalEntry() {

    const location = useLocation()

    const journalEntryDate = location.state?.date
    const journalEntryText = location.state?.text

    const renderTextWithNewlines = (text) => {
        return text.split('\n').map((line, index) => (
          <p key={index}>
            {line}
            {index < text.split('\n').length - 1 && <br />}
          </p>
        ));
      };
    

    return (
        <>
            <h1>{journalEntryDate}</h1>
            {/* <p>{journalEntryText}</p> */}
            {renderTextWithNewlines(journalEntryText)}
        </>
    )
}