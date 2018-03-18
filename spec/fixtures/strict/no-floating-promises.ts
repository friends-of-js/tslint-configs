/* tslint:disable */
/* tslint:enable:no-floating-promises */
(() => {
  function test () {
    import('./no-any')
  }

  function func () {
    void import('./no-any')
  }
})
