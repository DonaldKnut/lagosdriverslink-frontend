export const uiConstants = {
  // Animation durations
  animation: {
    fast: 150,
    normal: 300,
    slow: 500,
  },

  // Breakpoints (matching Tailwind defaults)
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },

  // Z-index layers
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  },

  // Colors (matching your theme)
  colors: {
    primary: {
      yellow: "#FCD34D", // yellow-300
      "yellow-dark": "#F59E0B", // yellow-500
      "yellow-darker": "#D97706", // yellow-600
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    success: "#10B981", // green-500
    error: "#EF4444", // red-500
    warning: "#F59E0B", // yellow-500
    info: "#3B82F6", // blue-500
  },

  // Spacing
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
  },

  // Border radius
  borderRadius: {
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
  },
} as const;



