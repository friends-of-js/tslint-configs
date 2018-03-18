/* tslint:disable */
/* tslint:enable:newspaper-order */
(() => {
  class BadClass {
    private get secondMethod() {
      return true;
    }
    private get firstMethod() {
      return this.secondMethod;
    }
  }
})
