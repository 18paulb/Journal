import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

export function JournalEntries() {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/journal-entries')
        .then(response => setData(response.data))
        .catch(error => console.log(error));
    }, [])

    return (
        <>
            {data ? (
                <ul>
                    {
                        data.map((entry, index) => (
                            <li key={index}>
                                <Link to={`/entry/${entry.date}`} state={{
                                    date: entry.date,
                                    text: entry.text
                                }} >
                                    <h2>{entry.date}</h2>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            )
            : <h1>Loading</h1>}
        </>
    )
}