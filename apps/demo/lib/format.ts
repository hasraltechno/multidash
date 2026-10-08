const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
})

export function formatCurrency(value: number) {
  return currency.format(value)
}

export function formatCompactCurrency(value: number) {
  return `$${compact.format(value)}`
}

export function formatNumber(value: number) {
  return value.toLocaleString("en-US")
}
