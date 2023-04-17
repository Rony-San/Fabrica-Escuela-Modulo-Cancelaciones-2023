// A mock function to mimic making an async request for data
export function fetchCount (amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 700)
  )
}

export const counterAPI = (par) => {
  return fetchCount(par)
}
