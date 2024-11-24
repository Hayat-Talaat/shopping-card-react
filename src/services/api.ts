import axios from "axios";
import { Product } from "../types/Products";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axios.get<Product>(`${API_URL}/${id}`);
  return response.data;
};
