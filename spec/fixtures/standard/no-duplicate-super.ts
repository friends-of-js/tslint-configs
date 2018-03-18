/* tslint:disable */
/* tslint:enable:no-duplicate-super */
(() => {
  class Test extends Date {
    public constructor (params: any) {
      super(params)
      super(params)
    }
  }
})
