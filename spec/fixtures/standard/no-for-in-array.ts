/* tslint:disable */
/* tslint:enable:no-for-in-array */
(() => {
  const arr: number[] = [1, 2, 3]

  let sum = 0
  for (const key in arr) {
    sum + arr[key]
  }
})
