import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

const Sidebar = () => {
  const [open, setOpen] = useState('');
  const [selected, setSelected] = useState('');

  const handleClick = (name) => {
    setOpen(open === name ? '' : name);
    setSelected(selected === name ? '' : name);
  };

  return (
    <aside className="w-48 h-screen fixed left-0 top-0 bg-gray-800 text-white border-r border-gray-600">
      <nav className="p-5">
        <ul className="space-y-5">
          <li className="flex flex-col space-y-5">
            <button type="button" onClick={() => handleClick('marketplace')} className={`w-full mb-2 ${selected === 'marketplace' && open === 'marketplace' ? 'text-red-600 transform scale-110' : ''} hover:text-red-600`}>Marketplace</button>
            <AnimatePresence>
              {open === 'marketplace' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col space-y-2"
                >
                  <a href="/last-collections" className="block hover:shadow-lg hover:bg-gray-700 hover:text-red-600 p-1 rounded">Last Collections</a>
                  <a href="/rare-collections" className="block hover:shadow-lg hover:bg-gray-700 hover:text-red-600 p-1 rounded">Rare Collections</a>
                  <a href="/inscribe-your-ordinals" className="block hover:shadow-lg hover:bg-gray-700 hover:text-red-600 p-1 rounded">Inscribe Your Ordinals</a>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li className="flex flex-col space-y-5">
            <button type="button" onClick={() => handleClick('authors')} className={`w-full mb-2 ${selected === 'authors' && open === 'authors' ? 'text-red-600 transform scale-110' : ''} hover:text-red-600`}>Authors</button>
            <AnimatePresence>
              {open === 'authors' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col space-y-2"
                >
                  <a href="/become-an-author" className="block hover:shadow-lg hover:bg-gray-700 hover:text-red-600 p-1 rounded">Become an Author</a>
                  <a href="/requirements" className="block hover:shadow-lg hover:bg-gray-700 hover:text-red-600 p-1 rounded">Requirements</a>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
        <button type="button" onClick={() => setSelected(selected === 'faqs' ? '' : 'faqs')} className={`w-full flex justify-center items-center mt-5 mb-2 p-1 rounded ${selected === 'faqs' ? 'text-red-600 transform scale-110' : ''} hover:text-red-600`}>
          <span>FAQs</span>
          <FaQuestionCircle className="ml-2" />
        </button>
        <button type="button" onClick={() => setSelected(selected === 'support' ? '' : 'support')} className={`w-full flex justify-center items-center mt-5 mb-2 p-1 rounded ${selected === 'support' ? 'text-red-600 transform scale-110' : ''} hover:text-red-600`}>
          Support
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
