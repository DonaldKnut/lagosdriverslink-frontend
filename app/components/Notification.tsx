"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertTriangle,
  X,
  Clock,
  FileText,
  Info,
} from "lucide-react";

export interface NotificationData {
  type: "success" | "error" | "info";
  title: string;
  message: string;
  details?: {
    requestId?: string;
    processingTime?: string;
    error?: string;
  };
  duration?: number; // in milliseconds
}

interface NotificationProps {
  notification: NotificationData | null;
  onClose: () => void;
}

export function Notification({ notification, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setIsVisible(true);
      const duration = notification.duration || 6000;
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  if (!notification) return null;

  const iconMap = {
    success: <CheckCircle className="w-6 h-6 text-yellow-400" />,
    error: <AlertTriangle className="w-6 h-6 text-red-400" />,
    info: <Info className="w-6 h-6 text-blue-400" />,
  };

  const bgColorMap = {
    success: "bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border-yellow-500/50",
    error: "bg-gradient-to-r from-red-900/30 to-rose-900/20 border-red-500/50",
    info: "bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border-blue-500/50",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 right-6 z-50 max-w-md w-full"
        >
          <div
            className={`${bgColorMap[notification.type]} backdrop-blur-md border rounded-xl shadow-2xl p-5 text-white`}
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-0.5">
                {iconMap[notification.type]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 text-white">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(onClose, 300);
                }}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Details */}
            {notification.details && (
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                {notification.details.requestId && (
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <FileText className="w-4 h-4" />
                    <span>
                      Request ID:{" "}
                      <span className="font-mono text-yellow-400">
                        {notification.details.requestId.slice(0, 8)}...
                      </span>
                    </span>
                  </div>
                )}
                {notification.details.processingTime && (
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>
                      Processing time:{" "}
                      <span className="font-semibold text-yellow-400">
                        {notification.details.processingTime}
                      </span>
                    </span>
                  </div>
                )}
                {notification.details.error && (
                  <div className="text-xs text-red-300 bg-red-900/20 p-2 rounded border border-red-500/30">
                    {notification.details.error}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook for managing notifications
export function useNotification() {
  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );

  const showNotification = (data: NotificationData) => {
    setNotification(data);
  };

  const showSuccess = (
    title: string,
    message: string,
    details?: NotificationData["details"]
  ) => {
    showNotification({
      type: "success",
      title,
      message,
      details,
    });
  };

  const showError = (
    title: string,
    message: string,
    details?: NotificationData["details"]
  ) => {
    showNotification({
      type: "error",
      title,
      message,
      details,
    });
  };

  const showInfo = (
    title: string,
    message: string,
    details?: NotificationData["details"]
  ) => {
    showNotification({
      type: "info",
      title,
      message,
      details,
    });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return {
    notification,
    showNotification,
    showSuccess,
    showError,
    showInfo,
    hideNotification,
  };
}





