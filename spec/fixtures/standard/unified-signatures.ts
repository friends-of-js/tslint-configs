/* tslint:disable */
/* tslint:enable:unified-signatures */
(() => {
  class Test {
    public test (param: number): any
    public test (param: string): any
    public test (param: any): any {
      return param
    }
  }
})
