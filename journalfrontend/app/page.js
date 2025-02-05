"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import LandingPage from "@/app/components/landing/landing-page"
import HomePage from "@/app/components/home-page"

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {user ? (
        <HomePage></HomePage>
      ) : (
        <LandingPage></LandingPage>
      )}
    </>
  );
}
