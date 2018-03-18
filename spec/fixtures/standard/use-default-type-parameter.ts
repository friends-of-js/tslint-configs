/* tslint:disable */
/* tslint:enable:use-default-type-parameter */
(() => {
  function test<T = number> (val: T): T {
    return val
  }

  test<number>(1)
})
