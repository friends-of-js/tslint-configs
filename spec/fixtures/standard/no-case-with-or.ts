/* tslint:disable */
/* tslint:enable:no-case-with-or */
(() => {
  switch (x) {
    case 1 || 2: // Noncompliant; only '1' is handled
      doSomething(x);
      break;
    case 3:
      doAnotherThing(x);
      break;
    default:
      console.log("Boom!");  // this happens when x is 2
  }
})
