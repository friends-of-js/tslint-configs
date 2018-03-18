/* tslint:disable */
/* tslint:enable:no-this-assignment */
(() => {
  function test () {
    const self = this
  }

  class Test {
    public method () {
      const { first } = this

      return first
    }
  }
})
