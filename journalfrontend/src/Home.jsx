import { Link } from "react-router-dom"

export function HomePage() {
    return (
        <>
            <h1>Welcome to the Journal</h1>

            <Link to={`/entries`}>
                <p>View Your Entries</p>
            </Link>

            <Link to={`/write-journal`}>
                <p>Write today's entry</p>
            </Link>
        </>
    )
}