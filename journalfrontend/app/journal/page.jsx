"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; 
import axios from "axios";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function JournalEntries() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/journal-entries")
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
            <CardTitle className="text-2xl font-bold">My Journal Entries</CardTitle>
        </CardHeader>
        <CardContent>
            {data ? (
            <ScrollArea className="h-[70vh]">
            <ul className="space-y-4">
                {data.map((entry) => (
                <li key={entry.date} className="border-b pb-4 last:border-b-0">
                    <Link href={{ pathname: `/journal/read/${entry.date}`}}>
                        <h3 className="text-lg font-semibold text-primary">{entry.date}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{entry.text}</p>
                    </Link>

                </li>
                ))}
            </ul>
            </ScrollArea>
            ) : (
                <h1>Loading</h1>
            )
        }
        </CardContent>
        </Card>
    )
}
