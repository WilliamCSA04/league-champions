import { BASE_DRAGON_URL, LOADING_PATH } from "src/config/riot";

export function getLoadingURL(path: string) {
  return `${BASE_DRAGON_URL}${LOADING_PATH}/${path}_0.jpg`
}