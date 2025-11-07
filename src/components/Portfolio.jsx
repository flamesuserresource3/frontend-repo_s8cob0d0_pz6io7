import { motion } from 'framer-motion';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Editorial' },
  { id: 2, src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop', tag: 'Runway' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1200&auto=format&fit=crop', tag: 'Beauty' },
  { id: 4, src: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1200&auto=format&fit=crop', tag: 'Campaign' },
  { id: 5, src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Street' },
  { id: 6, src: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop', tag: 'Studio' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
          <p className="mt-2 text-gray-600">A curated selection across editorial, runway, and campaigns.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-100"
          >
            <img
              src={p.src}
              alt={p.tag}
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-gray-900 backdrop-blur">
              {p.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
