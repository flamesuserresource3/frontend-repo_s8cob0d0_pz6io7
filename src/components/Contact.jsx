import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — your message has been sent. I will get back shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
        <p className="mt-2 text-gray-600">For bookings, collaborations, or press inquiries.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
            <input required type="text" className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none ring-0 transition focus:border-gray-900" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <input required type="email" className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none ring-0 transition focus:border-gray-900" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
            <textarea required rows="4" className="block w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 outline-none ring-0 transition focus:border-gray-900" placeholder="Tell me about the project" />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white transition hover:-translate-y-0.5">
            <Send className="h-4 w-4" /> Send Message
          </button>
          <a href="mailto:booking@example.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Mail className="h-4 w-4" /> booking@example.com
          </a>
        </div>

        {status && (
          <p className="mt-4 text-sm text-emerald-600">{status}</p>
        )}
      </motion.form>
    </section>
  );
}
