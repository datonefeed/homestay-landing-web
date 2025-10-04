"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MessengerButtonProps {
  facebookPageId?: string;
  defaultMessage?: string;
  position?: "bottom-right" | "bottom-left";
}

export function MessengerButton({
  facebookPageId = "753011397903670",
  defaultMessage = "Chào bạn! Tôi muốn tìm hiểu về homestay.",
  position = "bottom-right",
}: MessengerButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMessengerClick = () => {
    const messengerUrl = `https://m.me/${facebookPageId}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(messengerUrl, "_blank");
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-[999]`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-sm border"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-800">Chat với chúng tôi</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">Chúng tôi thường phản hồi trong vài phút</p>
            <button
              onClick={handleMessengerClick}
              className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              Gửi tin nhắn
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-colors duration-200 flex items-center justify-center"
        aria-label="Open Messenger chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="messenger"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
