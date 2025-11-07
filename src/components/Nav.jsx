import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'backdrop-blur bg-white/70 border-b border-black/5' : ''}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight">BIYOM</a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gray-900">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white">Book</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/30" onClick={() => setOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 24, stiffness: 240 }}
            className="fixed inset-y-0 right-0 z-[60] w-80 bg-white p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold">BIYOM</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-gray-700 hover:bg-gray-50">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white">Book</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
