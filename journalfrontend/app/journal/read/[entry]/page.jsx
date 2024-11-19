'use client';

import { useParams } from 'next/navigation'; // Import useParams from next/navigation
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function JournalEntry() {
    const params =  useParams(); // Use useParams to access the dynamic 'date' parameter

    const date = params.entry

    const [data, setData] = useState(null)

    useEffect(() => {
      axios.get(`http://localhost:8000/journal-entry?date=${date}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
    }, [])


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
            <h1>Journal Entry for {date}</h1>
            {/* Example of rendering some text with newlines */}
            {/* Pass your text here for rendering */}
            {data} 
        </>
    );
}
