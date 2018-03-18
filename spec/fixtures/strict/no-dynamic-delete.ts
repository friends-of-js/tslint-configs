/* tslint:disable */
/* tslint:enable:no-dynamic-delete */
(() => {
  const obj = { first: 1, second: 2 }

  for (const key in obj) {
    delete obj[key]
  }
})
