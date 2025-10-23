export function getRemainingHours(endTime: string | number): number {
  const endMs = typeof endTime === 'string' ? new Date(endTime).getTime() : endTime
  const now = Date.now()
  const diffMs = endMs - now
  if (diffMs <= 0) return 0
  return Math.ceil(diffMs / (1000 * 60 * 60))
}

// Returns formatted label (for display)
export function getRemainingTimeLabel(endTime: string | number): string {
  const hours = getRemainingHours(endTime)
  if (hours > 48) {
    const days = Math.floor(hours / 24)
    const remainingHours = hours % 24
    return `${days}d ${remainingHours}h`
  }
  return `${hours}h`
}