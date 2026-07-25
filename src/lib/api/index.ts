import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from "axios";
import { toast } from "sonner";
import { clearTokens, getAccessToken } from "@services/token-service";
import {URL} from "@/configs/app"

const BASE_URL: string = (
  URL.BASE
).replace(/\/+$/, "");

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 60 * 2,
});

export type ApiSuccessResponse<T = unknown> = {
  success: true;
  message: string | null;
  data: T;
  meta: Record<string, unknown>;
  errors: null;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
  data: null;
  meta: Record<string, unknown>;
  errors: Record<string, string[]> | null;
};

const getFirstValidationError = (
  errors: Record<string, string[]> | null | undefined,
): string | null => {
  if (!errors) return null;

  for (const key in errors) {
    const fieldErrors = errors[key];
    if (Array.isArray(fieldErrors) && fieldErrors.length > 0) {
      return fieldErrors[0];
    }
  }

  return null;
};

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response.data,
  async (err: AxiosError<ApiErrorResponse>) => {
    const status = err.response?.status;
    const responseData = err.response?.data;

    if (status === 401) {
      clearTokens();
      location.href = "/login";
      return Promise.reject(err);
    }

    if (status === 422) {
      const validationMessage =
        getFirstValidationError(responseData?.errors) ||
        responseData?.message ||
        "اطلاعات وارد شده معتبر نیست";

      toast.error(validationMessage);
      return Promise.reject(err);
    }

    if (status && status >= 400) {
      toast.error(
        responseData?.message || "خطایی در پردازش درخواست رخ داده است",
      );
      return Promise.reject(err);
    }

    if (err.request) {
      toast.error("ارتباط با سرور برقرار نشد");
      return Promise.reject(err);
    }

    toast.error(err.message || "خطای غیرمنتظره‌ای رخ داده است");
    return Promise.reject(err);
  },
);

interface ApiClientWrapper {
  get: <T = unknown>(
    url: string,
    options?: AxiosRequestConfig,
  ) => Promise<ApiSuccessResponse<T>>;
  post: <T = unknown, D = unknown>(
    url: string,
    data?: D,
    options?: AxiosRequestConfig,
  ) => Promise<ApiSuccessResponse<T>>;
  put: <T = unknown, D = unknown>(
    url: string,
    data?: D,
    options?: AxiosRequestConfig,
  ) => Promise<ApiSuccessResponse<T>>;
  delete: <T = unknown>(
    url: string,
    options?: AxiosRequestConfig,
  ) => Promise<ApiSuccessResponse<T>>;
}

export const api: ApiClientWrapper = {
  get: (url, options = {}) =>
    apiClient.get(url, options) as Promise<ApiSuccessResponse<any>>,
  post: (url, data, options = {}) =>
    apiClient.post(url, data, options) as Promise<ApiSuccessResponse<any>>,
  put: (url, data, options = {}) =>
    apiClient.put(url, data, options) as Promise<ApiSuccessResponse<any>>,
  delete: (url, options = {}) =>
    apiClient.delete(url, options) as Promise<ApiSuccessResponse<any>>,
};

export { BASE_URL };
export default api;
