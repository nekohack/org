export const minYear = 2007
export const currentYear = new Date().getFullYear()

export const totalPx = 800
export const topMarginPx = 80
export const monthPx = (totalPx - topMarginPx) / ((currentYear - minYear) * 12)

export function getTotal(year: number, month: number) {
  return (year - (minYear + 1)) * 12 + month
}
