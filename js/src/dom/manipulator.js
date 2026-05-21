/**
 * --------------------------------------------------------------------------
 * UI dom/manipulator.js
 * Licensed under MIT (https://github.com/ui/ui/blob/main/LICENSE)
 *
 * This is a modified version of the Bootstrap's dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (value === Number(value).toString()) {
    return Number(value)
  }

  if (value === '' || value === 'null') {
    return null
  }

  if (typeof value !== 'string') {
    return value
  }

  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return value
  }
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-ui-${normalizeDataKey(key)}`, value)
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-ui-${normalizeDataKey(key)}`)
  },

  getDataAttributes(element) {
    if (!element) {
      return {}
    }

    const attributes = {}
    const uiKeys = Object.keys(element.dataset).filter(key => key.startsWith('ui') && !key.startsWith('uiConfig'))

    for (const key of uiKeys) {
      let pureKey = key.replace(/^ui/, '')
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1)
      attributes[pureKey] = normalizeData(element.dataset[key])
    }

    return attributes
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-ui-${normalizeDataKey(key)}`))
  }
}

export default Manipulator
