"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; 
import axios from "axios";

export default function JournalEntries() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/journal-entries")
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {data ? (
                <ul>
                    {data.map((entry, index) => (
                        <li key={index}>
                            <Link href={{ pathname: `/journal/read/${entry.date}`}}>
                                <h2>{entry.date}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
}
