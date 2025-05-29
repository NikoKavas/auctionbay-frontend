export function getRemainingHours(endTime: string | number): number {
  const endMs =
    typeof endTime === 'string'
      ? new Date(endTime).getTime()
      : endTime
  const now = Date.now()
  const diffMs = endMs - now
  if (diffMs <= 0) return 0
  return Math.ceil(diffMs / (1000 * 60 * 60))
}