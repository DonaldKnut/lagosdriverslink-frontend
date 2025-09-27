import { ApiResponse, PaginatedResponse, PaginationParams } from "@/lib/types";

class ApiService {
  private baseURL: string;

  constructor(baseURL: string = "/api") {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      };
    }
  }

  async get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<ApiResponse<T>> {
    const searchParams = params ? new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    ).toString() : "";
    const url = searchParams ? `${endpoint}?${searchParams}` : endpoint;

    return this.request<T>(url, { method: "GET" });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }

  // Paginated requests
  async getPaginated<T>(
    endpoint: string,
    params?: PaginationParams & Record<string, string | number | boolean>
  ): Promise<PaginatedResponse<T>> {
    const response = await this.get<PaginatedResponse<T>>(endpoint, params);
    return response.data || response as PaginatedResponse<T>;
  }

  // File upload
  async uploadFile<T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append("file", file);

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
    }

    return this.request<T>(endpoint, {
      method: "POST",
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }
}

// Create a singleton instance
export const apiService = new ApiService();

// Specific service classes for different domains
export class AuthService {
  async login(credentials: { email: string; password: string }) {
    return apiService.post("/auth/signin", credentials);
  }

  async register(userData: {
    name: string;
    email: string;
    password: string;
    dob: string;
  }) {
    return apiService.post("/register", userData);
  }

  async logout() {
    return apiService.post("/auth/signout");
  }
}

export class DriverRequestService {
  async submitRequest(requestData: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    additionalNotes: string;
    plan: string;
    confirmationEmail: { html: string };
    teamEmail: { html: string };
  }) {
    return apiService.post("/driver-request", requestData);
  }

  async getRequests(params?: PaginationParams) {
    return apiService.getPaginated("/driver-request", params as PaginationParams & Record<string, string | number | boolean>);
  }
}

export class HireService {
  async submitHireRequest(hireData: unknown) {
    return apiService.post("/hire", hireData);
  }

  async getHireRequests(params?: PaginationParams) {
    return apiService.getPaginated("/hire", params as PaginationParams & Record<string, string | number | boolean>);
  }
}

// Export service instances
export const authService = new AuthService();
export const driverRequestService = new DriverRequestService();
export const hireService = new HireService();
