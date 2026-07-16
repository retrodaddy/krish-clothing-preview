import { client } from "@/config/client";

/**
 * Thin accessor over config so components import from `data/` (a stable
 * seam) rather than reaching into `config/client.ts` directly everywhere.
 * When a real product/catalogue API lands, this file is where the fetch
 * call goes instead of a config read.
 */
export function getCategories() {
  return client.categories;
}
