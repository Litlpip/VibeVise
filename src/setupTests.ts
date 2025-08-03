import '@testing-library/jest-dom'

// Polyfill for structuredClone (needed for Chakra UI v3)
if (!global.structuredClone) {
  global.structuredClone = <T>(val: T): T => {
    if (val === undefined) return val
    if (val === null) return val
    return JSON.parse(JSON.stringify(val))
  }
}
