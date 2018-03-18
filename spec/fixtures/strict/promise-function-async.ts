/* tslint:disable */
/* tslint:enable:promise-function-async */
(() => {
  function test (): Promise<any> {
    return import('./no-magic-numbers')
  }
})
