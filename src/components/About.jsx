import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-5 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 md:col-span-3"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
          <p className="mt-4 text-gray-600">
            I’m a fashion model focusing on editorial, runway, and beauty work. My portfolio blends modern aesthetics with
            timeless elegance — creating visuals that feel both bold and effortless. Based in London, available worldwide.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700 sm:grid-cols-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">179cm</div>
              Height
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">80-62-90</div>
              Bust/Waist/Hips
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">US 7</div>
              Shoe
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 md:col-span-2"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1520975922299-c4dce0e0f07f?q=80&w=1200&auto=format&fit=crop"
              alt="Model portrait"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
              <User className="h-3.5 w-3.5" /> Representation Ready
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
