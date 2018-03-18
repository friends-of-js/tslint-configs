/* tslint:disable */
/* tslint:enable:no-unbound-method */
(() => {
  class TestClass {
    public static test () {}

    public method () {}
  }

  [].forEach(TestClass.test)
  [].forEach(new TestClass().method)
})
