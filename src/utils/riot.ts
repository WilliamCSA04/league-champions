import { BASE_DRAGON_URL, LOADING_PATH, PASSIVE_PATH, SPELL_PATH } from "src/config/riot";

export function getLoadingURL(path: string) {
  return `${BASE_DRAGON_URL}${LOADING_PATH}/${path}_0.jpg`
}

export function getSpellURL(path: string) {
  return `${BASE_DRAGON_URL}/13.1.1${SPELL_PATH}/${path}`
}

export function getPassiveURL(path: string) {
  return `${BASE_DRAGON_URL}/13.1.1${PASSIVE_PATH}/${path}`
}

export function removeDoubleBR(text: string) {
  return text.replaceAll("<br><br>", "<br>")
}