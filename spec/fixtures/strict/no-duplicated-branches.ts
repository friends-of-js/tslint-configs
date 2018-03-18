/* tslint:disable */
/* tslint:enable:no-duplicated-branches */
(() => {
  if (a >= 0 && a < 10) {
    doFirstThing();
    doTheThing();
  }
  else if (a >= 10 && a < 20) {
    doTheOtherThing();
  }
  else if (a >= 20 && a < 50) {
    doFirstThing();
    doTheThing();  // Noncompliant; duplicates first condition
  }
  else {
    doTheRest();
  }
})
