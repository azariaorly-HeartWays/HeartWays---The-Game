let pct = 0
export const getProgress = () => pct
export const addProgress = (delta = 5) => {
  pct = Math.min(100, pct + delta)
}
export const resetProgress = () => {
  pct = 0
}
