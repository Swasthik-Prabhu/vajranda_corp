'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-20 bg-sky-100">
      <motion.h1
        className="text-5xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Vajranda Corp
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We are passionate about delivering high-quality digital experiences and building technology that empowers the future.
      </motion.p>
    </main>
  );
}
