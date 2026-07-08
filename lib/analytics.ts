type AnalyticsEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrDate: string | Date,
      params?: AnalyticsEventParams
    ) => void
  }
}

export function trackEvent(
  action: string,
  params: AnalyticsEventParams = {}
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', action, params)
}

