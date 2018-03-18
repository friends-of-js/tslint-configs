/* tslint:disable */
/* tslint:enable:no-unused-array */
(() => {
  function getLength(a: string, b: string, c: string) {
    const strings = [];  // Noncompliant
    strings.push(a);
    strings.push(b);
    strings.push(c);

    return a.length + b.length + c.length;
  }
})
