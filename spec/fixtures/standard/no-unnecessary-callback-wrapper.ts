/* tslint:disable */
/* tslint:enable:no-unnecessary-callback-wrapper */
(() => {
  function f (val: number) {
    return val
  }

  [].map(item => f(item))
})
