/* tslint:disable */
/* tslint:enable:no-ignored-initial-value */
(() => {
  function doTheThing(str : string, i: number, strings: string[]) {
    str = i.toString();  // Noncompliant
  }
})
