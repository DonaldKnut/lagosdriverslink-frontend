const API_BASE = process.env.NEXT_PUBLIC_API_URL || "/api";

export const apiEndpoints = {
  auth: {
    login: `${API_BASE}/auth/signin`,
    register: `${API_BASE}/register`,
    logout: `${API_BASE}/auth/signout`,
  },
  driverRequest: `${API_BASE}/driver-request`,
  hire: `${API_BASE}/hire`,
  dashboard: {
    base: `${API_BASE}/dashboard`,
    drivers: `${API_BASE}/dashboard/drivers`,
    requests: `${API_BASE}/dashboard/requests`,
    analytics: `${API_BASE}/dashboard/analytics`,
  },
  email: {
    test: `${API_BASE}/test-email`,
  },
} as const;

export type ApiEndpoint =
  | (typeof apiEndpoints)[keyof typeof apiEndpoints]
  | string;


