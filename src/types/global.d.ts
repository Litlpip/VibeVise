declare global {
  var structuredClone: <T>(value: T) => T
  var global: typeof globalThis
}

export {}
