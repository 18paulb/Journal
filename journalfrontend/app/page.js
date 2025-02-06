"use client"

import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation'
import { useEffect } from 'react';
import LandingPage from '@/app/components/landing/landing-page';

export default function Landing() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      redirect('/home')
    }
  }, [user]);

  return (
    <>
      <LandingPage />
    </>
  );
}