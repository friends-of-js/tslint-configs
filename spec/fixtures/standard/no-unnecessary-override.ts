/* tslint:disable */
/* tslint:enable:no-unnecessary-override */
(() => {
  class Test1 {
    public method (val1: number, val2: number) {
      return val1 + val2
    }
  }

  class Test2 extends Test1 {
    public method (val1: number, val2: number) {
      return super.method(val1, val2)
    }
  }
})
