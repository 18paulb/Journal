import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const freeFeatures = [
  'Unlimited text entries',
  'Up to 100 photos per month',
  '10 hours of voice recording',
  'Basic text formatting',
];

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

          <ul className="grid sm:grid-cols-2 gap-4 text-left mb-10">
            {freeFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90 text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="rounded-full bg-white text-black hover:bg-white/90"
            onClick={() => (window.location.href = '/api/auth/login')}
          >
            Create free account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
