"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.7)" }}
        >
          {/* <source src="/placeholder.mp4" type="video/mp4" /> */}
        </video>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container max-w-[800px] text-center px-4 py-20"
      >
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
          Your thoughts.
          <br />
          <span className="bg-gradient-to-r from-rose-400/90 via-sky-400/90 to-violet-400/90 bg-clip-text text-transparent">
            Beautifully captured.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          A private digital space for your memories, designed with intention.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
            <Link href="/api/auth/login">
              Start journaling
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

