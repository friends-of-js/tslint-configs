/* tslint:disable */
/* tslint:enable:prefer-conditional-expression */
(() => {
  class Test {
    public method (param: boolean) {
      if (param) {
        this.test = 1
      } else {
        this.test = 2
      }

      return this.test
    }
  }
})
