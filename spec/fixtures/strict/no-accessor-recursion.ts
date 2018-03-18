/* tslint:disable */
/* tslint:enable:no-accessor-recursion */
(() => {
  let obj = {
    get foo() {
      return this.foo;
    }
  }
})
