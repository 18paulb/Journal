'use client';

import { motion } from 'framer-motion';
import { Lock, Shield, Users } from 'lucide-react';

const privacyCards = [
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'Your entries are encrypted, ensuring complete privacy.',
  },
  {
    icon: Shield,
    title: 'Secure Backup',
    description: 'Automatic cloud backups keep your memories safe without compromising security.',
  },
  {
    icon: Users,
    title: 'Controlled Sharing',
    description: 'Choose what to share. Keep private entries private.',
  },
];

export default function PrivacySection() {
  return (
    <section className="w-full py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto max-w-[980px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Privacy at its core</h2>
          <p className="text-xl text-white/80">Your thoughts are yours, and yours alone</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {privacyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-neutral-900 rounded-3xl p-8"
            >
              <div className="mb-6">
                <div className="bg-white/10 rounded-full p-4 inline-block">
                  <card.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
