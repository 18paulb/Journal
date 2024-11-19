import Link from "next/link"; 

export default function Home() {
  return (
    <>
      <h1>Welcome to Journal</h1>
      <Link href={{ pathname: `/journal`}}>
        <h2>View All Entries</h2>
      </Link>


      <Link href={{ pathname: `/journal/write`}}>
        <h2>Write Today's Entry</h2>
      </Link>

    </>
  );
}
