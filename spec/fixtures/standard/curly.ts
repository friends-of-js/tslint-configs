/* tslint:disable */
/* tslint:enable:curly */
(() => {
  function test () {
    const a = true
    let b = 0

    if (a) return 1

    if (!a)
      b = 2
      b++
  }
})
