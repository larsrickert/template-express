export function getTimestamp(): string {
  return `[${new Date().toUTCString()}]`
}
