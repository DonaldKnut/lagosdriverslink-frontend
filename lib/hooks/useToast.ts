import { create } from "zustand";

interface ToastState {
  show: boolean;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
}

interface ToastStore extends ToastState {
  showToast: (
    message: string,
    type?: ToastState["type"],
    duration?: number
  ) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  show: false,
  type: "success",
  message: "",
  duration: 4000,

  showToast: (message, type = "success", duration = 4000) =>
    set({ show: true, message, type, duration }),

  hideToast: () => set({ show: false }),
}));

export function useToast() {
  const { show, type, message, duration, showToast, hideToast } =
    useToastStore();

  const trigger = (
    message: string,
    type: ToastState["type"] = "success",
    duration?: number
  ) => {
    showToast(message, type, duration);
  };

  return {
    show,
    type,
    message,
    duration,
    trigger,
    hide: hideToast,
  };
}

