/**
 * Language routing utilities
 * Maps URL prefixes to i18n languages:
 * - /fr → fr
 * - /lb → ar (Arabic/Lebanon)
 * - / (no prefix) → en (default)
 */

// Supported locale prefixes
export const SUPPORTED_PREFIXES = ['fr', 'lb']

/**
 * Country to locale prefix mapping
 * @param {string} country - Country name (e.g., "France", "Lebanon")
 * @returns {string} - Locale prefix: "fr", "lb", or ""
 */
export const getCountryPrefix = (country) => {
  if (country === 'France') return 'fr'
  if (country === 'Lebanon') return 'lb'
  return ''
}

/**
 * Single source of truth: Get locale prefix from country and/or language
 * Priority: Language takes precedence. If language is English, no prefix is used.
 * If both country and language point to the same prefix, use that.
 * Otherwise, prioritize language (since it affects content translation).
 * @param {Object} options - { country?: string, language?: string }
 * @returns {string} - Locale prefix: "fr", "lb", or "" (empty for English)
 */
export const getLocalePrefix = ({ country, language }) => {
  const countryPrefix = country ? getCountryPrefix(country) : ''
  const langPrefix = language ? getLangPrefix(language) : ''
  
  // English always has no prefix, regardless of country
  if (language === 'en') {
    return ''
  }
  
  // If both exist and match, use that prefix
  if (countryPrefix && langPrefix && countryPrefix === langPrefix) {
    return countryPrefix
  }
  
  // If only one exists, use that (language takes priority)
  if (langPrefix) return langPrefix
  if (countryPrefix) return countryPrefix
  
  return '' // default (English)
}

/**
 * Extract language code from pathname
 * @param {string} pathname - Current pathname (e.g., "/fr/products", "/lb/about", "/products")
 * @returns {string} - Language code: "en", "fr", or "ar"
 */
export const getLangFromPath = (pathname) => {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]?.toLowerCase()

  if (firstSegment === 'fr') return 'fr'
  if (firstSegment === 'lb') return 'ar'
  return 'en' // default
}

/**
 * Get URL prefix for a language code
 * @param {string} lang - i18n language code: "en", "fr", or "ar"
 * @returns {string} - URL prefix: "", "fr", or "lb"
 */
export const getLangPrefix = (lang) => {
  if (lang === 'fr') return 'fr'
  if (lang === 'ar') return 'lb'
  return '' // en has no prefix
}

/**
 * Remove locale prefix from pathname
 * @param {string} pathname - Current pathname (e.g., "/fr/products", "/lb/about", "/products")
 * @param {string[]} supportedPrefixes - Array of supported prefixes (default: SUPPORTED_PREFIXES)
 * @returns {string} - Clean pathname without locale prefix (e.g., "/products", "/about")
 */
export const stripLocalePrefix = (pathname, supportedPrefixes = SUPPORTED_PREFIXES) => {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]?.toLowerCase()

  // If first segment is a supported locale prefix, remove it
  if (supportedPrefixes.includes(firstSegment)) {
    return '/' + segments.slice(1).join('/')
  }

  return pathname || '/'
}

/**
 * Remove language prefix from pathname (alias for stripLocalePrefix for backward compatibility)
 * @param {string} pathname - Current pathname (e.g., "/fr/products", "/lb/about", "/products")
 * @returns {string} - Clean pathname without language prefix (e.g., "/products", "/about")
 */
export const stripLangPrefix = stripLocalePrefix

/**
 * Build localized path with prefix
 * @param {string} prefix - Locale prefix: "fr", "lb", or ""
 * @param {string} pathnameWithoutPrefix - Path without prefix (e.g., "/products", "/about")
 * @returns {string} - Pathname with locale prefix (e.g., "/fr/products", "/lb/about", "/products")
 */
export const buildLocalizedPath = (prefix, pathnameWithoutPrefix) => {
  const normalizedPath = pathnameWithoutPrefix.startsWith('/') ? pathnameWithoutPrefix : `/${pathnameWithoutPrefix}`
  
  if (!prefix) {
    return normalizedPath
  }
  
  return `/${prefix}${normalizedPath}`
}

/**
 * Build pathname with language prefix (uses buildLocalizedPath internally)
 * @param {string} lang - i18n language code: "en", "fr", or "ar"
 * @param {string} cleanPath - Path without language prefix (e.g., "/products", "/about")
 * @returns {string} - Pathname with language prefix (e.g., "/fr/products", "/lb/about", "/products")
 */
export const buildPathWithLang = (lang, cleanPath) => {
  const prefix = getLangPrefix(lang)
  return buildLocalizedPath(prefix, cleanPath)
}

/**
 * Get i18n language code from URL prefix
 * @param {string} prefix - URL prefix: "fr", "lb", or ""
 * @returns {string} - i18n language code: "fr", "ar", or "en"
 */
export const prefixToLang = (prefix) => {
  if (prefix === 'fr') return 'fr'
  if (prefix === 'lb') return 'ar'
  return 'en'
}

/**
 * Apply locale prefix to current pathname
 * This is the single source of truth for updating URLs when language or country changes
 * 
 * @param {Object} options
 * @param {string} options.currentPathname - Current pathname (e.g., "/fr/products", "/products")
 * @param {string} [options.country] - Country name (e.g., "France", "Lebanon")
 * @param {string} [options.language] - i18n language code (e.g., "en", "fr", "ar")
 * @param {Function} options.navigate - React Router navigate function
 * @param {Function} [options.onLanguageChange] - Callback when language should change
 * @param {Function} [options.onCountryChange] - Callback when country should change
 * @returns {string} - New pathname with locale prefix
 */
export const applyLocalePrefix = ({
  currentPathname,
  country,
  language,
  navigate,
  onLanguageChange,
  onCountryChange
}) => {
  // Strip any existing locale prefix from current path
  const cleanPath = stripLocalePrefix(currentPathname)
  
  // Compute the new prefix using single source of truth
  const newPrefix = getLocalePrefix({ country, language })
  
  // Build the new path with the computed prefix
  const newPath = buildLocalizedPath(newPrefix, cleanPath)
  
  // Navigate to the new path
  if (navigate && newPath !== currentPathname) {
    navigate(newPath)
  }
  
  // Sync language if provided and different
  if (language && onLanguageChange) {
    onLanguageChange(language)
  }
  
  // Sync country if provided and different
  if (country && onCountryChange) {
    onCountryChange(country)
  }
  
  return newPath
}

