/* tslint:disable */
/* tslint:enable:no-gratuitous-expressions */
(() => {
  function checkState(state: boolean) {
    if (state) {
      console.log("Checking the state");
      if (state) { // Noncompliant, condition is always true
        doSomething();
      }
    }
  }
})
