/* tslint:disable */
/* tslint:enable:adjacent-overload-signatures */
(() => {
  class Test {
    state: number

    public get test () {
      return this.state
    }

    public toString () {
      return ''
    }

    public set test (value: number) {
      this.state = value
    }
  }
})
