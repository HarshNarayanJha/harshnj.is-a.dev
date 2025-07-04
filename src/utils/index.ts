export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-in', { year: "numeric", month: "long", day: "numeric" })
}

export const formatMonth = (date: Date) => {
  return date.toLocaleDateString('en-in', { year: "numeric", month: "short" })
}
