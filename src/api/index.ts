import axios, { AxiosResponse } from "axios";
import { GetAllPropertyListingsResponse } from "./types";

const BASE_URL =
  "https://h6gtcwawogauax7kowtnpi6aby0zkwzj.lambda-url.us-east-2.on.aws/users";

const apiClient = axios.create({
  baseURL: BASE_URL,
});
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`API Response: ${response.config.url}`, {
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("API Error:", {
      url: error.config?.url,
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
    });
    return Promise.reject(error);
  }
);

export async function getAllPropertyListings(): Promise<GetAllPropertyListingsResponse> {
  const { data } = await apiClient.get("/all-property-listings");
  return data;
}
