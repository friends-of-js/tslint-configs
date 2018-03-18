/* tslint:disable */
/* tslint:enable:no-invalid-this */
(() => {
  function test () {
    return this
  }

  class Test {
    public method () {
      return this
    }
  }
})
