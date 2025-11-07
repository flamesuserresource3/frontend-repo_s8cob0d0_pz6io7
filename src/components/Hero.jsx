import { motion } from 'framer-motion';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 md:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-fuchsia-600" />
              Modern Model Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Elevate Your Presence with a Clean, Editorial Showcase
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-xl text-lg text-gray-600"
            >
              A sleek, interactive portfolio crafted for models and creators. Smooth motion, bold type, and an immersive hero experience that books more work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:bg-gray-50"
              >
                <Camera className="h-4 w-4" /> Book a Shoot
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex items-center gap-6 pt-2 text-sm text-gray-600"
            >
              <div>
                <span className="font-semibold text-gray-900">50+</span> Editorial Features
              </div>
              <div>
                <span className="font-semibold text-gray-900">15</span> Brands Collaborated
              </div>
              <div>
                <span className="font-semibold text-gray-900">7</span> Years Experience
              </div>
            </motion.div>
          </div>

          <div className="relative hidden min-h-[420px] md:block" />
        </div>
      </div>
    </section>
  );
}
