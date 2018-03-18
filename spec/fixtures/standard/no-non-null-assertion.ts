/* tslint:disable */
/* tslint:enable:no-non-null-assertion */
(() => {
  function test (store?: any, nodes?: string[]) {
    return store!.bar.toString()
  }
})
