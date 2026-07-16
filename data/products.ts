import { client } from "@/config/client";

export function getFeaturedProducts() {
  return client.featuredProducts;
}
