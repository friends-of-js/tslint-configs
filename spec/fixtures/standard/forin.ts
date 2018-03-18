/* tslint:disable */
/* tslint:enable:forin */
(() => {
  const obj = { first: 1, second: 2 }

  let sum = 0
  for (const key in obj) {
    sum + obj[key]
  }
})
