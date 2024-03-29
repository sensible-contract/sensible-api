/**
 * You can modify this file
 *
 * @version 5
 */
import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import qs from "qs";
const baseConfig: AxiosRequestConfig = {
  baseURL: "", // <--- Add your base url
  paramsSerializer: (param) => qs.stringify(param, { indices: false }),
  timeout: 60 * 1000,
};

if (typeof globalThis.window == "undefined") {
  baseConfig.headers = {
    //request is gzip
    // "Content-Encoding": "gzip",
    //request is json
    "Content-Type": "application/json-patch+json",

    //response is gzip
    // "Accept-Encoding": "gzip, deflate, br",
    //response is json
    Accept: "application/json",
  };
}

let axiosInstance: AxiosInstance;
const auth = {
  authorization: "",
};
function getAxiosInstance(security: Security): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig);

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (async (response: AxiosResponse): Promise<SwaggerResponse<any>> => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
        return response;
      }) as any,
      (error: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        if (error.response) {
          return Promise.reject(
            new RequestError(
              error.response.data,
              error.response.status,
              error.response
            )
          );
        }

        if (error.isAxiosError) {
          return Promise.reject(new RequestError("noInternetConnection"));
        }
        return Promise.reject(error);
      }
    );

    // ًًRequest interceptor
    axiosInstance.interceptors.request.use(
      async (requestConfig) => {
        // Do something before request is sent
        /** Example on how to add authorization based on security */
        if (auth.authorization) {
          requestConfig.headers.authorization = auth.authorization;
        }

        return requestConfig;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
}

export const setAuthorization = (authorization: string) => {
  auth.authorization = authorization;
};

class RequestError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public response?: AxiosResponse
  ) {
    super((response && response.config ? response.config.url : "") + message);
  }

  isApiException = true;
}

export type Security = any[] | undefined;

export interface SwaggerResponse<R> extends AxiosResponse<R> {}

export { getAxiosInstance, RequestError };
