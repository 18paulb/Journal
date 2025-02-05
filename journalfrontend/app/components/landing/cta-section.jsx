"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const freeFeatures = [
  "Unlimited text entries",
  "Up to 100 photos per month",
  "10 hours of voice recording",
  "Basic text formatting",
]

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-black to-neutral-950">
      <div className="container mx-auto max-w-[980px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Start journaling today</h2>
          <p className="text-xl text-white/80 mb-8">Begin your journey with our free plan</p>
          <div className="grid grid-cols-2 gap-4 text-left mb-8">
            {freeFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <p className="text-white/80">{feature}</p>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
            <Link href="/api/auth/login">
              Create free account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

