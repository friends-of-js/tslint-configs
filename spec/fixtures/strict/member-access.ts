/* tslint:disable */
/* tslint:enable:member-access */
(() => {
  class Test {
    public property: boolean = true
    another: boolean = true

    constructor () {
      this.property = false
    }

    get testProperty () {
      return this.property
    }

    set testProperty (value: boolean) {
      this.property = value
    }

    public method () {
      return 1
    }

    anotherMethod () {
      return 2
    }
  }
})
