"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const whatsappNumber = "2347066208246"; // Without + and with country code

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <div className="hidden sm:flex items-center bg-white text-black px-3 py-2 rounded-lg shadow-lg border border-green-500/30">
        <span className="relative flex items-center mr-2">
          <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
        </span>
        <span className="text-sm font-semibold">Need help? Chat with us</span>
      </div>
      <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition relative">
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full" />
        <MessageCircle className="h-6 w-6" />
      </div>
    </a>
  );
}
