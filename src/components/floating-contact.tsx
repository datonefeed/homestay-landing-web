"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Send, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandMessenger, IconBrandMessengerFilled } from "@tabler/icons-react";

interface ContactOption {
  type: "messenger" | "phone" | "email";
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

interface FloatingContactProps {
  facebookPageId?: string;
  phoneNumber?: string;
  email?: string;
  defaultMessage?: string;
  position?: "bottom-right" | "bottom-left";
}

export function FloatingContact({
  facebookPageId = "753011397903670",
  phoneNumber = "+84123456789",
  email = "contact@homestay.com",
  defaultMessage = "Chào bạn! Tôi muốn tìm hiểu về homestay.",
  position = "bottom-right",
}: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const contactOptions: ContactOption[] = [
    {
      type: "messenger",
      label: "Messenger",
      value: `https://m.me/${facebookPageId}?text=${encodeURIComponent(defaultMessage)}`,
      icon: <IconBrandMessengerFilled size={20} />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      type: "phone",
      label: "Gọi điện",
      value: `tel:${phoneNumber}`,
      icon: <Phone size={20} />,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      type: "email",
      label: "Email",
      value: `mailto:${email}`,
      icon: <Mail size={20} />,
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  const handleContactClick = (url: string) => {
    if (url.startsWith("mailto:") || url.startsWith("tel:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
    setIsOpen(false);
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-primary p-4 text-white">
              <h3 className="font-semibold text-lg">Liên hệ với chúng tôi</h3>
              <p className="text-blue-100 text-sm">Chúng tôi sẵn sàng hỗ trợ bạn</p>
            </div>

            <div className="p-4 space-y-3">
              {contactOptions.map((option, index) => (
                <motion.button
                  key={option.type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleContactClick(option.value)}
                  className={`w-full ${option.color} text-white rounded-xl py-3 px-4 transition-all duration-200 flex items-center gap-3 hover:scale-105 hover:shadow-lg`}
                >
                  {option.icon}
                  <span className="font-medium">{option.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="px-4 pb-4">
              <div className="text-xs text-gray-500 text-center">Thời gian phản hồi: 2-5 phút</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <div className="relative">
        {showPulse && !isOpen && (
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping"></div>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-primary text-white rounded-full p-4 shadow-2xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Open contact options"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Send size={24} className="rotate-45" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle size={24} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Liên hệ ngay
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
