/* tslint:disable */
/* tslint:enable:no-inferrable-types */
(() => {
  let foo: number = 1

  function test (val: boolean = true) {
    return val
  }

  class Test {
    public property: string = 'string'

    public static method (val: boolean = true) {
      return val
    }
  }
})

