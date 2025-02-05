"use client"

import { motion } from "framer-motion"
import { ImageIcon, Mic, Pencil } from "lucide-react"

const features = [
  {
    icon: Pencil,
    title: "Rich Text Entries",
    description: "Write and format your thoughts with our intuitive editor. Add headings, lists, and more.",
  },
  {
    icon: ImageIcon,
    title: "Photo Memories",
    description: "Upload and attach photos to your entries. A picture is worth a thousand words.",
  },
  {
    icon: Mic,
    title: "Voice Notes",
    description: "Record audio messages when you prefer speaking over typing.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto max-w-[980px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Express yourself your way</h2>
          <p className="text-xl text-neutral-600">Multiple ways to capture your thoughts and memories</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-teal-100 rounded-full transform -rotate-6" />
                <div className="relative bg-white rounded-full p-4 inline-block">
                  <feature.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

