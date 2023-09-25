import defaultSettings from '@/settings'

const title = defaultSettings.title || '智拓'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
