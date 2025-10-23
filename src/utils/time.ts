export function getRemainingHours(endTime: string | number): string {
  const endMs = typeof endTime === 'string' ? new Date(endTime).getTime() : endTime
  const now = Date.now()
  const diffMs = endMs - now

  if (diffMs <= 0) return '0h'

  const hours = Math.ceil(diffMs / (1000 * 60 * 60))

  if (hours > 48) {
    const days = Math.floor(hours / 24)
    const remainingHours = hours % 24
    return `${days}d ${remainingHours}h`
  }

  return `${hours}h`
}
